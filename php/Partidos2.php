<?php
include 'varia.php';
$temparray = array();
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$result = mysqli_query($conn, "SELECT L.equipo as Local,V.equipo as Visitante
FROM Final.Partidos P, Final.Local L, Final.Visitante V
WHERE id_local=L.id_Equipos && id_Estado=0 && id_Visitante=V.id_Equipos"); // genera el query a SQL
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        array_push($temparray,$row);
    }
    
}

echo json_encode($temparray);
?>