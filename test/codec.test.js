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
  describe('probabilities', () => {
    const probabilities = [
      {
        probs: { a: 0.2, b: 0.1, c: 0.05 },
        expected: new Map([['a', 0.2], ['b', 0.1], ['c', 0.05]])
      },
      {
        probs: { b: 0.1, a: 0.1, c: 0.1, d: 0.1 },
        expected: new Map([['b', 0.1], ['a', 0.1], ['c', 0.1], ['d', 0.1]])
      },
      {
        probs: { b: 0.1, a: 0.1, c: 0.1, d: 0.5 },
        expected: new Map([['d', 0.5], ['b', 0.1], ['a', 0.1], ['c', 0.1]])
      }
    ];
    for (let test of probabilities) {
      it('should converts to Map correctly', () => {
        new ShannonCodes(test.probs).probabilities.should.deep.equal(
          test.expected
        );
      });
    }
  });
  describe('#getBestSliceIndex', () => {
    const slices = [
      { probs: { a: 0.2, b: 0.1, c: 0.05 }, expected: 0 },
      { probs: { a: 0.1, b: 0.1, c: 0.1, d: 0.1 }, expected: 1 },
      { probs: { a: 0.1, b: 0.1, c: 0.1, d: 0.1, e: 0.5 }, expected: 0 }
    ];
    for (let test of slices) {
      it('should give best slice', () => {
        let codes = new ShannonCodes(test.probs);
        codes
          .getBestSliceIndex(codes.probabilities)
          .should.equal(test.expected);
      });
    }
  });
  describe('#sliceProbsNice', () => {
    const slices = [
      {
        probs: { a: 0.2, b: 0.1, c: 0.05 },
        expected: { a: '0', b: '1', c: '1' }
      },
      {
        probs: { a: 0.1, b: 0.1, c: 0.1, d: 0.1 },
        expected: { a: '0', b: '0', c: '1', d: '1' }
      },
      {
        probs: { a: 0.1, b: 0.1, c: 0.1, d: 0.1, e: 0.5 },
        expected: { e: '0', a: '1', b: '1', c: '1', d: '1' }
      }
    ];
    for (let test of slices) {
      it('should give correct zeroes and ones', () => {
        let codes = new ShannonCodes(test.probs);
        codes
          .sliceProbsNice(codes.probabilities)
          .should.deep.equal(test.expected);
      });
    }
  });

  describe('codes', () => {
    const codes = [
      {
        probs: { a: 0.1, b: 0.1 },
        expected: { a: '0', b: '1' }
      },
      {
        probs: { a: 0.4, b: 0.25, c: 0.2, d: 0.1, e: 0.05 },
        expected: { a: '0', b: '10', c: '110', d: '1110', e: '1111' }
      }
    ];
    for (let test of codes) {
      it('should give correct codes', () => {
        new ShannonCodes(test.probs).codes.should.deep.equal(test.expected);
      });
    }
  });
});
