import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CarsDetailsRoute extends Route {
  @service store;

  async model(params) {
    console.log(params);
    const { car_id } = params;
    return await this.store.findRecord('car', car_id);
  }
}
