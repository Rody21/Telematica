$(document).ready(function () {
  /* --variables para llamar a los select por el id */
  let $Local = document.getElementById("Local");
  let $Visitante = document.getElementById("Visitante");
  let $Arbitro = document.getElementById("Arbitro");
  let $Estadio = document.getElementById("Estadio");
  let $Grupo = document.getElementById("Grupo");
  let $intro = document.getElementById("intro")

  function cargarGrupo() {
    $.ajax({
      type: "GET",
      url: "../Telematica/Modelo/select.php",
      success: function (response) {
        const Grupos = JSON.parse(response);

        let template =
          '<option class="form-control" selected disabled>-- Seleccione --</option>';

        Grupos.forEach((Group) => {
          template += `<option class="form-control" value="${Group.id_grupo}">${Group.grupo}</option>`;
        });

        $Grupo.innerHTML = template;
      },
    });
  }

  cargarGrupo();

  function cargarLocal(sendDatos) {
    $.ajax({
      type: "POST",
      url: "../Telematica/Modelo/select.php",
      data: sendDatos,
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

  $Grupo.addEventListener("change", function () {
    const codGrupo = $Grupo.value;

    const sendDatos = {
      codigoGrupo: codGrupo,
    };

    cargarLocal(sendDatos);

    $Arbitro.innerHTML = "";
    $Estadio.innerHTML = "";
    $Visitante.innerHTML = "";
  });

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

    $Arbitro.innerHTML = "";
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

  function cargarEstadio(sendDatos) {
    $.ajax({
      type: "POST",
      url: "../Telematica/Modelo/select.php",
      data: sendDatos,
      success: function (response) {
        const Estadium = JSON.parse(response);

        let template =
          '<option class="form-control" selected disabled>-- Seleccione --</option>';

        Estadium.forEach((Estadios) => {
          template += `<option class="form-control" value="${Estadios.id_Estadio}">${Estadios.Estadios}</option>`;
        });

        $Estadio.innerHTML = template;
      },
    });
  }

  $Arbitro.addEventListener("change", function () {
    const codArbitros = $Arbitro.value;

    const sendDatos = {
      codigoArbitros: codArbitros,
    };

    cargarEstadio(sendDatos);
  });
});
