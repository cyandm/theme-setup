import gsap from 'gsap';
import { backDropEl } from '../utils/elements';
import { cynActivate, cynDeactivate } from '../utils/custom-event';

function definePopUp(elem) {
	if (!elem) return;

	elem.addEventListener('cynActivate', () => {
		gsap.to(backDropEl, { opacity: 1, pointerEvents: 'all' });
	});

	elem.addEventListener('cynDeactivate', () => {
		gsap.to(backDropEl, { opacity: 0, pointerEvents: 'none' });
	});

	backDropEl.addEventListener('click', () => {
		elem.dispatchEvent(cynDeactivate);
	});
}

function megaMenu() {
	const megaMenuItems = document.querySelectorAll('.mega-menu');
	const megaMenuHandlers = document.querySelectorAll('.is-mega-menu');

	megaMenuItems.forEach((item) => {
		definePopUp(item);

		item.addEventListener('cynActivate', () => {
			gsap.to(item, { opacity: 1, pointerEvents: 'all' });
		});

		item.addEventListener('cynDeactivate', () => {
			gsap.to(item, { opacity: 0, pointerEvents: 'none' });
		});
	});

	megaMenuHandlers.forEach((handler) => {
		const item = handler.querySelector('.mega-menu');

		handler.addEventListener('mouseenter', () => {
			//Deactivate other mega menus
			megaMenuItems.forEach((menuItem) => {
				menuItem !== item && menuItem.dispatchEvent(cynDeactivate);
			});

			item.dispatchEvent(cynActivate);
		});
	});
}

megaMenu();
