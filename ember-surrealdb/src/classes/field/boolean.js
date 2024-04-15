import Property from './property';
import Boolean from '../types/boolean';
import { RECORD } from 'src/model';

export default Property({
  get(key) {
    return Boolean(this[RECORD].data[key]);
  },
  set(key, value) {
    return (this[RECORD].data[key] = Boolean(value));
  },
});
