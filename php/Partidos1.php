<?php
include 'varia.php';
$temparray = array();
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$result = mysqli_query($conn, "SELECT (SELECT equipo FROM Final.Partidos1, Final.Equipos  WHERE id_local=id_Equipos && id_Partido = 1) as Local, (SELECT equipo FROM Final.Partidos1, Final.Equipos  WHERE id_Visitante=id_Equipos && id_Partido = 1) as Visitante 
FROM Final.Partidos1, Final.Equipos
ORDER BY Local  desc LIMIT 1"); // genera el query a SQL
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        array_push($temparray,$row);
    }
    
}

echo json_encode($temparray);
?>