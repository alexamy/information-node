import 'chai/register-should';
import EqualBinaryCoder from '../src/equalBinaryCodes.js';

describe('EqualBinaryCoder', () => {
  it('should throw error if there are duplicates in array', () => {
    (() => new EqualBinaryCoder(['f', 'f', 'g'])).should.throw();
  });
  it('should throw error if array is empty', () => {
    (() => new EqualBinaryCoder([])).should.throw();
  });
  it('should count right length of max binary word length', () => {
    new EqualBinaryCoder(['f', 'g', 'e', 'm', 's']).wordLength.should.equal(3);
  });
});
