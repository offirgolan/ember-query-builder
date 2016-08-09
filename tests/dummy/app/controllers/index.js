import Ember from 'ember';

export default Ember.Controller.extend({
  filters: [{
    id: 'foo',
    label: 'Foo'
  }, {
    id: 'bar',
    label: 'Bar'
  }]
});
