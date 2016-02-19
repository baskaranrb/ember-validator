var RSVP = require('rsvp');

/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function() {
    return RSVP.all([
      this.addBowerPackageToProject('moment', '~2.10.6'),
      this.addBowerPackageToProject('lodash', '3.10.1')
    ]);
  }
};
