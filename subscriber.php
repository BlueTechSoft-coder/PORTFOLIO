<?php

// connecting to the database
    $db_server = "localhost";
    $db_user = "Andrew";
    $db_pass = "Bensey@05";
    $db_name = "portfoliodb";
    $conn = "";

    try{
        $conn = mysqli_connect($db_server,
                               $db_user,
                               $db_pass,
                               $db_name);
    }
    catch(mysqli_sql_exception){
        // echo "Could not connect! <br>";
    }

// checking if the database is connected
    if($conn){
        // echo "You are connected! <br>";
    }
    else{
        // echo "You are not connected! <br>";
    }

    if(isset($_POST["subscribe"])){

        if($_SERVER["REQUEST_METHOD"] == "POST"){

            $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

            $sql = "INSERT INTO subscribers(email)
                    VALUES('$email')";
            try{
                mysqli_query($conn, $sql);
                // echo "Thank you for subscribing with us! <br>";
            }
            catch(mysqli_sql_exception){
                // echo "You did not subscribe! Try Again. <br>";
            }
        }
    }

    // closing the database connection
    mysqli_close($conn);
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
body{
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family:'Poppins', sans-serif;
    background-color: rgb(1, 1, 51);
}
#thank{
    margin: 0 auto;
    height: 100%;
    padding: 70px 50px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    z-index: 999;
    box-shadow: 0 0 10px 0 black;
}
a{
    text-decoration: none;
    background-color: rgb(1, 1, 51);
    color: aqua;
    padding: 7px;
    border-radius: 7px;
}
    </style>
</head>
<body>
    <div id="thank">
        <h2>Thank You!</h2>
        <a href="index.html">Back Home</a>
    </div>
</body>
</html>