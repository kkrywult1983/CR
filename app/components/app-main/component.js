import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import moment from 'moment';

export default class MainComponent extends Component {
  @service router;

  @action
  onChangeDate(queryParamKey, date) {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    this.router.transitionTo({
      queryParams: { [queryParamKey]: formattedDate },
    });
  }

  @action
  clearForm() {
    this.router.transitionTo({
      queryParams: {
        dateFrom: null,
        dateTo: null,
      },
    });
  }
}
