import 'chai/register-should';
import Information from '../src/getInformation.js';

describe('');

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
  tests.forEach(([shouldWhat, message, symToCount, expected]) => {
    it(shouldWhat, () =>
      new Information(message)
        .countsInMessage(symToCount)
        .should.equal(expected)
    );
  });
});

describe('Information#probabilities', () => {
  const tests = [
    ['лапалуза', { л: 2 / 8, а: 3 / 8, п: 1 / 8, у: 1 / 8, з: 1 / 8 }],
    ['фак', { ф: 1 / 3, а: 1 / 3, к: 1 / 3 }]
  ];
  tests.forEach(([message, expected]) => {
    it('test', () =>
      new Information(message).probabilities.should.deep.equal(expected));
  });
});

describe('Information#entropy', () => {
  const tests = [['лапалуза', 2.15563906], ['фак', 1.5849625]];
  tests.forEach(([message, expected]) => {
    it('test', () =>
      new Information(message).entropy.should.be.closeTo(expected, 0.001));
  });
});

describe('Information#redundancy', () => {
  const tests = [['лапалуза', 0.0716167], ['фак', 4.5e-10]];
  tests.forEach(([message, expected]) => {
    it('test', () =>
      new Information(message).redundancy.should.be.closeTo(expected, 0.001));
  });
});
