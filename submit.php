<?php  
// Check if the form was submitted  
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
  // Get form data and sanitize (crucial for security!)  
  $name = htmlspecialchars($_POST["name"]);  
  $email = htmlspecialchars($_POST["email"]);  
  $mobile = htmlspecialchars($_POST["mobile"]);  
  $subject = htmlspecialchars($_POST["subject"]);  
  $message = htmlspecialchars($_POST["message"]);  


  // Basic input validation (add more robust validation as needed)  
  if (empty($name) || empty($email) || empty($mobile) || empty($subject) || empty($message)) {  
    echo "Please fill in all fields.";  
    exit(); // Stop further processing if validation fails  
  }  

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {  
    echo "Invalid email address.";  
    exit();  
  }  


  // Set up email headers  
  $to = "andrewbarasa412@gmail.com"; // Replace with your email address  
  $headers = "From: " . $email . "\r\n" .  
              "Reply-To: " . $email . "\r\n" .  
              "X-Mailer: PHP/" . phpversion();  

  // Compose email body  
  $body = "Name: " . $name . "\n\n" .  
          "Email: " . $email . "\n\n" .  
          "Mobile: " . $mobile . "\n\n" .  
          "Subject: " . $subject . "\n\n" .  
          "Message: " . $message;  

  // Send the email (error handling improved)  
  if (mail($to, $subject, $body, $headers)) {  
    echo "Thank you for your message! We'll get back to you soon.";  
  } else {  
    echo "There was an error sending your message. Please try again later.  Contact the site administrator.";  
  }  
}  
?>