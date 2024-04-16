import { set } from '../../classes/meta/index';

export default function (target, key, desc) {
  set(target, key, {
    readonly: true,
  });

  return desc;
}
