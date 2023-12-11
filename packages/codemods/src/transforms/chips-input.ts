import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameProp } from '../codemod-helpers';
import { JSCodeShiftOptions } from '../types';

export const parser = 'tsx';

const RENAME_MAP = {
  inputAriaLabel: 'inputLabel',
};

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'ChipsInput', alias);

  renameProp(j, source, localName, RENAME_MAP);

  return source.toSource();
}