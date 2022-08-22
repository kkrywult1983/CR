import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsRoute extends Route {
  @service router;
  @service store;
  @service session;

  beforeModel() {
    const { isUserLoggedIn } = this.session;

    if (!isUserLoggedIn) {
      this.router.transitionTo('/');
      return;
    }
  }

  model() {
    return this.session.currentUser;
  }
}
