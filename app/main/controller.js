import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import Moment from 'moment';
import MomentRange from 'moment-range';

export default class MainController extends Controller {
  @tracked dateFrom = null;
  @tracked dateTo = null;

  queryParams = ['dateFrom', 'dateTo'];

  get bookedDays() {
    const moment = MomentRange.extendMoment(Moment);
    return moment(this.dateFrom).diff(moment(this.dateTo), 'days') * -1;
  }
}
