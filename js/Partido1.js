function table() {
  $.ajax({
    url: "../Telematica/php/Partidos1.php",
    type: "GET",
    dataType: "JSON",
    data: {}, //this is data you send to your server
    success: function (res) {
      console.log(res);
      console.log(res.length);

      for (i = 0; i < res.length; i++) {
        c=i+1;
        $("#Partidos1").append(
          "<tr><td>" + res[i]["Local"] +
            "</td><td>" + res[i]["GolesL"] +
            "</td><td>" + res[i]["GolesV"] +
            "</td><td>" + res[i]["Visitante"] +
            "</td></tr>"
        );
      }
    },
  });

  $.ajax({
    url: "../Telematica/php/Partidos2.php",
    type: "GET",
    dataType: "JSON",
    data: {}, //this is data you send to your server
    success: function (res) {
      console.log(res);
      console.log(res.length);

      for (i = 0; i < res.length; i++) {
        $("#Proximos").append(
          "<tr><td>" + res[i]["Local"] +
            "</td><td>" + res[i]["Visitante"] +
            "</td></tr>"
        );
      }
    },
  });

}
table();
