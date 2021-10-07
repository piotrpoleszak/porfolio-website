<?php 

    if(isset($_POST['submit']))
        {
            $to = "mailrecivetoshop@gmail.com";
            $from = $_POST['email']; // this is the sender's Email address
            $email = $_POST['email'];
            $first_name = $_POST['first_name'];
            $subject = $_POST['subject'];
            $message = "Twoja nowa wiadomość ze strony od: " . $first_name .  " " . $email . "\r\nWiadomość: " . "\r\n\r\n" . $_POST['message'];
            //$subject2 = "Copy of your form submission";
            //$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

            $headers = "From:" . $from;
            //$headers2 = "From:" . $to;
            //mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
            mail($to,$subject,$message,$headers);
            echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
        }

        header('Location: index.html');
?>