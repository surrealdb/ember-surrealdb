import Route from '@ember/routing/route';
import { invalidated } from 'ember-surrealdb';

export default
@invalidated
class extends Route {
  redirectIfAuthenticated = 'surreal';
}
