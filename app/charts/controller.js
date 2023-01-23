import Controller from '@ember/controller';
import { service } from '@ember/service';
import { format } from 'date-fns';
import Moment from 'moment';
import MomentRange from 'moment-range';

export default class ChartsController extends Controller {
  @service store;
  @service session;

  // -----------------------------------------------------------------
  get tableOfMonths() {
    return Array.from({ length: 12 }, (_, index) =>
      format(new Date(2023, index), 'MMM')
    );
  }
  // -----------------------------------------------------------------
  get rentsDates() {
    const moment = MomentRange.extendMoment(Moment);
    const rentsDays = this.model.map((car) => {
      return car.rents.map((date) => {
        const { from, to } = date;
        return moment(to).diff(moment(from), 'days');
      });
    });
    const summary = rentsDays.map((el) =>
      el.reduce((acc, x) => {
        return acc + x;
      })
    );
    return summary;
  }

  // --------------------------------------------------------

  get kindsOfCars() {
    const chartDataCarsNames = this.model.map((car) => {
      return car.carModel;
    });
    return chartDataCarsNames;
  }

  get randomColor() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return 'rgba(' + r + ', ' + g + ', ' + b + ', 0.5' + ')';
  }

  // -------------------------------------------------
  get chartData() {
    return {
      // opis osi x
      labels: this.kindsOfCars,
      datasets: [
        {
          label: `Cars Rents Sensitivity [days]: Current Year:${2013}`,
          backgroundColor: [
            `${this.randomColor}`,
            `${this.randomColor}`,
            `${this.randomColor}`,
            `${this.randomColor}`,
            `${this.randomColor}`,
            `${this.randomColor}`,
            `${this.randomColor}`,
          ],
          borderWidth: 1.5,
          data: this.rentsDates,
        },
      ],
    };
  }

  get chartOptions() {
    return {};
  }
}
