var app = require('../app');
var mongoose = require('mongoose');
var DataModel = mongoose.model('Data');
var fs = require('fs');
var dataArray = fs.readFileSync('data.txt').toString().split("\n");
var i;
var len = dataArray.length;
for (i=0;i<len;i++){
  var data = new DataModel({'text': dataArray[i]});
  data.save(function(err, update) {
      if (err) return console.error(err);
    console.log(update);
  });
}
