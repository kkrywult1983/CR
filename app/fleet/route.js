import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FleetRoute extends Route {
  @service store;

  model() {
    const cars = this.store.findAll('car');

    return cars;
  }
}
