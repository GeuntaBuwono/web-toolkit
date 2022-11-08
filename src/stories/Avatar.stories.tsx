import Avatar from '@components/Avatar';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const avatarWithImageArgs = {
	src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg',
};

export default {
	title: 'Components/Avatar',
	component: Avatar,
	args: {name: 'Tomi Budi'},
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg'],
			control: {type: 'select'},
		},
	},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
	...avatarWithImageArgs,
	size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
	...avatarWithImageArgs,
	size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
	...avatarWithImageArgs,
	size: 'md',
};

export const Large = Template.bind({});
Large.args = {
	...avatarWithImageArgs,
	size: 'lg',
};
