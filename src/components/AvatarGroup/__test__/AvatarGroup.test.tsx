import {render} from '@testing-library/react';
import AvatarGroup from '@components/AvatarGroup';

const testAvatarGroupProps: AvatarGroup = {
	maxLength: 3,
	avatars: [
		{
			name: 'budi',
			src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/160.jpg',
			alt: 'expectedAvatarAlt',
		},
		{
			name: 'budi tomi',
			src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/161.jpg',
			alt: 'expectedAvatarAlt',
		},
		{
			name: 'budi abi',
			src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/162.jpg',
			alt: 'expectedAvatarAlt',
		},
		{
			name: 'budi herman',
			src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/164.jpg',
			alt: 'expectedAvatarAlt',
		},
		{
			name: 'budi budi',
			src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/165.jpg',
			alt: 'expectedAvatarAlt',
		},
		{
			name: 'budi imron',
			src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/166.jpg',
			alt: 'expectedAvatarAlt',
		},
		{
			name: 'budi jaya',
			src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/167.jpg',
			alt: 'expectedAvatarAlt',
		},
	],
};

describe('AvatarGroup', () => {
	test('renders default', () => {
		const {getByText} = render(<AvatarGroup {...testAvatarGroupProps} />);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(getByText('+4')).toBeTruthy();
		expect(testAvatarElement.className).toContain('h-10 w-10');
	});

	test('renders with size', () => {
		const {getByText} = render(
			<AvatarGroup size="sm" {...testAvatarGroupProps} />,
		);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(getByText('+4')).toBeTruthy();
		expect(testAvatarElement.className).toContain('h-8 w-8');
	});

	test('renders with maxLength 4', () => {
		const {getByText} = render(
			<AvatarGroup {...testAvatarGroupProps} size="sm" maxLength={4} />,
		);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(getByText('+3')).toBeTruthy();
		expect(testAvatarElement.className).toContain('h-8 w-8');
	});

	test('renders with maxLength MORE or EQUAL with avatars length', () => {
		render(<AvatarGroup {...testAvatarGroupProps} size="sm" maxLength={10} />);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;
		const textAvatarGroupMoreElement = document.querySelector(
			'p',
		) as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(textAvatarGroupMoreElement).toBeNull();
		expect(testAvatarElement.className).toContain('h-8 w-8');
	});

	test('renders with maxLength 0', () => {
		render(<AvatarGroup {...testAvatarGroupProps} size="sm" maxLength={0} />);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;
		const textAvatarGroupMoreElement = document.querySelector(
			'p',
		) as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement).toBeNull();
		expect(textAvatarGroupMoreElement).toBeNull();
	});
});
