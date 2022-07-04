import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RegisterRoute extends Route {
  @service router;
  @service store;
  @service session;

  beforeModel() {
    const isUserLoggedIn = this.session.isUserLoggedIn;

    if (isUserLoggedIn) {
      this.router.transitionTo('main');
      return;
    }
  }

  model() {
    return this.store.createrecord('user');
  }
}
