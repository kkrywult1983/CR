import Component from '@glimmer/component';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class NavigationbarComponent extends Component {
  @storageFor('logged-as') loggedAs;
  @action onLogout() {
    this.loggedAs.set('id', null);
    this.loggedAs.set('usermname', null);
    window.location.href = '/';
  }
}
