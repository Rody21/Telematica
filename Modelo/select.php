<?php
    function obtenerLocal(){
        include '../php/Prueba.php';

        $query = "SELECT id_Equipos,Equipo FROM Final.Equipos";
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


    if(isset($_POST['codigoLocal']) ){
        $id_Local = $_POST['codigoLocal'];
        obtenerVisitante($id_Local);
    }else if(isset($_POST['codigoVisitante'])){
        $id_Visitante = $_POST['codigoVisitante'];
        obtenerArbitros($id_Visitante);
    }else{
        obtenerLocal();
    }
    

?>