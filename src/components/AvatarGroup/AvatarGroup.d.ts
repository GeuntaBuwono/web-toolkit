type AvatarItem = Required<Omit<AvatarType, 'size'>>;

type AvatarGroup = {
	maxLength: number;
	avatars: Array<AvatarItem>;
	size?: AvatarSize;
};
