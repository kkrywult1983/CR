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
}
