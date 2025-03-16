export function SinglePortfolio() {
	const mainBtn = document.querySelector('.main-btn');
	const slideUpBtns = document.querySelectorAll('.slide-up-btn');

	if (!mainBtn || !slideUpBtns) return;

	mainBtn.addEventListener('click', function () {
		slideUpBtns.forEach((btn) => {
			btn.classList.toggle('opacity-0');
			btn.classList.toggle('pointer-events-none');
			btn.style.transform = btn.classList.contains('opacity-0')
				? 'translateY(0)'
				: 'translateY(-20px)';
			btn.style.transition =
				'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
		});
	});
}
