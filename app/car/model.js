/* eslint-disable prettier/prettier */
import Moment from 'moment';
import MomentRange from 'moment-range';
import Model, { attr } from '@ember-data/model';

export default class CarModel extends Model {
  @attr('string') segment;
  @attr('string') brand;
  @attr('string') carModel;
  @attr('number') doors;
  @attr('number') seats;
  @attr('boolean') aircondition;
  @attr('string') transmission;
  @attr('string') fuel;
  @attr('string') img;
  @attr({ defaultValue: () => [] }) rents;

  isAvailableRentRange(dateFrom, dateTo) {
    const moment = MomentRange.extendMoment(Moment);

    const overlapsedDates = this.rents.filter((rent) => {
      const { from, to } = rent;
      // console.log({ from, to });

      // const rangeOfBookedDays = [
      //   moment(dateFrom).diff(moment(dateTo), 'days') * (-1)
      // ]

      const bookedDates = [
        moment(from).startOf('day'),
        moment(to).endOf('day'),
      ];

      const searchDates = [
        moment(dateFrom).startOf('day'),
        moment(dateTo).endOf('day'),
      ];

      const rangeBookedDates = moment.range(bookedDates);
      const rangeSearchDates = moment.range(searchDates);

      // const countDays = moment.range(rangeBookedDates)


      if (rangeBookedDates.overlaps(rangeSearchDates)) {
        return rent;
      }
    });

    //Jesli true to wyświetla jako dostępny
    return !overlapsedDates.length;
  }

  // const result = isAvailableRentRange('2022-09-01', '2022-09-30');
  // console.log('isAvailable: ', result);
}

