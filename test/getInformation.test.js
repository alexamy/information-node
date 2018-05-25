import assert from 'assert';
import Information from '../src/getInformation.js';
describe('Information#process(message)', () => {
  const tests = [
    ['should trim', '   привет      ', 'привет'],
    ['should lowercase', 'прИВет', 'привет'],
    ['should replace non-russian symbols', 'AFASsgdCCCприв###ет124', 'привет']
  ];
  tests.forEach(([shouldWhat, message, expected]) => {
    it(shouldWhat, () => assert.equal(Information.process(message), expected));
  });
});
