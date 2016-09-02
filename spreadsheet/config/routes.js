'use strict';

module.exports.init = function(app) {
  var routesPath = app.get('root') + '/routes';

  app.use('/', require(routesPath + '/index'));
  app.use('/data', require(routesPath + '/dataStream'));
};
