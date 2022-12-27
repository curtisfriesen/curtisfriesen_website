<?php
// Fetching Values from URL.

$to = "oliveahfriesen@gmail.com";
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail
 
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

	if (preg_match("/^[0-9]{10}$/", $subject)) {
	echo "<body style='background-color:#fff; color:#333; margin-top: 5em; font-family: Arial; font-size: 40pt; text-align: center;'>* Please Fill Valid Subject *</body>";
	} 

	else {

	// To send HTML mail, the Content-type header must be set.
	$headers = "From: ". $email ." WEBSITE FORM SUBMISSION: " . $name; // Sender's Email

	$template = "Name: " . $name . "\n" .
	"Email: " . $email . "\n" .
	"Subject: " . $subject . "\n" .
	"Message: " . $message . "\n";

	$sendmessage = "CONTACT FORM SUBMISSION\n\n". $template . "";

	// Message lines should not exceed 70 characters (PHP rule), so wrap it.
	$sendmessage = wordwrap($sendmessage, 70);

	// Send mail by PHP Mail Function.
	mail($to, $subject, $sendmessage, $headers);

	echo "<body style='background-color:#fff; color:#333; margin-top: 5em; font-family: Arial; font-size: 40pt; text-align: center;'>
		  Your e-mail has been sent, we will contact you soon!<br>
		  <a href='http://liverusticbrantford.com'>Back To Home</a></body>";
	}
} 
else {
echo "<body style='background-color:#fff; color:#333; margin-top: 5em; font-family: Arial; font-size: 40pt; text-align: center;'>* INVALID EMAIL *</body>";
}
?>