<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $checkin = $_POST['checkin'];
    $checkout = $_POST['check-out-date'];
    $guests = $_POST['guests'];

    // You can perform further validation here

    // Example: Save form data to a database (assuming you have a MySQL database set up)
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "your_database";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO bookings (name, phone, email, checkin, checkout, guests) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $name, $phone, $email, $checkin, $checkout, $guests);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Booking submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    // If the form is not submitted, redirect back to the form page
    header("Location: /path/to/your/form/page.html");
    exit();
}
?>
