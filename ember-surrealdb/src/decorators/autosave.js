import Model from 'src/model';
import { RECORD } from 'src/model';
import { LOADED } from 'src/model';
import { assert } from '@ember/debug';

export default function (target) {
  assert(
    'The @autosave decorator can only be applied to a Model',
    !target || (target && target.prototype instanceof Model),
  );
  return target
    ? func(target)
    : (target) => {
        assert(
          'The @autosave decorator can only be applied to a Model',
          target && target.prototype instanceof Model,
        );
        return func(target);
      };
}

function func(target) {
  target.prototype.autosave = function () {
    if (this[RECORD].state === LOADED) {
      return this.save();
    }
  };
}
