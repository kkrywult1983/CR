import EmberRouter from '@ember/routing/router';
import config from 'my-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('main', { path: '/' });

  this.route('login');
  this.route('register');
});
