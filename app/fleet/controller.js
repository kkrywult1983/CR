import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
// import { action } from '@ember/object';
// import moment from 'moment';

export default class FleetController extends Controller {
  @service store;
  @tracked firstDate;
  @tracked secondDate;
  @tracked sortParam;

  queryParams = ['firstDate', 'secondDate', 'sortParam'];

  get checkFilterBetweenDates() {
    console.log(Boolean(this.firstDate && this.secondDate));
    return Boolean(this.firstDate && this.secondDate);
  }

  get checkFilterFromDate() {
    return !this.checkFilterBetweenDates && Boolean(this.firstDate);
  }

  get checkFilterToDate() {
    return !this.checkFilterBetweenDates && Boolean(this.secondDate);
  }
}
