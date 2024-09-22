function searchCategory() {
	const searchCategorySelected = document.getElementById(
		'searchCategorySelected'
	);
	const searchCategorySelectedInput = document.getElementById(
		'searchCategorySelectedInput'
	);
	const searchCategory = document.getElementById('searchCategory');

	if (
		!searchCategory ||
		!searchCategorySelected ||
		!searchCategorySelectedInput
	)
		return;

	searchCategory.querySelectorAll('span')?.forEach((span) => {
		span.addEventListener('click', () => {
			searchCategorySelected.innerText = span.innerText;
			searchCategorySelectedInput.value = span.innerText;
		});
	});
}

searchCategory();
