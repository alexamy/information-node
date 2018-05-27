import 'chai/register-should';
import { Codec, EqualBinaryCodes, ShannonCodes } from '../src/codec.js';

describe('Codec', () => {
  it('should code message right by EqualBinaryCodes', () => {
    const codec = new Codec('прив', EqualBinaryCodes);
    codec.messageCoded.should.equal('00011011');
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

describe('ShannonCodes', () => {
  describe('#getBestSliceIndex', () => {
    const slices = [
      { probs: { a: 0.2, b: 0.1, c: 0.05 }, expected: 0 },
      { probs: { a: 0.1, b: 0.1, c: 0.1, d: 0.1 }, expected: 1 }
    ];
    for (let test of slices) {
      it('should give best slice', () => {
        ShannonCodes.getBestSliceIndex(test.probs).should.equal(test.expected);
      });
    }
  });
});
