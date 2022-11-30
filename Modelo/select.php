<?php

    function obtenerGrupo(){
        include '../php/Prueba.php';

        $query = "SELECT id_grupo,Grupo FROM Final.Grupos";
        $result = mysqli_query($conection, $query);

        $json = array();

        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'id_grupo' => $row['id_grupo'],
                'grupo' => $row['Grupo'],
            );
        }  

        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

    function obtenerLocal($id_grupo){
        include '../php/Prueba.php';

        $query = "SELECT id_Equipos,Equipo FROM Final.Local WHERE id_grupo=$id_grupo";
        $result = mysqli_query($conection, $query);

        $json = array();

        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'id_Local' => $row['id_Equipos'],
                'Local' => $row['Equipo'],
            );
        }  

        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

    function obtenerVisitante($id_Local){
        include '../php/Prueba.php';

        $query = "SELECT id_Visitante,Visitante FROM Final.Visitante WHERE id_Visitante!=$id_Local";
        $result = mysqli_query($conection, $query);
        
        $json = array();

        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'id_Visitante' => $row['id_Visitante'],
                'Visitantes' => $row['Visitante'],
            );
        }  

        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

    function obtenerArbitros($id_Visitante){
        include '../php/Prueba.php';

        $query = "SELECT id_arbitro,Nombre FROM Final.Arbitros WHERE Procedencia!=$id_Visitante";
        $result = mysqli_query($conection, $query);
        
        $json = array();

        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'id_juez' => $row['id_arbitro'],
                'Name' => $row['Nombre'],
            );
        }  

        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

    function obtenerEstadio(){
        include '../php/Prueba.php';

        $query = "SELECT id_estadio,Estadio FROM Final.Estadios";
        $result = mysqli_query($conection, $query);
        
        $json = array();

        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'id_Estadio' => $row['id_estadio'],
                'Estadios' => $row['Estadio'],
            );
        }  

        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

    if(isset($_POST['codigoGrupo'])){
        $id_grupo = $_POST['codigoGrupo'];
        obtenerLocal($id_grupo);
    }elseif(isset($_POST['codigoLocal'])){
        $id_Local = $_POST['codigoLocal'];
        obtenerVisitante($id_Local);
    }else if(isset($_POST['codigoVisitante'])){
        $id_Visitante = $_POST['codigoVisitante'];
        obtenerArbitros($id_Visitante);
    }elseif(isset($_POST['codigoArbitros'])){
        obtenerEstadio();
    }else{
        obtenerGrupo();
    }
    

?>