import Model, { attr } from '@ember-data/model';

export default class userModel extends Model {
  @attr('string') username;
  @attr('string') password;
  @attr('string') email;
  @attr('string') photoURL;
  @attr('date') birthday;
  @attr('boolean', { defaultValue: false }) isAdmin;
}
