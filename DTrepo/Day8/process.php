<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $textInput = $_POST['textInput'] ?? '';
    $charCount = strlen($textInput);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character Count Result</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Result</h2>
        <p><strong>Input:</strong></p>
        <p><?php echo nl2br(htmlspecialchars($textInput)); ?></p>
        <p><strong>Total Characters:</strong> <?php echo $charCount; ?></p>
        <a href="C:\Users\User\Desktop\JS Course\DTrepo\Day8\index.html"><button>Go Back</button></a>
    </div>
</body>
</html>
