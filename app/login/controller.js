import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
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
    console.log('On SUBMIT was Triggered');

    const usersExist = this.store.query('user', {
      filter: { username: this.loginValue, password: this.passwordValue },
    });

    console.log(this.loginValue);
    console.log(this.passwordValue);
    console.log(usersExist.length);
  }
}
