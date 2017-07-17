<?php
$errors = '';
$myemail = 'asparshchandra@gmail.com';

$name = $_POST['Name'];
$subject = $_POST['Subject'];
$email_address = $_POST['Email'];
$phone = $_POST['Phone'];
$message = $_POST['Message'];


$to = $myemail;
$email_subject = $subject;
$email_body = "You have received a new message. ".
" Here are the details:\n Name: $name \n ".
"Email: $email_address\n "Phone: $phone\n Message \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: index.html');

?>