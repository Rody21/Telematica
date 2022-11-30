$(document).ready(function () {
    let $Resultado = document.getElementById("Resultado");

    function cargarEstadistica() {
        $.ajax({
          type: "GET",
          url: "../Telematica/Modelo/Esta.php",
          success: function (response) {
            const Partidus = JSON.parse(response);
        
            let template =
            '<option class="form-control" selected disabled>-- Seleccione --</option>';
    
            Partidus.forEach((parti) => {
            template += `<option class="form-control" value="${parti.id_Partido}">${parti.Local} vs ${parti.Visitante}</option>`;
            });
    
            $Resultado.innerHTML = template;
          },
        });
    }
    cargarEstadistica();

});