(() => {
  // assets/js/modules/search-category.js
  function searchCategory() {
    var _a;
    const searchCategorySelected = document.getElementById(
      "searchCategorySelected"
    );
    const searchCategorySelectedInput = document.getElementById(
      "searchCategorySelectedInput"
    );
    const searchCategory2 = document.getElementById("searchCategory");
    if (!searchCategory2 || !searchCategorySelected || !searchCategorySelectedInput)
      return;
    (_a = searchCategory2.querySelectorAll("span")) == null ? void 0 : _a.forEach((span) => {
      span.addEventListener("click", () => {
        searchCategorySelected.innerText = span.innerText;
        searchCategorySelectedInput.value = span.innerText;
      });
    });
  }
  searchCategory();
})();
