import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fleet', function (hooks) {
  setupTest(hooks);

  test.skip('it exists', function (assert) {
    let route = this.owner.lookup('route:fleet');
    assert.ok(route);
  });
});
