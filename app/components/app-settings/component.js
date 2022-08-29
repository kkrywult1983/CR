import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AppSettingsComponent extends Component {
  @service store;
  @service router;

  get disableButton() {
    return !this.model.hasDirtyAttributes;
  }

  @action
  discardChanges() {
    this.model.rollbackAttributes();
  }

  @action
  onLoginChange(event) {
    this.model.username = event.target.value;
  }
  @action
  onPasswordChange(event) {
    this.model.password = event.target.value;
  }
  @action
  onURLChange(event) {
    this.model.photoURL = event.target.value;
  }

  @action
  onEmailChange(event) {
    this.model.email = event.target.value;
  }
  @action
  async onSubmit(event) {
    event.preventDefault();
    await this.model.save();
  }
}