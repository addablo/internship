'use strict';

module.exports.init = function(app) {
  var modelsPath = app.get('root') + '/app/models/';

  ['Data'].forEach(function(model) {
    require(modelsPath + model);
  });
};
