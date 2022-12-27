function validTime(str) {
	const timeStr = str.split(':');
	return timeStr[0] < 0 || timeStr[0] > 23 || timeStr[1] < 0 || timeStr[1] > 59 ? false : true;
}

/**
 * Test Suite
 */
describe('validTime()', () => {
	it('returns true for valid time', () => {
		// arrange
		const str = '13:58';

		// act
		const result = validTime(str);

		// log
		console.log('result 1: ', result);

		// assert
		expect(result).toBe(true);
	});

	it('returns false when invalid hours', () => {
		// arrange
		const str = '25:51';

		// act
		const result = validTime(str);

		// log
		console.log('result 1: ', result);

		// assert
		expect(result).toBe(false);
	});

	it('returns false when invalid minutes', () => {
		// arrange
		const str = '02:76';

		// act
		const result = validTime(str);

		// log
		console.log('result 1: ', result);

		// assert
		expect(result).toBe(false);
	});
});
