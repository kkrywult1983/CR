import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CarsDetailsRoute extends Route {
  @service store;

  async model(params) {
    const { car_id } = params;
    const allCars = await this.store.findAll('car');
    const carId = allCars.find(({ id }) => id === car_id);
    return carId;
  }
}
