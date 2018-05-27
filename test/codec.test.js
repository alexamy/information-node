import 'chai/register-should';
import { Codec, EqualBinaryCodes } from '../src/codec.js';

describe('Codec', () => {
  it('should throw error if there are duplicates in array', () => {
    (() => new Codec(['f', 'f', 'g'])).should.throw();
  });
  it('should throw error if array is empty', () => {
    (() => new Codec([])).should.throw();
  });
});
describe('EqualBinaryCodes', () => {
  it('should count right length of max binary word length', () => {
    new EqualBinaryCodes(['f', 'g', 'e', 'm', 's']).wordLength.should.equal(3);
  });
  it('should give right codes', () => {
    new EqualBinaryCodes(['f', 'g', 'e', 'm', 's']).codes.should.deep.equal({
      f: '000',
      g: '001',
      e: '010',
      m: '011',
      s: '100'
    });
  });
});
