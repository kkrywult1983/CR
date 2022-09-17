import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MainRoute extends Route {
  @service store;

  queryParams = {
    dateFrom: { refreshModel: true },
    dateTo: { refreshModel: true },
  };

  async model(params) {
    console.log(params);
    const cars = await this.store.findAll('car');
    console.log(cars.toArray());
    return cars
      .toArray()
      .filter((car) =>
        car.isAvailableRentRange(params.dateFrom, params.dateTo)
      );
  }
}
