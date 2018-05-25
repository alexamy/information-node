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

describe('Information#symbols', () => {
  const tests = [
    [
      'should have unique symbols 1',
      'Поле, полное полыни, выпало полоть Полине.',
      new Set('поле полное полыни выпало полоть полине')
    ],
    [
      'should have unique symbols 2',
      'фыафпфыфыВПУЫПМФыв1214',
      new Set('фыафпфыфывпуыпмфыв')
    ]
  ];
  tests.forEach(([shouldWhat, message, expected]) => {
    it(shouldWhat, () =>
      assert.deepEqual(new Information(message).symbols, expected)
    );
  });
});
