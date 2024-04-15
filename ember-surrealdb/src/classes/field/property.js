import { set as MetaSet } from '../../classes/meta/index';
import { RECORD } from '../../model';

const json = (v) => JSON.stringify(v);

export default function (obj) {
  return function (target, key, desc) {
    MetaSet(target, key);

    return {
      configurable: false,
      enumerable: true,
      writeable: false,
      get() {
        return obj.get.apply(this, [key]);
      },
      set(value) {
        let old = json(this[RECORD].data[key]);
        let val = obj.set.apply(this, [key, value]);
        let now = json(val);

        if (old !== now) {
          this[RECORD].data = this[RECORD].data;
          this.autosave();
        }

        return val;
      },
    };
  };
}
