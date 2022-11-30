<?php
include 'varia.php';
$temparray = array();
$conn = mysqli_connect($Bendpoint, $BUSER, $Bclave, $BName);  // Establece conexi�n
$result = mysqli_query($conn, "SELECT Equipo, PJ, G, E, P, GF, GC, DG, Pts
FROM Final.Posiciones1, Final.Local
WHERE Id_Equipo=id_Equipos
ORDER BY Pts desc"); // genera el query a SQL
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        array_push($temparray,$row);
    }
    
}

echo json_encode($temparray);
?>