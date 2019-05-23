<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
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

    /**
    * @Route("/rules", name="rules_file")
    **/
        public function downloadRules(){
            $response = new BinaryFileResponse('path/to/../templates/reglement_TID.docx');
            $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT,'reglement_TID.docx');
            return $response;
        }

    /**
     * @Route("/form", name="form_file")
     **/
    public function downloadForm(){
        $response = new BinaryFileResponse('path/to/../templates/formulaire_TID.docx');
        $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT,'reglement_TID.docx');
        return $response;
    }
}
