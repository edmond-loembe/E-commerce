<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\CallbackTransformer;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email')
            ->add('roles', ChoiceType::class, [
                'required' => true,
                'multiple' => false,
                'expanded' => false,
                'choices' => [
                    'User' => 'ROLE_USER',
                    'Admin' => 'ROLE_ADMIN',
                ],
            ])
            ->add('password')
            ->add('gender')
            ->add('first_name')
            ->add('last_name')
            ->add('telephone')
            ->add('created_at')
            ->add('modified_at')
            ->add('isVerified')
        ;

        $builder->get('roles')
                ->addModelTransformer(new CallbackTransformer(
                    function($rolesArray) {
                        return count($rolesArray) ? $rolesArray[0] : null;
                    },
                    function($rolesString) {
                        return [$rolesString];
                    }
                ));
    }



    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}