import Ember from 'ember';

const {
  run,
  isNone
} = Ember;

export default Ember.Component.extend({
  classNames: ['query-builder'],

  queryBuilder: null,

  didReceiveAttrs() {
    this._super(...arguments);
    this.scheduleSetupQueryBuilder();
  },

  willDestroyElement() {
    this._super(...arguments);

    run.cancel(this._setupTimer);
    this._destroyQueryBuilder();
  },

  scheduleSetupQueryBuilder() {
    run.cancel(this._setupTimer);
    this._setupTimer = run.scheduleOnce('afterRender', this, this.setupQueryBuilder);
  },

  setupQueryBuilder() {
    this._destroyQueryBuilder();

    this.$().queryBuilder(this._buildOptions());
    this.set('queryBuilder', this.$().queryBuilder);
  },

  _buildOptions() {
    return Object.keys(this.attrs).reduce((obj, key) => {
      if(key !== 'queryBuilder') {
        obj[key] = this.get(key);
      }
      return obj;
    }, {});
  },

  _destroyQueryBuilder() {
    const queryBuilder = this.get('queryBuilder');
    if(!isNone(queryBuilder)) {
      queryBuilder.destroy();
    }
  }
});
