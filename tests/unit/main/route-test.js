import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main', function (hooks) {
  setupTest(hooks);

  test.skip('it exists', function (assert) {
    let route = this.owner.lookup('route:main');
    assert.ok(route);
  });
});
