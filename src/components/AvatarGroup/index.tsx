import Avatar from '@components/Avatar';

const AVATAR_GARP_STACK_SIZE = 'ml-[-0.75rem]';

const AvatarGroup = ({size = 'md', maxLength, avatars}: AvatarGroup) => {
	if (maxLength > 0) {
		return (
			<div className="flex flex-row">
				{avatars.map((avatar, index) => {
					if (index < maxLength) {
						return (
							<div className={`${AVATAR_GARP_STACK_SIZE}`} key={index}>
								<Avatar {...avatar} size={size} />
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
