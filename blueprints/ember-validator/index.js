/* eslint-env node */
var RSVP = require('rsvp');

module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return RSVP.all([
      this.addBowerPackageToProject('moment', '~2.10.6')
    ]);
  }
};
