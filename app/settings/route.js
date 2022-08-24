import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsRoute extends Route {
  @service router;
  @service store;
  @service session;

  async beforeModel() {
    const { isUserLoggedIn } = this.session;

    if (!isUserLoggedIn) {
      this.router.transitionTo('/');
      return;
    }
    await this.session.setCurrentUser();
  }

  model() {
    console.log(this.session.currentUser);
    return this.session.currentUser;
  }
}
