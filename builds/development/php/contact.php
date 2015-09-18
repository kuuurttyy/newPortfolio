<?php 

$recieverEmail = 'kurt@kurtstubbings.com';

$subject = $_POST["subject"];
$email = $_POST["email"];
$message = $_POST["message"];
$name = $_POST["name"];

$emailSubject = 'Subject: ' .$subject;

$mailHeader = "From:" .$email . "\r\n";
$mailHeader .= "Reply-To: " .$email . "\r\n";

$messageBody = "From: " .$name . "\r\n";
$messageBody .= "\r\n Message: \r\n" .nl2br($message) . "\r\n";

if( empty($name) or empty($email) or empty($subject) or empty($message) ) {
    echo "You didn't fill out all the required information! Go back and try again.";
} else {
    mail($recieverEmail, $emailSubject, $messageBody, $mailHeader);
    echo "Thanks for your email, I will get back to you as soon as possible!";
}

?>