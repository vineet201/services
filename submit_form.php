<!-- submit_form.php -->
<?php
// Replace these database details with your own
$servername = "your_database_server";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert data into the table (replace 'your_table_name' with your actual table name)
$sql = "INSERT INTO your_table_name (name, phone, email, message) VALUES ('$name', '$phone', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Form submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
