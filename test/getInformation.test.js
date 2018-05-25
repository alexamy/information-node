import assert from 'assert';
import { should } from 'chai';

import Information from '../src/getInformation.js';

should();

describe('Information#message', () => {
  const tests = [
    ['should trim', '  \tпривет      ', 'привет'],
    ['should lowercase', 'прИВет', 'привет'],
    ['should replace non-russian symbols', 'AFASsgdCCCприв###ет124', 'привет'],
    ['should save original', 'поле полное полыни', 'поле полное полыни'],
    [
      'should pass final check',
      'Поле, полное полыни, выпало полоть Полине.',
      'поле полное полыни выпало полоть полине'
    ]
  ];
  tests.forEach(([shouldWhat, message, expected]) => {
    it(shouldWhat, () =>
      new Information(message).message.should.equal(expected)
    );
  });
});

describe('Information#countsInMessage', () => {
  const tests = [
    ['Zero symbols', 'лапалуза', 'ф', 0],
    ['One symbol', 'ололок', 'к', 1],
    ['More than one symbol', 'приветики', 'и', 3]
  ];
  tests.forEach(([shouldWhat, message, symToCount, expected], i) => {
    it(shouldWhat, () =>
      new Information(message)
        .countsInMessage(symToCount)
        .should.equal(expected)
    );
  });
});
