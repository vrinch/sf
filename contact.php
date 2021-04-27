<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $POST['phone'];
  $message = $_POST['message'];

  $email_form = $email;
  $email_subject = 'New website contact form submission';

  $email_body = "Sender Name: $name.\n".
                  "Phone number: $phone.\n".
                    "Message: $message.\n";


  $recipient = "enquiries@sf-protectiveservices.com";
  $mailheader = "From: $email_form \r\n";
  mail($recipient, $email_subject, $email_body, $mailheader) or die("Error!");
  echo "success";
?>
