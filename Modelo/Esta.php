<?php

    function obtenerPartido(){
        include '../php/Prueba.php';

        $query = "SELECT id_Partido, L.Equipo as Local, V.Visitante as Visitante
        FROM Final.Partidos P, Final.Local L, Final.Visitante V
        WHERE id_local=L.id_Equipos && id_Estado=1 && P.id_Visitante=V.id_Visitante";

        $result = mysqli_query($conection, $query);

        $json = array();

        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'id_Partido' => $row['id_Partido'],
                'Local' => $row['Local'],
                'Visitante' => $row['Visitante'],
            );
        }  

        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

    obtenerPartido();
?>