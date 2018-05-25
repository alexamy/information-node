import assert from 'assert';
import Information from '../src/getInformation.js';
describe('Information', () => {
  describe('#process(message)', () => {
    it('should trim', () => {
      const message = '   привет      ';
      const result = Information.process(message);
      assert.equal(result, 'привет');
    });
    it('should lowercase', () => {
      const message = 'прИВет';
      const result = Information.process(message);
      assert.equal(result, 'привет');
    });
    it('should replace non-russian symbols', () => {
      const message = 'AFASsgdCCCприв###ет124';
      const result = Information.process(message);
      assert.equal(result, 'привет');
    });
  });
});
