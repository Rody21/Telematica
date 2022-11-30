<?php
include 'varia.php';
$Local = $_POST['Local'];
$Visitante = $_POST['Visitante'];
$Arbitro = $_POST['Arbitro'];
$Estadio = $_POST['Estadio'];
$Fecha = $_POST['Fecha'];
$Hora = $_POST['Hora'];
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$result = mysqli_query($conn, "INSERT INTO Final.Partidos (id_Local,id_Visitante,id_Estadio,id_Arbitro,id_Estado,Fecha,Hora)
VALUES ('$Local','$Visitante','$Estadio','$Arbitro','0','$Fecha','$Hora')"); // genera el query a SQL
?>