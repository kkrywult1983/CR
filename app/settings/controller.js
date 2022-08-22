import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class SettingsController extends Controller {
  @service store;
  @service router;

  get disableButton() {
    return !this.model.hasDirtyAttributes;
  }

  @action
  discardChanges() {
    this.model.rollbackAttributes();
  }
}
