import Ember from 'ember';

export default Ember.Controller.extend({
  queryBuilder: null,

  jsonString: null,

  foo: 'foo',

  plugins: {
    'filter-description': { mode: 'inline' }
  },

  filters: [{
    id: 'foo',
    label: 'Foo',
    description: 'Foo filter'
  }, {
    id: 'bar',
    label: 'Bar'
  }],

  actions: {
    reset() {
      this.get('queryBuilder').reset();
    },

    showRules() {
      const queryBuilder = this.get('queryBuilder');
      if(queryBuilder.validate()) {
        this.set('jsonString', JSON.stringify(queryBuilder.getRules(), null, 2));
      }
    }
  }
});
