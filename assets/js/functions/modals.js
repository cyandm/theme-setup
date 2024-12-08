import { devLog } from './common';
/**
 * Initializes modal functionality for opening, closing, and toggling modals.
 * It uses specific HTML attributes to identify modal-related elements and manage their state.
 * Debugging information is logged to the console using the `devLog` function.
 *
 * @function
 * @name Modals
 * @example
 * // Example HTML:
 * <div modal data-modal-name="example-modal" data-active="false">
 *   <p>Modal Content</p>
 * </div>
 * <button modal-opener data-modal-name="example-modal">Open Modal</button>
 * <button modal-closer data-modal-name="example-modal">Close Modal</button>
 * <button modal-toggler data-modal-name="example-modal">Toggle Modal</button>
 *
 * @description
 * The function listens for `click` events on elements with the following attributes:
 * - `modal-opener`: Opens the corresponding modal.
 * - `modal-closer`: Closes the corresponding modal.
 * - `modal-toggler`: Toggles the visibility of the corresponding modal.
 *
 * When an opener or closer is clicked, the `data-active` attribute of the corresponding modal is set to either `true` (open) or `false` (closed).
 * When a toggler is clicked, the `data-active` attribute is toggled between `true` and `false`.
 *
 * The function logs the following to the console for debugging:
 * - The state changes of modals (opened or closed).
 * - The triggers (open, close, toggle) for each modal.
 *
 * @returns {void}
 */
export function Modals() {
	devLog('Modal function is running');

	/**
	 * Utility function to handle the state of a modal.
	 *
	 * @private
	 * @param {string} modalName - The name of the modal to modify.
	 * @param {string} state - The state to set (`'true'` or `'false'`).
	 */
	const handleModalState = (modalName, state) => {
		const modals = document.querySelectorAll(
			`[modal][data-modal-name="${modalName}"]`
		);
		if (!modals) {
			devLog(`Modal "${modalName}" not found.`);
			return;
		}

		modals.forEach((modal) => {
			modal.dataset.active = state;
		});

		devLog(`Modal "${modalName}" state set to "${state}".`);
	};

	/**
	 * Adds click event listeners to elements matching the provided selector and performs the specified action.
	 *
	 * @private
	 * @param {string} selector - The selector for modal-related elements (e.g., `[modal-opener]`).
	 * @param {function} action - The action to perform when the element is clicked (e.g., opening, closing, toggling).
	 * @param {string} actionName - A human-readable name for the action (e.g., "Open", "Close", "Toggle").
	 */
	const addEventListeners = (selector, action, actionName) => {
		const elements = document.querySelectorAll(selector);
		elements.forEach((element) => {
			const modalName = element.dataset.modalName;

			element.addEventListener('click', () => {
				action(modalName);
			});

			devLog(`"${actionName}" triggered for modal "${modalName}".`);
		});
	};

	//************************************************************************Code Logic

	// Open modals
	addEventListeners(
		'[modal-opener]',
		(modalName) => handleModalState(modalName, 'true'),
		'Open'
	);

	// Close modals
	addEventListeners(
		'[modal-closer]',
		(modalName) => handleModalState(modalName, 'false'),
		'Close'
	);

	// Toggle modals
	addEventListeners(
		'[modal-toggler]',
		(modalName) => {
			const modal = document.querySelector(
				`[modal][data-modal-name="${modalName}"]`
			);

			if (!modal) {
				devLog(`Toggle failed: Modal "${modalName}" not found.`);
				return;
			}

			const newState = modal.dataset.active === 'true' ? 'false' : 'true';
			devLog(`Toggling modal "${modalName}" to "${newState}".`);
			handleModalState(modalName, newState);
		},
		'Toggle'
	);
}
