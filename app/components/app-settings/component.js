import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AppSettingsComponent extends Component {
  @service store;
  @service router;

  get disableButton() {
    return !this.args.currentUser.hasDirtyAttributes;
  }

  @action
  discardChanges() {
    this.args.currentUser.rollbackAttributes();
  }

  @action
  onLoginChange(event) {
    this.args.currentUser.username = event.target.value;
  }
  @action
  onPasswordChange(event) {
    this.args.currentUser.password = event.target.value;
  }
  @action
  onURLChange(event) {
    this.args.currentUser.photoURL = event.target.value;
  }

  @action
  onEmailChange(event) {
    this.args.currentUser.email = event.target.value;
  }
  @action
  async onSubmit(event) {
    event.preventDefault();
    await this.args.currentUser.save();
  }
}
