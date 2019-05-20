<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TIDController extends AbstractController
{
    /**
     * @Route("/t_i_d", name="t_i_d")
     */
    public function index()
    {
        return $this->render('tid/index.html.twig', [
            'controller_name' => 'TIDController',
        ]);
    }
}
