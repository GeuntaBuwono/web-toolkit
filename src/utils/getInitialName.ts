const regexFirstName = /(^\S\S?|\b\S)?/g;
const regexLastName = /(^\S|\S$)?/g;

const getInitialName = ({name}: {name: string}) =>
	name
		.match(regexFirstName)!
		.join('')!
		.match(regexLastName)!
		.join('')
		.toUpperCase();

export default getInitialName;
