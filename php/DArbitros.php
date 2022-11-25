<?php
include 'varia.php';
$id_Arbitros = $_GET['id_Arbitros'];
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$result = mysqli_query($conn, "DELETE FROM Final.Arbitros WHERE id_arbitro = '$id_Arbitros'"); // genera el query a SQL
?>