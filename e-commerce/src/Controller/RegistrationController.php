<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\EmailVerifier;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Mailer\MailerInterface;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;

class RegistrationController extends AbstractController
{
    private $emailVerifier;

    public function __construct(EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }

    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, SerializerInterface $serializer, EntityManagerInterface $em): Response    {
        // $user = new User();
        // $form = $this->createForm(RegistrationFormType::class, $user);
        // $form->handleRequest($request);

        // if ($form->isSubmitted() && $form->isValid()) {
        //     // encode the plain password
        //     $user->setPassword(
        //         $passwordEncoder->encodePassword(
        //             $user,
        //             $form->get('plainPassword')->getData()
        //         )
        //     );

        //     $entityManager = $this->getDoctrine()->getManager();
        //     $entityManager->persist($user);
        //     $entityManager->flush();
        $jsonRecu = $request->getContent();
        $user = $serializer->deserialize($jsonRecu, User::class, 'json');
        $plainPassword = $user->getPassword();
        $encoded = $passwordEncoder->encodePassword($user, $plainPassword);
        $user->setPassword($encoded);
        $user->setRoles(['ROLE_USER']);
        $user->setCreatedAt(new \DatetimeImmutable());
        $em->persist($user);
        $em->flush();

            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
                (new TemplatedEmail())
                    ->from(new Address('confirm@okimono.com', 'okimonoBot'))
                    ->to($user->getEmail())
                    ->subject('Please Confirm your Email')
                    ->htmlTemplate('registration/confirmation_email.html.twig')
            );
            // do anything else you need here, like send an email

            // return $this->redirectToRoute('app_login');
        // }

        // return $this->render('registration/register.html.twig', [
        //     'registrationForm' => $form->createView(),
        // ]);
        return $this->json($user, 201, []);
    }

    /**
     * @Route("/verify/email", name="app_verify_email")
     */
    public function verifyUserEmail(Request $request): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $this->getUser());
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('verify_email_error', $exception->getReason());

            return $this->redirectToRoute('app_register');
        }

        // @TODO Change the redirect on success and handle or remove the flash message in your templates
        $this->addFlash('success', 'Your email address has been verified.');

        return $this->redirectToRoute('app_login');
    }
}
