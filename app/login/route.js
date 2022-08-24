import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default class LoginRoute extends Route {
  @storageFor('logged-as') loggedAs;
  @service router;
  @service session;

  beforeModel() {
    const { isUserLoggedIn } = this.session;

    if (!isUserLoggedIn) {
      this.router.transitionTo('login');
      return;
    }
  }
}
