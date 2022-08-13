import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { storageFor } from 'ember-local-storage';

export default class LoginController extends Controller {
  @storageFor('logged-as') loggedAs;
  @service store;
  @tracked loginValue;
  @tracked passwordValue;

  @action
  onLoginChange(event) {
    this.loginValue = event.target.value;
  }

  @action
  onPasswordChange(event) {
    this.passwordValue = event.target.value;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();

    const usersExist = this.store.query('users', {
      filter: { username: this.loginValue, password: this.passwordValue },
    });

    console.log(usersExist.length);

    const ifUserExist = Boolean(usersExist.length);
    if (ifUserExist) {
      const user = usersExist.firstObject;
      this.loggedAs.set('id', user.id);
    }
  }
}
