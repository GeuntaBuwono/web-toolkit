import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import {withTests} from '@storybook/addon-jest';
import 'tailwindcss/tailwind.css';
import results from '../.jest-test-results.json';

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	withTests({
		results,
	}),
];
