import { THEME_URI } from '..';

export default function Puzzle() {
	const puzzleElements = document.querySelectorAll(
		'[data-element="puzzle-section"]'
	);

	const puzzleBackgrounds = [
		`${THEME_URI}assets/image/puzzle-1.png`,
		`${THEME_URI}assets/image/puzzle-2.png`,
		`${THEME_URI}assets/image/puzzle-3.png`,
		`${THEME_URI}assets/image/puzzle-4.png`,
	];

	if (puzzleElements.length === 0) {
		// console.warn('puzzle section is not found');
		return;
	}

	puzzleElements.forEach((element, index) => {
		element.style.position = 'relative';

		// Create multiple small puzzle pieces
		const numPieces =
			window.innerWidth < 768 ? 3 : window.innerWidth < 1024 ? 8 : 10; // Adjust pieces based on screen size
		const usedPositions = [];

		for (let i = 0; i < numPieces; i++) {
			const puzzleDiv = document.createElement('div');
			puzzleDiv.style.backgroundImage = `url(${
				puzzleBackgrounds[Math.floor(Math.random() * puzzleBackgrounds.length)]
			})`;
			puzzleDiv.style.backgroundSize = 'contain';
			puzzleDiv.style.backgroundRepeat = 'no-repeat';

			puzzleDiv.style.position = 'absolute';
			puzzleDiv.style.width = '80px';
			puzzleDiv.style.height = '80px';
			puzzleDiv.style.zIndex = '-1';

			// Maximum attempts to find non-overlapping position
			let maxAttempts = 100;
			let attempts = 0;
			let position;
			let overlap;

			do {
				position = {
					top: Math.floor(Math.random() * 80 + 10),
					left: Math.floor(Math.random() * 80 + 10),
					scale: Math.random() * 2 + 1,
				};

				overlap = usedPositions.some((pos) => {
					const distance = Math.sqrt(
						Math.pow(pos.top - position.top, 2) +
							Math.pow(pos.left - position.left, 2)
					);
					return distance < (pos.scale + position.scale) * 10;
				});

				attempts++;
				if (attempts >= maxAttempts) {
					console.warn('Could not find non-overlapping position');
					break;
				}
			} while (overlap);

			usedPositions.push(position);

			puzzleDiv.style.top = `${position.top}%`;
			puzzleDiv.style.left = `${position.left}%`;
			puzzleDiv.style.transform = `scale(${position.scale})`;

			// Add floating animation
			puzzleDiv.style.transition = 'transform 0.3s ease-out';
			puzzleDiv.style.animation = `float${i} ${3 + i}s ease-in-out infinite`;

			// Create keyframe animation
			const keyframes = `
				@keyframes float${i} {
					0% {
						transform: translate(0, 0) ;
					}
					50% {
						transform: translate(${Math.random() * 30 - 10}px, ${
				Math.random() * 20 - 10
			}px) ;
					}
					100% {
						transform: translate(0, 0) ;
					}
				}
			`;

			// Add keyframes to document
			const styleSheet = document.createElement('style');
			styleSheet.textContent = keyframes;
			document.head.appendChild(styleSheet);

			element.appendChild(puzzleDiv);
		}
	});
}
