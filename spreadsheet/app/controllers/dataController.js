var mongoose = require('mongoose');
var DataModel = mongoose.model('Data');

module.exports.fetchAll = fetchAllData;
module.exports.deleteData = deleteData;
module.exports.addData = addData;
module.exports.fetchData = fetchData;

function fetchAllData(req,res,next){
    DataModel.find(function(err,data){
      if (err){
        res.sendStatus(500);
      }
      res.json(data);
    });
}

function fetchData(req,res,next){
  DataModel.findById(req.params.id, function(err,data){
    if (err){
      res.sendStatus(500);
    }
    if (!data){
      return res.sendStatus(404);
    }
    res.json(data);
  });
}

function deleteData(req,res,next){
  DataModel.findByIdAndRemove(req.params.id, function(err,data){
    if (err){
      res.sendStatus(500);
    }
    if(!data){
      res.sendStatus(404);
    }
    res.sendStatus(200);
  });
}

function addData(req,res,next){
  var data = new DataModel({ text: req.body.text });
  data.save(function(err, data){
    if (err) {
      res.sendStatus(500);
    }
    res.sendStatus(201);
  });
}
