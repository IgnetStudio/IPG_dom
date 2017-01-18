<?php

    setcookie('session', md5(rand()), time() + 60 * 60 * 24 * 20);

?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Cookies Page</title>
    <link rel="stylesheet" href="css/awsm.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <h2>Cookies Page</h2>

<script src="../js/cookies.js"></script>
</body>
</html>