import AvatarGroup, {AvatarItem} from '@components/AvatarGroup/AvatarGroup';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {faker} from '@faker-js/faker';

const avatarsGroupArrBuilder = () => {
	const avatars: Array<AvatarItem> = [];
	for (let index = 0; index < 7; index++) {
		avatars.push({
			name: faker.name.fullName(),
			src: faker.image.avatar(),
			alt: '',
		});
	}
	return avatars;
};

export default {
	title: 'Components/AvatarGroup',
	component: AvatarGroup,
	args: {
		maxLength: 3,
		avatars: avatarsGroupArrBuilder(),
	},
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg'],
			control: {type: 'select'},
		},
	},
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = args => (
	<AvatarGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
	size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
	size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'md',
};

export const Large = Template.bind({});
Large.args = {
	size: 'lg',
};
