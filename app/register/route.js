/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';
export default class RegisterRoute extends Route {
  @storageFor('logged-as') loggedAs;
  @service router;
  @service store;

  beforeModel() {
    const userId = this.loggedAs.get('id');
    if (userId) {
      this.router.transitionTo('main');
      return;
    }
  }

  model() {
    return this.store.createRecord('user');
  }
}
