export function circle() {
	const circleElements = document.querySelectorAll(
		'[data-element="circle-section"]'
	);

	if (circleElements.length === 0) {
		// console.warn('circle section is not found');
		return;
	}

	circleElements.forEach((element) => {
		element.style.position = 'relative';

		const div = document.createElement('div');
		div.classList = 'aspect-square w-10 h-10 rounded-full absolute';
		div.style.zIndex = '-1';

		const gradients = [
			'linear-gradient(45deg, #C97C93, #741E42)',
			'linear-gradient(45deg, #D7F0FF, #493563)',
			'linear-gradient(45deg, #FEAC76, #872D08)',
			'linear-gradient(45deg, #6AD5EE, #033A46)',
			'linear-gradient(45deg, #2B93D1, #0B1964)',
		];

		const usedPositions = [];
		const usedGradients = [...gradients];

		for (let index = 0; index < 5; index++) {
			const innerDiv = div.cloneNode(true);

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

			innerDiv.style.top = `${position.top}%`;
			innerDiv.style.left = `${position.left}%`;
			innerDiv.style.transform = `scale(${position.scale})`;

			const gradientIndex = Math.floor(Math.random() * usedGradients.length);
			innerDiv.style.background = usedGradients[gradientIndex];
			usedGradients.splice(gradientIndex, 1);

			if (usedGradients.length === 0) {
				usedGradients.push(...gradients);
			}

			// Add floating animation
			innerDiv.style.animation = `float${index + 1} ${
				3 + index
			}s ease-in-out infinite`;

			// Create keyframe animation
			const keyframes = `
				@keyframes float${index + 1} {
					0% {
						transform: translate(0, 0) scale(${position.scale});
					}
					50% {
						transform: translate(${Math.random() * 20 - 10}px, ${
				Math.random() * 20 - 10
			}px) scale(${position.scale});
					}
					100% {
						transform: translate(0, 0) scale(${position.scale});
					}
				}
			`;

			// Add keyframes to document
			const styleSheet = document.createElement('style');
			styleSheet.textContent = keyframes;
			document.head.appendChild(styleSheet);

			// Add mouse interaction
			innerDiv.style.transition = 'transform 0.3s ease-out';

			element.appendChild(innerDiv);
		}
	});
}
