<?php
// Database configuration
$host = "localhost";
$username = "ourlady1_andrew";
$password = "Bensey_05@625012389";
$database = "ourlady1_andrew";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set charset to UTF-8
$conn->set_charset("utf8mb4");

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    // Sanitize inputs
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone_number = trim($_POST['mobile']);
    $subject = trim($_POST['subject']);
    $message = trim($_POST['message']);
    
    // Validate inputs
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required.";
    } elseif (strlen($name) > 100) {
        $errors[] = "Name must be less than 100 characters.";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    } elseif (strlen($email) > 255) {
        $errors[] = "Email must be less than 255 characters.";
    }
    
    if (!empty($phone_number) && strlen($phone_number) > 20) {
        $errors[] = "Phone number must be less than 20 characters.";
    }
    
    if (empty($subject)) {
        $errors[] = "Subject is required.";
    } elseif (strlen($subject) > 200) {
        $errors[] = "Subject must be less than 200 characters.";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required.";
    }
    
    // If no errors, insert into database
    if (empty($errors)) {
        // Prepare SQL statement
        $sql = "INSERT INTO contact (name, email, phone_number, subject, message) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        
        if ($stmt) {
            $stmt->bind_param("sssss", $name, $email, $phone_number, $subject, $message);
            
            if ($stmt->execute()) {
                $success = "Your message has been sent successfully! I'll get back to you soon.";
                
                // Optional: Send email notification
                $to = "andrewbarasa412@gmail.com";
                $email_subject = "New Contact Form Submission: " . $subject;
                $email_body = "You have received a new message from your website contact form.\n\n";
                $email_body .= "Name: " . $name . "\n";
                $email_body .= "Email: " . $email . "\n";
                $email_body .= "Phone: " . $phone_number . "\n";
                $email_body .= "Subject: " . $subject . "\n";
                $email_body .= "Message:\n" . $message . "\n";
                $headers = "From: " . $email . "\r\n" .
                          "Reply-To: " . $email . "\r\n" .
                          "X-Mailer: PHP/" . phpversion();
                
                // Uncomment to send email
                // mail($to, $email_subject, $email_body, $headers);
                
            } else {
                $error = "Error: " . $stmt->error;
            }
            
            $stmt->close();
        } else {
            $error = "Error preparing statement: " . $conn->error;
        }
    } else {
        $error = implode("<br>", $errors);
    }
}

// Close connection
$conn->close();

// Determine which page to redirect back to
if (isset($_SERVER['HTTP_REFERER'])) {
    $redirect_url = $_SERVER['HTTP_REFERER'];
    
    // Remove any existing message parameters
    $redirect_url = preg_replace('/[?&]contact=(success|error).*$/', '', $redirect_url);
    $redirect_url = preg_replace('/[?&]message=.*$/', '', $redirect_url);
    
    // Add message parameters to URL
    $separator = (strpos($redirect_url, '?') === false) ? '?' : '&';
    
    if (isset($success)) {
        $redirect_url .= $separator . 'contact=success&message=' . urlencode($success);
    } elseif (isset($error)) {
        $redirect_url .= $separator . 'contact=error&message=' . urlencode($error);
    }
    
    header("Location: " . $redirect_url);
    exit();
} else {
    // Fallback if HTTP_REFERER is not available
    header("Location: index.html");
    exit();
}
?>