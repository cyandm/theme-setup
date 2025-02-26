export function comment() {
    const commentForm = document.querySelector('#commentform'); // فرم کامنت وردپرس
    const commentCountElement = document.querySelector('.comment-count');

    if (commentForm) {
        commentForm.addEventListener('submit', function (e) {
            e.preventDefault(); // جلوگیری از ارسال فرم برای انجام AJAX

            const formData = new FormData(commentForm);
            fetch(commentForm.action, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(() => {
                    location.reload(); // رفرش صفحه برای آپدیت تعداد کامنت‌ها
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }
}