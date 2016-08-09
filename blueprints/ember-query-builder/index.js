/*jshint node:true*/

module.exports = {
  description: 'Import jQuery QueryBuilder dependency from bower',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('jQuery-QueryBuilder');
  }
};
