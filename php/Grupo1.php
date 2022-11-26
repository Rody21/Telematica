<?php
include 'varia.php';
$Local = $_GET['Local'];
$Visitante = $_GET['Visitante'];
$Arbitro = $_GET['Arbitro'];
$Estadio = $_GET['Estadio'];
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$result = mysqli_query($conn, "INSERT INTO Final.Partidos (id_Local,id_Visitante,id_Estadio,id_Arbitro,id_Estado)
VALUES ('$Local','$Visitante','$Estadio','$Arbitro','0')"); // genera el query a SQL
?>