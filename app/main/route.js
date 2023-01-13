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
    if (params.dateFrom === null || params.dateTo === null) {
      return 0;
    } else if (params.dateFrom > params.dateTo) {
      console.log('Podałes zła datę');
    } else {
      const cars = await this.store.findAll('car');
      return cars
        .toArray()
        .filter((car) =>
          car.isAvailableRentRange(params.dateFrom, params.dateTo)
        );
    }
  }
}
