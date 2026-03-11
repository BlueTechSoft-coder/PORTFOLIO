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
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['subscribe'])) {
    // Sanitize and validate email
    $email = trim($_POST['email']);
    
    // Validate email
    if (empty($email)) {
        $error = "Email address is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Invalid email format.";
    } else {
        // Check if email already exists
        $check_sql = "SELECT id FROM subscribers WHERE email = ?";
        $check_stmt = $conn->prepare($check_sql);
        $check_stmt->bind_param("s", $email);
        $check_stmt->execute();
        $check_stmt->store_result();
        
        if ($check_stmt->num_rows > 0) {
            $error = "This email is already subscribed.";
        } else {
            // Prepare SQL statement
            $sql = "INSERT INTO subscribers (email) VALUES (?)";
            $stmt = $conn->prepare($sql);
            
            if ($stmt) {
                $stmt->bind_param("s", $email);
                
                if ($stmt->execute()) {
                    $success = "Thank you for subscribing!";
                    // Reset email variable
                    $email = "";
                } else {
                    $error = "Error: " . $stmt->error;
                }
                
                $stmt->close();
            } else {
                $error = "Error preparing statement: " . $conn->error;
            }
        }
        $check_stmt->close();
    }
}

// Close connection
$conn->close();

// Redirect back to the About page with message
if (isset($_SERVER['HTTP_REFERER'])) {
    $redirect_url = $_SERVER['HTTP_REFERER'];
    
    // Add message parameters to URL
    if (isset($success)) {
        $redirect_url .= (strpos($redirect_url, '?') === false ? '?' : '&') . 'subscribe=success&message=' . urlencode($success);
    } elseif (isset($error)) {
        $redirect_url .= (strpos($redirect_url, '?') === false ? '?' : '&') . 'subscribe=error&message=' . urlencode($error);
    }
    
    header("Location: " . $redirect_url);
    exit();
} else {
    // Fallback if HTTP_REFERER is not available
    header("Location: About.html");
    exit();
}
?>