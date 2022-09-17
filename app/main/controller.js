import Controller from '@ember/controller';
// import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
// import { action } from '@ember/object';
// import moment from 'moment';

export default class MainController extends Controller {
  @tracked dateFrom = null;
  @tracked dateTo = null;

  queryParams = ['dateFrom', 'dateTo'];
}
