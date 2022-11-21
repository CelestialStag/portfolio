import { uid } from 'uid/secure';
import { v4 } from 'uuid';

export const gen_id = (length = 24) => uid(length);

export const gen_string = (length = 6) =>
  gen_id(length)
    .split('')
    .map((x) => x.charCodeAt(0) % 10)
    .join('');

export const uuid = () => v4();
