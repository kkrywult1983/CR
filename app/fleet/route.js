import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FleetRoute extends Route {
  @service store;

  async model() {
    // const { car_id } = params;
    const data = await this.store.findAll('car');
    // const carId = data.find(({ id }) => id === car_id);
    return data;
  }
}
