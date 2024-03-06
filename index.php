<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Bootstrap Form</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <!-- jQuery and Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!-- jQuery Validation -->
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
</head>
<body>

<div class="container mt-5">
    <form id="myForm" enctype="multipart/form-data">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="mobile">Mobile Number:</label>
            <input type="tel" class="form-control" id="mobile" name="mobile" required>
        </div>
        <div class="form-group">
            <label for="email">Email ID:</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="city">City:</label>
            <input type="text" class="form-control" id="city" name="city" required>
        </div>
        <div class="form-group">
            <label for="state">State:</label>
            <input type="text" class="form-control" id="state" name="state" required>
        </div>
        <div class="form-group">
            <label for="country">Country:</label>
            <input type="text" class="form-control" id="country" name="country" required>
        </div>
        <div class="form-group">
            <label for="image">Image Gallery:</label>
            <input type="file" class="form-control-file" id="image" name="image" accept="image/*" required>
        </div>
        <div id="imagePreview" class="mt-2"></div>

        <button type="button" class="btn btn-primary mt-3" id="uploadBtn">Upload Image</button>
    </form>
</div>

<script>
    $(document).ready(function () {
        // Add jQuery validation
        $("#myForm").validate();

        // Display image preview on file input change
        $("#image").change(function () {
            readURL(this);
        });

        // Image upload without submit button
        $("#uploadBtn").click(function () {
            if ($("#myForm").valid()) {
                var formData = new FormData($("#myForm")[0]);

                $.ajax({
                    url: "upload.php", // Specify your server-side script for image upload
                    type: "POST",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        alert("Image uploaded successfully!");
                        // You can handle the response from the server as needed
                    },
                    error: function (error) {
                        console.error("Error uploading image:", error);
                    }
                });
            }
        });
    });

    // Function to display image preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#imagePreview").html("<img src='" + e.target.result + "' class='img-fluid' alt='Image Preview'>");
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>

</body>
</html>
