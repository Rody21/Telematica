<?php
include 'varia.php';
$Nombre = $_GET['Nombre'];
$Procedencia = $_GET['Procedencia'];
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$result = mysqli_query($conn, "INSERT INTO Final.Arbitros (Nombre,Procedencia) VALUES ('$Nombre', '$Procedencia')"); // genera el query a SQL
?>