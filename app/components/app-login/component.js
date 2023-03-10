import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Auth0Lock from 'auth0-lock';

const clientId = 'YapXMxmrj8nm2tpRvDPUpgQW0bONYsk5';
const domain = 'dev-se3-qr-3.eu.auth0.com';

export default class AppLoginComponent extends Component {
  @service session;
  @service store;
  @tracked loginValue;
  @tracked passwordValue;
  @tracked userExist;
  @tracked emptyLoginOrPasswordInput = false;

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
    const { loginValue, passwordValue } = this;
    await this.session.loginUser(loginValue, passwordValue);
    const users = await this.store.query('user', {
      filter: { username: this.loginValue, password: this.passwordValue },
    });

    this.userExist = Boolean(!users.length);
    return this.userExist;
  }

  @action
  async loginWithGoogle() {
    const option = { auth: { redirect: false } };
    const lock = new Auth0Lock(clientId, domain, option);
    lock.show({ allowedConnections: ['google-oauth2'] });
    lock.on('authenticated', (authResult) => {
      lock.getUserInfo(authResult.accessToken, async (error, profileResult) => {
        if (error) {
          return;
        }
        // const accessToken = authResult.accessToken;
        const profile = profileResult;
        await this.session.loginOrRegisterBy0auth(profile);
      });
    });
  }
}
