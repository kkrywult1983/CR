import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class AppRegisterComponent extends Component {
  @storageFor('logged-as') loggedAs;
  @service store;
  @service router;

  @action
  onLoginChange(event) {
    this.args.modifyUser.username = event.target.value;
  }

  @action
  onEmailChange(event) {
    this.args.modifyUser.email = event.target.value;
  }

  @action
  onPhotoURLChange(event) {
    this.args.modifyUser.photoURL = event.target.value;
  }

  @action
  onPasswordChange(event) {
    this.args.modifyUser.password = event.target.value;
  }

  @action
  async onSubmit(event) {
    console.log(event);
    event.preventDefault();
    await this.args.modifyUser.save();
    this.router.transitionTo('login');
  }
}
