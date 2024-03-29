function insertDashes(arr) {
	return arr
		.split(' ')
		.map((el) => [...el].join('-'))
		.join(' ');
}
insertDashes('aba caba');

/**
 * Test Suite
 */
describe('insertDashes()', () => {
	it('insert dashes in between chars', () => {
		// arrange
		const value = 'aba caba';

		// act
		const result = insertDashes(value);

		// log
		console.log('result: ', result);

		// assert
		expect(result).toBe('a-b-a c-a-b-a');
	});
});
