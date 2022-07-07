import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') username;
  @attr('string') password;
  @attr('string') email;
  @attr('string') photoURL;
  @attr('string') birthday;
  @attr('boolean', { defaultValue: false }) isAdmin;
}
