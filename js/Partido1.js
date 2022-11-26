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
        $("#Partidos1").append(
          "<tr><td>" +
            res[i]["Local"] +
            "</td><td>" +
            res[i]["Visitante"] +
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
        $("#Partido2").append(
          "<tr><td>" +
            res[i]["Local"] +
            "</td><td>" +
            res[i]["Visitante"] +
            "</td></tr>"
        );
      }
    },
  });

  $.ajax({
    url: "../Telematica/php/Partidos3.php",
    type: "GET",
    dataType: "JSON",
    data: {}, //this is data you send to your server
    success: function (res) {
      console.log(res);
      console.log(res.length);

      for (i = 0; i < res.length; i++) {
        $("#Partido3").append(
          "<tr><td>" +
            res[i]["Local"] +
            "</td><td>" +
            res[i]["Visitante"] +
            "</td></tr>"
        );
      }
    },
  });

  $.ajax({
    url: "../Telematica/php/Partidos4.php",
    type: "GET",
    dataType: "JSON",
    data: {}, //this is data you send to your server
    success: function (res) {
      console.log(res);
      console.log(res.length);

      for (i = 0; i < res.length; i++) {
        $("#Partido4").append(
          "<tr><td>" +
            res[i]["Local"] +
            "</td><td>" +
            res[i]["Visitante"] +
            "</td></tr>"
        );
      }
    },
  });
}
table();
