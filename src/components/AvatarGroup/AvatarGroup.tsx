import Avatar, {AvatarProps, AvatarSize} from '@components/Avatar/Avatar';

export type AvatarItem = Required<Omit<AvatarProps, 'size'>>;

export type AvatarGroupProps = {
	maxLength: number;
	avatars: Array<AvatarItem>;
	size?: AvatarSize;
};

const AVATAR_GARP_STACK_SIZE = 'ml-[-0.75rem]';

const AvatarGroup = ({size = 'md', maxLength, avatars}: AvatarGroupProps) => {
	if (maxLength > 0) {
		return (
			<div className="flex flex-row">
				{avatars.map((avatar, index) => {
					if (index < maxLength) {
						return (
							<div className={`${AVATAR_GARP_STACK_SIZE}`} key={index}>
								<Avatar {...avatar} size={size} name="asd" />
							</div>
						);
					}
					return null;
				})}
				{avatars.length > maxLength && (
					<div className={`${AVATAR_GARP_STACK_SIZE}`}>
						<Avatar name={`+${avatars.length - maxLength}`} size={size} />
					</div>
				)}
			</div>
		);
	}
	return null;
};

export default AvatarGroup;
