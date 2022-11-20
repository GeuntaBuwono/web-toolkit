import getInitialName from '@utils/getInitialName';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg';

export type AvatarProps = {
	name: string;
	src?: string;
	size?: AvatarSize;
	alt?: string;
};

const avatarSizeMapper = ({size}: {size: AvatarSize}) => {
	switch (size) {
		case 'xs':
			return 'h-6 w-6';
		case 'sm':
			return 'h-8 w-8';
		case 'md':
			return 'h-10 w-10';
		case 'lg':
			return 'h-12 w-12';
	}
};

const avatarTextSizeMapper = ({size}: {size: AvatarSize}) => {
	switch (size) {
		case 'xs':
			return 'text-[0.5rem] p-1';
		case 'sm':
			return 'text-sm p-1.5';
		case 'md':
			return 'text-base p-2';
		case 'lg':
			return 'text-lg p-3';
	}
};

const Avatar = ({size = 'md', alt = '', src = '', name}: AvatarProps) => {
	if (src) {
		return (
			<img
				className={`inline-block rounded-full ring-2 ring-white ${avatarSizeMapper(
					{
						size,
					},
				)}`}
				src={src}
				alt={alt}
			/>
		);
	}
	return (
		<p
			className={`
			${avatarTextSizeMapper({size})}
			${avatarSizeMapper({size})}
			rounded-full border-2 flex relative bg-gray-300 text-gray-500 items-center`}
		>
			{getInitialName({name})}
		</p>
	);
};

export default Avatar;
