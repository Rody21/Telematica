function table(){
    $.ajax({
        url: "../Telematica/php/Partidos1.php", 
        type: "GET",
        dataType: "JSON",
        data: {}, //this is data you send to your server
        success: function(res) {
          console.log(res);
          console.log(res.length);
      
          for (i = 0; i < res.length; i++) {
            $('#Partidos1').append(
                '<tr><td>' + res[i]['Local'] +
                '</td><td>' + res[i]['Visitante'] +
                '</td></tr>')
          }
      
        }
      })
}
table();