export function postLike() {
    if (!localStorage.getItem('guest_user_id')) {
        const guestUserId = Math.floor(100000 + Math.random() * 900000).toString();
        localStorage.setItem('guest_user_id', guestUserId);
    }

    const guestUserId = localStorage.getItem('guest_user_id');
    const postId = jQuery('.like-container').data('post-id');
    const likeCount = jQuery('.like-count');
    const iconEmpty = jQuery('.like-icon-empty');
    const iconRed = jQuery('.like-icon-red');

    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
    if (likedPosts[postId] === true) {
        iconEmpty.addClass('hidden');
        iconRed.removeClass('hidden');
    } else {
        iconRed.addClass('hidden');
        iconEmpty.removeClass('hidden');
    }

    jQuery('.like-container .like-icon').on('click', function () {
        jQuery.ajax({
            url: themeData.restUrl + 'cyn/v1/postLike',
            type: 'POST',
            data: {
                post_id: postId,
                guest_user_id: guestUserId
            },
            success: function (response) {
                if (response.success) {
                    if (response.data.liked) {
                        iconEmpty.addClass('hidden');
                        iconRed.removeClass('hidden');
                        likedPosts[postId] = true;
                    } else {
                        iconRed.addClass('hidden');
                        iconEmpty.removeClass('hidden');
                        likedPosts[postId] = false;
                    }
                    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
                    likeCount.text(response.data.like_count);
                }
            }
        });
    });
}