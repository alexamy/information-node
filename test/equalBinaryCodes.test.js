import 'chai/register-should';
import { expect } from 'chai';
import EqualBinaryCoder from '../src/equalBinaryCoder.js';

describe('EqualBinaryCoder', () => {
  it('should throw error if there are duplicates in array', () => {
    expect(() => new EqualBinaryCoder(['f', 'f', 'g'])).to.throw();
  });
});
