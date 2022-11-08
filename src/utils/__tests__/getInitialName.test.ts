import getInitialName from '@utils/getInitialName';

describe('getInitialName', () => {
	test('should be running correctly with 1 word', () => {
		const testName = 'Tomi';
		const testInitalName = getInitialName({
			name: testName,
		});

		expect(testInitalName).toBe('TO');
	});

	test('should be running correctly with 2 word', () => {
		const testName = 'Tomi Budi';
		const testInitalName = getInitialName({
			name: testName,
		});

		expect(testInitalName).toBe('TB');
	});

	test('should be running correctly with 3 word', () => {
		const testName = 'Tomi Budi Sejahtera';
		const testInitalName = getInitialName({
			name: testName,
		});

		expect(testInitalName).toBe('TS');
	});
});
