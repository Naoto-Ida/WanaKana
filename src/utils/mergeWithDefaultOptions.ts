import { DEFAULT_OPTIONS } from '../constants';

export interface Options {
  useObsoleteKana: boolean,
  passRomaji: boolean,
  upcaseKatakana: boolean,
  IMEMode: boolean,
  convertLongVowelMark: boolean,
  romanization: string,
}

/**
 * Easy re-use of merging with default options
 * @param {Object} opts user options
 * @returns user options merged over default options
 */
const mergeWithDefaultOptions = (opts: Partial<Options> = {}): Options => Object.assign({}, DEFAULT_OPTIONS, opts);

export default mergeWithDefaultOptions;
