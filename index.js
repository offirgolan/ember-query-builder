/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-query-builder',

  included: function(app) {
    this._super.included(app);

    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {

      // Fix for loading it in addons/engines
      if (typeof app.import !== 'function' && app.app) {
        app = app.app;
      }

      var pathToDist = app.bowerDirectory + '/jQuery-QueryBuilder/dist';
      var options = app.options['ember-query-builder'] || {};

      var includeCss = options.includeCss !== false;
      var darkTheme = options.darkTheme === true;

      app.import(pathToDist + '/js/query-builder.standalone.js');

      if (includeCss) {
        if(darkTheme) {
          app.import(pathToDist + '/css/query-builder.dark.css');
        } else {
          app.import(pathToDist + '/css/query-builder.default.css');
        }
      }
    }
  }
};
