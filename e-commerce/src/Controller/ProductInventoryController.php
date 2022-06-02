<?php

namespace App\Controller;

use App\Entity\ProductInventory;
use App\Form\ProductInventoryType;
use App\Repository\ProductInventoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/product/inventory")
 */
class ProductInventoryController extends AbstractController
{
    /**
     * @Route("/", name="product_inventory_index", methods={"GET"})
     */
    public function index(ProductInventoryRepository $productInventoryRepository): Response
    {
        return $this->render('product_inventory/index.html.twig', [
            'product_inventories' => $productInventoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="product_inventory_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $productInventory = new ProductInventory();
        $form = $this->createForm(ProductInventoryType::class, $productInventory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($productInventory);
            $entityManager->flush();

            return $this->redirectToRoute('product_inventory_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('product_inventory/new.html.twig', [
            'product_inventory' => $productInventory,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="product_inventory_show", methods={"GET"})
     */
    public function show(ProductInventory $productInventory): Response
    {
        return $this->render('product_inventory/show.html.twig', [
            'product_inventory' => $productInventory,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="product_inventory_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ProductInventory $productInventory): Response
    {
        $form = $this->createForm(ProductInventoryType::class, $productInventory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('product_inventory_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('product_inventory/edit.html.twig', [
            'product_inventory' => $productInventory,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="product_inventory_delete", methods={"POST"})
     */
    public function delete(Request $request, ProductInventory $productInventory): Response
    {
        if ($this->isCsrfTokenValid('delete'.$productInventory->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($productInventory);
            $entityManager->flush();
        }

        return $this->redirectToRoute('product_inventory_index', [], Response::HTTP_SEE_OTHER);
    }
}
