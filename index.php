<?php

    setcookie('session', md5(rand()), time() + 60 * 60 * 24 * 30, '/');

?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Cookies</title>
    <link rel="stylesheet" href="css/awsm.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- more info: http://php.net/manual/en/function.setcookie.php !-->

    <h2>Cookies</h2>

<script src="js/cookies.js"></script>
</body>
</html>