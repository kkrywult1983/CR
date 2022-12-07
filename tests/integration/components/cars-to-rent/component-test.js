import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cars-to-rent', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CarsToRent />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <CarsToRent>
        template block text
      </CarsToRent>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
