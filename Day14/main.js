function countVowelConsonant(str) {
	let score = 0;
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	str.split('').forEach((letter) => {
		return vowels.includes(letter) ? (score += 1) : (score += 2);
	});
	return score;
}

/**
 * Test Suite
 */
describe('countVowelConsonant()', () => {
	it('returns total of vowels(1) and consonants(2) to be added', () => {
		// arrange
		const value = 'abcde';

		// act
		const result = countVowelConsonant(value);

		// log
		console.log('result: ', result);

		// assert
		expect(result).toBe(8);
	});
});
