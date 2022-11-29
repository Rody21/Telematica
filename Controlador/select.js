$(document).ready(function () {
  /* --variables para llamar a los select por el id */
  let $Local = document.getElementById("Local");
  let $Visitante = document.getElementById("Visitante");
  let $Arbitro = document.getElementById("Arbitro");

  function cargarLocal() {
    $.ajax({
      type: "GET",
      url: "../Telematica/Modelo/select.php",
      success: function (response) {
        const Locales = JSON.parse(response);

        let template =
          '<option class="form-control" selected disabled>-- Seleccione --</option>';

        Locales.forEach((Local) => {
          template += `<option class="form-control" value="${Local.id_Local}">${Local.Local}</option>`;
        });

        $Local.innerHTML = template;
      },
    });
  }

  cargarLocal();

  function cargarVisitantes(sendDatos) {
    $.ajax({
      type: "POST",
      url: "../Telematica/Modelo/select.php",
      data: sendDatos,
      success: function (response) {
        const Visitas = JSON.parse(response);

        let template =
          '<option class="form-control" selected disabled>-- Seleccione --</option>';

        Visitas.forEach((Visitante) => {
          template += `<option class="form-control" value="${Visitante.id_Visitante}">${Visitante.Visitantes}</option>`;
        });

        $Visitante.innerHTML = template;
      },
    });
  }

  $Local.addEventListener("change", function () {
    const codLocal = $Local.value;

    const sendDatos = {
      codigoLocal: codLocal,
    };

    cargarVisitantes(sendDatos);

    $Arbitro.innerHTML = ""
  });

  function cargarArbitros(sendDatos) {
    $.ajax({
      type: "POST",
      url: "../Telematica/Modelo/select.php",
      data: sendDatos,
      success: function (response) {
        const Jueces = JSON.parse(response);

        let template =
          '<option class="form-control" selected disabled>-- Seleccione --</option>';

        Jueces.forEach((juez) => {
          template += `<option class="form-control" value="${juez.id_juez}">${juez.Name}</option>`;
        });

        $Arbitro.innerHTML = template;
      },
    });
  }

  $Visitante.addEventListener("change", function () {
    const codVisitante = $Visitante.value;

    const sendDatos = {
      codigoVisitante: codVisitante,
    };

    cargarArbitros(sendDatos);
  });
});
