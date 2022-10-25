import { generateLottoNumbers, randomNumberGeneration } from '../utils';

describe('Lotto Number Generation', () => {
	it('return the correct lotto numbers for selection. Must be length of 80 ', () => {
		expect(generateLottoNumbers(80).length).toBe(80);
	});

	it('should have the correct object structure at the first element', () => {
		expect(generateLottoNumbers(80)[0]).toEqual({ number: 1, isSelected: false });
	});

	it('should have the correct object structure at the last element', () => {
		expect(generateLottoNumbers(80)[79]).toEqual({ number: 80, isSelected: false });
	});
});

describe('Random Number', () => {
	it('should generate a number that is less than 80', () => {
		expect(randomNumberGeneration()).toBeLessThanOrEqual(80);
	});

	it('should generate a number that is greater than 1', () => {
		expect(randomNumberGeneration()).toBeGreaterThanOrEqual(1);
	});
});

