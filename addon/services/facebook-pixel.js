import Ember from 'ember';
/* global fbq */

const INIT = 'init';

export default Ember.Service.extend({
  id: null,

  isEnabled: Ember.computed.notEmpty('id'),
  
  setup: Ember.on('init', function setup() {
    if (typeof fbq === 'undefined') {
      return null;
    }
    else {
      if (this.get('isEnabled')) {
        fbq(INIT, this.id);
      }
    }
  }),

  track: function(event, params) {
    if (typeof fbq === 'undefined') {
      return null;
    }
    else {
      if (this.get('isEnabled')) {
        fbq('track', event, params);
      }
    }
  },
});
