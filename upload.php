<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["image"])) {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["image"]["name"]);

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        echo "Image uploaded successfully";
    } else {
        echo "Error uploading image.";
    }
} else {
    echo "Invalid request.";
}
?>
