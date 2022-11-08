type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

type AvatarType = {
	name: string;
	src?: string;
	size?: AvatarSize;
	alt?: string;
};
