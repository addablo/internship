module = (function() {
  var myArr = [];

  function log(rows) {
    var str = '';
    $.each(rows, function(i, row) {
      str += '<li>' + row + '</li><br>';
    });
    $('#log').html(str);
  }


  return {

    filterData: function() {

      $.get('/data', function(response) {
        for (i in response){
          myArr.push(response[i].text);
        }
        module.parseData(myArr);
      })

    },

    parseData: function(dataDisplay) {

      $('#query').click(function () {
        var search = this.value.toLowerCase();
        if(search == ""){
          $('#log').html("");
        }
    });

      $('#query').keypress(function(e){
          var txt = String.fromCharCode(e.which);
          console.log(txt + ' : ' + e.which);
          if(!txt.match(/[A-Za-z0-9+#.]/))//+#-.
          {
              return false;
          }
      });

      $("#query").on('keyup', function() {

        var search = this.value.toLowerCase();
        var result = [];

        if(search == ""){

          $('#log').html("");

        }else{

          $.grep(dataDisplay, function(el) {
            el.toLowerCase().indexOf(search) === 0 && result.push(el);
          });

          if(result.length == 0){
            $('#log').html('No items for your criteria were found.')
          }else{
            log(result)
          }

        }

      });
    }
  }

})();

window.onload = function(){
  module.filterData();
}
