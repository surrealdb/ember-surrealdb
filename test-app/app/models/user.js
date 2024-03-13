import Model from 'ember-surrealdb/model';
import { string } from 'ember-surrealdb/field';

export default class User extends Model {
  @string email;
}
