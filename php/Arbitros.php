<?php
include 'varia.php';
$temparray = array();
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$result = mysqli_query($conn, "SELECT id_arbitro,Nombre,Equipo as Procedencia FROM Final.Arbitros, Final.Local WHERE Procedencia=id_Equipos"); // genera el query a SQL
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        array_push($temparray,$row);
    }
    
}

echo json_encode($temparray);
?>