/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
// import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';

export default class FleetListComponent extends Component {
    @storageFor('logged-as') loggedAs;
    @service session;


    get isUserLoggedIn() {
        return this.loggedAs.get('id');
    }
}
