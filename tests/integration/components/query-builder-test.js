import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('query-builder', 'Integration | Component | query builder', {
  integration: true,

  beforeEach() {
    this.set('filters', [{
      id: 'foo',
      label: 'Foo'
    }, {
      id: 'bar',
      label: 'Bar'
    }]);
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{query-builder filters=filters}}`);
  assert.equal(this.$('.query-builder').length, 1, 'QueryBuilder should render');
});

test('onChange action gets called with queryBuilder instance', function(assert) {
  assert.expect(3);

  this.on('onChange', qb => {
    assert.ok(qb, 'QueryBuilder instance should be passed in to action');
    assert.notOk(qb.validate(), 'QueryBuilder should validate and return false');
  });

  this.render(hbs`{{query-builder filters=filters onChange=(action 'onChange')}}`);
  assert.equal(this.$('.query-builder').length, 1, 'QueryBuilder should render');
});

test('onChange action should be called when an attribute changes', function(assert) {
  assert.expect(6);

  this.set('defaultCondition', 'AND');

  this.on('onChange', qb => {
    assert.ok(qb, 'QueryBuilder instance should be passed in to action');
    assert.notOk(qb.validate(), 'QueryBuilder should validate and return false');
  });

  this.render(hbs`{{query-builder filters=filters default_condition=defaultCondition onChange=(action 'onChange')}}`);
  assert.equal(this.$('.query-builder').length, 1, 'QueryBuilder should render');

  this.set('defaultCondition', 'OR');
  assert.equal(this.$('.query-builder').length, 1, 'QueryBuilder should render');
});

test('Setting default condition should render correctly', function(assert) {
  assert.expect(2);

  this.render(hbs`{{query-builder filters=filters default_condition='OR'}}`);
  assert.equal(this.$('.query-builder').length, 1, 'QueryBuilder should render');
  assert.equal(this.$('.btn-group.group-conditions .active').text().trim(), 'OR', 'QueryBuilder default condition should be OR');
});

test('Validating with default rules', function(assert) {
  assert.expect(3);

  this.set('rules', {
    "condition": "AND",
    "rules": [
      {
        "id": "foo",
        "field": "foo",
        "type": "string",
        "input": "text",
        "operator": "equal",
        "value": "foo"
      }
    ]
  });

  this.render(hbs`{{query-builder filters=filters rules=rules onChange=(action (mut queryBuilder))}}`);
  assert.equal(this.$('.query-builder').length, 1, 'QueryBuilder should render');
  assert.ok(this.get('queryBuilder').validate(), 'Validating current rules should be true');
  assert.deepEqual(this.get('queryBuilder').getRules(), this.get('rules'), 'QueryBuilder rules should match default rules');
});
