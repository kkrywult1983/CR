import Component from '@glimmer/component';
// import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import moment from 'moment';

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class MainComponent extends Component {
  @service router;

  @action
  onChangeDate(queryParamKey, date) {
    const formattedDate = moment(date).format('DD-MM-YYYY');
    this.router.transitionTo({
      queryParams: { [queryParamKey]: formattedDate },
    });
  }

  @action
  onShowAvailableFleet() {
    console.log('List');
  }
}
