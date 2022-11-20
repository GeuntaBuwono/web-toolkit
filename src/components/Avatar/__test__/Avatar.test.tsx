/**
 * @jest-environment jsdom
 */

import Avatar from '@components/Avatar/Avatar';
import {render} from '@testing-library/react';

const expectedTestValue = {
	src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg',
	alt: 'The image alt tag for the default Avatar Component',
	name: 'Tomi Budi LastName',
};

describe('Avatar', () => {
	test('renders default', () => {
		const {getByText} = render(<Avatar name={expectedTestValue.name} />);
		const testAvatarElement = document.querySelector('p') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement?.src).toBeUndefined();
		expect(testAvatarElement?.alt).toBeUndefined();

		expect(getByText('TL')).toBeTruthy();
		expect(testAvatarElement.className).toContain('h-10 w-10');
	});

	test('renders with size xs', () => {
		const {getByText} = render(
			<Avatar name={expectedTestValue.name} size="xs" />,
		);
		const testAvatarElement = document.querySelector('p') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement?.src).toBeUndefined();
		expect(testAvatarElement?.alt).toBeUndefined();

		expect(getByText('TL')).toBeTruthy();
		expect(testAvatarElement.className).toContain('h-6 w-6');
	});

	test('renders with size sm', () => {
		const {getByText} = render(
			<Avatar name={expectedTestValue.name} size="sm" />,
		);
		const testAvatarElement = document.querySelector('p') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement?.src).toBeUndefined();
		expect(testAvatarElement?.alt).toBeUndefined();

		expect(getByText('TL')).toBeTruthy();
		expect(testAvatarElement.className).toContain('h-8 w-8');
	});

	test('renders with size md', () => {
		const {getByText} = render(
			<Avatar name={expectedTestValue.name} size="md" />,
		);
		const testAvatarElement = document.querySelector('p') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement?.src).toBeUndefined();
		expect(testAvatarElement?.alt).toBeUndefined();

		expect(getByText('TL')).toBeTruthy();
		expect(testAvatarElement.className).toContain('h-10 w-10');
	});

	test('renders with size lg', () => {
		const {getByText} = render(
			<Avatar name={expectedTestValue.name} size="lg" />,
		);
		const testAvatarElement = document.querySelector('p') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement?.src).toBeUndefined();
		expect(testAvatarElement?.alt).toBeUndefined();

		expect(getByText('TL')).toBeTruthy();
		expect(testAvatarElement.className).toContain('h-12 w-12');
	});

	test('renders with src size default', () => {
		render(<Avatar {...expectedTestValue} />);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement.src).toContain(expectedTestValue.src);
		expect(testAvatarElement.alt).toContain(expectedTestValue.alt);
		expect(testAvatarElement.className).toContain('h-10 w-10');
	});

	test('renders with xs size', () => {
		render(<Avatar {...expectedTestValue} size="xs" />);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement.src).toContain(expectedTestValue.src);
		expect(testAvatarElement.alt).toContain(expectedTestValue.alt);
		expect(testAvatarElement.className).toContain('h-6 w-6');
	});

	test('renders with sm size', () => {
		render(<Avatar {...expectedTestValue} size="sm" />);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement.src).toContain(expectedTestValue.src);
		expect(testAvatarElement.alt).toContain(expectedTestValue.alt);
		expect(testAvatarElement.className).toContain('h-8 w-8');
	});

	test('renders with md size', () => {
		render(<Avatar {...expectedTestValue} size="md" />);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement.src).toContain(expectedTestValue.src);
		expect(testAvatarElement.alt).toContain(expectedTestValue.alt);
		expect(testAvatarElement.className).toContain('h-10 w-10');
	});

	test('renders with lg size', () => {
		render(<Avatar {...expectedTestValue} size="lg" />);
		const testAvatarElement = document.querySelector('img') as HTMLImageElement;

		expect(testAvatarElement).toMatchSnapshot();
		expect(testAvatarElement.src).toContain(expectedTestValue.src);
		expect(testAvatarElement.alt).toContain(expectedTestValue.alt);
		expect(testAvatarElement.className).toContain('h-12 w-12');
	});
});
