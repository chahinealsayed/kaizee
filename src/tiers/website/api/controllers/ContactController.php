<?php

namespace app\tiers\website\api\controllers;

use Yii;
use app\components\inherits\rest\Controller;

class ContactController extends Controller
{
    public function actionTest()
    {
        $postData = Yii::$app->request->post();
        $program = $postData['program'];
        $name = $postData['name'];
        $email = $postData['email'];
        $website = $postData['website'];
        $company = $postData['CompanyName'];
        $title = $postData['title'];
        $address = $postData['address'];
        $language = $postData['language'];
        $country = $postData['country'];
        $phone = $postData['phone'];
        $htmlBody = "
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #333;
                }
                p {
                    margin-bottom: 10px;
                }
                strong {
                    color: #555;
                }
            </style>
        </head>
        <body>
            <div class='container'>
                <h1>Contact Form Submission</h1>
    ";

        foreach ($postData as $key => $value) {
            $htmlBody .= "<p><strong>" . ucfirst($key) . ":</strong> $value</p>";
        }

        $htmlBody .= "
            </div>
        </body>
        </html>
    ";
        Yii::$app->mailer->compose()
            ->setFrom($email)
            ->setTo(Yii::$app->params['senderEmail'])
            ->setSubject('Contact Form Submission')
            ->setHtmlBody($htmlBody)
            ->send();

        // return "Email sent successfully";
    }
}
