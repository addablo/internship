var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    text: {
      type: String,
      required: true,
    }
});

module.exports = mongoose.model('Data', dataSchema);
