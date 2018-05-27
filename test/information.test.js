import 'chai/register-should';
import Information from '../src/information.js';

const tests = [
  {
    input: '  пРиве11Тик ',
    message: 'приветик',
    symbols: ['п', 'р', 'и', 'в', 'е', 'т', 'к'],
    probabilities: {
      п: 1 / 8,
      р: 1 / 8,
      и: 2 / 8,
      в: 1 / 8,
      е: 1 / 8,
      т: 1 / 8,
      к: 1 / 8
    },
    entropy: 2.75,
    redundancy: 0.02
  },
  {
    input: 'лапаЛУзаHEYHO ',
    message: 'лапалуза',
    symbols: ['л', 'а', 'п', 'у', 'з'],
    probabilities: { л: 2 / 8, а: 3 / 8, п: 1 / 8, у: 1 / 8, з: 1 / 8 },
    entropy: 2.155,
    redundancy: 0.071
  }
];

const infos = tests.map(t => new Information(t.input));
describe('Information', () => {
  describe('message', () => {
    for (let i = 0; i < infos.length; i++) {
      it('should be trimmed, lowercase and contain only russian symbols', () => {
        infos[i].message.should.equal(tests[i].message);
      });
    }
  });
  describe('symbols', () => {
    for (let i = 0; i < infos.length; i++) {
      it('should constists only of distinct symbols', () => {
        infos[i].symbols.should.deep.equal(tests[i].symbols);
      });
    }
  });
  describe('probabilities', () => {
    for (let i = 0; i < infos.length; i++) {
      it('should contain right probabilities', () => {
        infos[i].probabilities.should.deep.equal(tests[i].probabilities);
      });
    }
  });
  describe('entropy', () => {
    for (let i = 0; i < infos.length; i++) {
      it('should be counted right', () => {
        infos[i].entropy.should.be.closeTo(tests[i].entropy, 0.01);
      });
    }
  });
  describe('redundacy', () => {
    for (let i = 0; i < infos.length; i++) {
      it('should be counted right', () => {
        infos[i].redundancy.should.be.closeTo(tests[i].redundancy, 0.01);
      });
    }
  });
});
