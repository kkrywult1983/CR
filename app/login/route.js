import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default class LoginRoute extends Route {
  @storageFor('logged-as') loggedAs;
  @service router;

  beforeModel() {
    const userId = this.loggedAs.get('id');
    if (userId) {
      this.router.transitionTo('login');
      return;
    }
  }
}
