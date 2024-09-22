import { rootEl } from './elements';

export const makeKebab = (str) => {
	return str.replace(
		/[A-Z]+(?![a-z])|[A-Z]/g,
		($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
	);
};

export const setCssVariable = (value, name, parent = rootEl, prefix = 'px') => {
	const kebabName = makeKebab(name);
	parent.style.setProperty(`--${kebabName}`, value + prefix);
};
