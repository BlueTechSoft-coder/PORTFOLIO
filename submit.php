<?php  
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
    // Collect and sanitize input data  
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);  
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);  
    $mobile = filter_var(trim($_POST['mobile']), FILTER_SANITIZE_STRING);  
    $subject = filter_var(trim($_POST['subject']), FILTER_SANITIZE_STRING);  
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);  

    // Check that the required fields are not empty  
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {  
        // Set the recipient email address  
        $to = 'recipient@example.com'; // Replace with your email address  

        // Set the email subject  
        $email_subject = "Contact Form: $subject";  

        // Create the email content  
        $email_body = "You have received a new message from your website contact form.\n\n" .  
                      "Name: $name\n" .  
                      "Email: $email\n" .  
                      "Mobile: $mobile\n" .  
                      "Message:\n$message\n";  

        // Set the email headers  
        $headers = "From: $name <$email>\r\n";  
        $headers .= "Reply-To: $email\r\n";  

        // Send the email  
        if (mail($to, $email_subject, $email_body, $headers)) {  
            echo "Message sent successfully!";  
        } else {  
            echo "There was a problem sending the email. Please try again.";  
        }  
    } else {  
        echo "Please fill all the required fields.";  
    }  
} else {  
    echo "Invalid request method.";  
}  
?>