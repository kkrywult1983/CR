import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navigationbar', function (hooks) {
  setupRenderingTest(hooks);

  test.skip('it renders', async function (assert) {
    await render(hbs`<Navigationbar />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Navbar>
        template block text
      </Navbar>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
