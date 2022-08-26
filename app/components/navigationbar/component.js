import Component from '@glimmer/component';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';

export default class NavigationbarComponent extends Component {
  @storageFor('logged-as') loggedAs;
  @service session;
  @service router;

  get isUserLoggedIn() {
    return this.loggedAs.get('id');
  }

  get userLoggedInName() {
    return this.loggedAs.get('username');
  }
  @action onLogout() {
    this.session.logoutUser();
    window.location.href = 'login';
  }
}
