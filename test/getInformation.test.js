import assert from 'assert';
import Information from '../src/getInformation.js';
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
      assert.strictEqual(new Information(message).message, expected)
    );
  });
});

describe('Information#countCountsInMessage', () => {
  const tests = [
    ['One symbol', 'ололок', 'к', 1],
    ['More than one symbol', 'приветики', 'и', 3],
    ['Zero symbols', 'лапалуза', 'ф', 0]
  ];
  tests.forEach(([shouldWhat, message, symToCount, expected], i) => {
    it(shouldWhat, () =>
      assert.equal(
        new Information(message).countCountsInMessage(symToCount),
        expected
      )
    );
  });
});
