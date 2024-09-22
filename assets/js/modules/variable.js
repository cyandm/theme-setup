import { desktopHeaderEl, containerEL, footerEl } from '../utils/elements';
import { setCssVariable } from '../utils/functions';

export const setCssVariableGroup = () => {
	const headerHeight = desktopHeaderEl
		? desktopHeaderEl.getClientRects()[0].height
		: 0;
	const footerHeight = footerEl ? footerEl.getClientRects()[0].height : 0;

	const containerWidth = containerEL.clientWidth;
	const marginFromSide = (window.innerWidth - containerWidth) / 2;

	setCssVariable(headerHeight, 'headerHeight');
	setCssVariable(marginFromSide, 'marginFromSide');
	setCssVariable(footerHeight, 'footerHeight');
};

//Global Vars
window.addEventListener('load', setCssVariableGroup);
window.addEventListener('resize', setCssVariableGroup);
