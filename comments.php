<!-- Comment Form -->
<a href="#comment-reply"></a>
<div class="contact-container">
    <div class="py-4">
        <?php comment_form([
            'fields' => [
                'author' => '<label class="form-group relative order-1">
                                        <svg class="icon text-primary-50 w-6 h-6 mx-3 absolute top-1/2 transform -translate-y-1/2"><use href="#icon-User,-Profile"/></svg> 
                 <input placeholder="نام شما" type="text" 
                   class="focus:outline-none focus:ring-0 form-control w-full rounded-3xl border-none py-3 px-10"
                   style="background: linear-gradient(to bottom, rgba(255,255,255,0.0616), rgba(255,255,255,0.07));" 
                   name="author">
                                    </label>',

                'cookies' => '',
            ],

            'comment_field' => '<div class="relative order-3 ">
                                    <svg class="icon text-primary-50 w-6 h-6 mx-3 absolute top-1/3 transform -translate-y-6"><use href="#icon-Chat,-Messages-1"/></svg>
<textarea placeholder="دیدگاه شما"
    class="focus:outline-none focus:ring-0 border-none form-control resize-none w-full h-17 rounded-3xl py-4 px-10 text-white placeholder:text-gray-400"
    style="background: linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.07));">
</textarea>
                                </div>',
            'id_form' => 'commentform',
            'comment_notes_before' => '',
            'class_form' => 'flex flex-col gap-4',
            'class_container' => '',
            'title_reply_before' => '<h3 id="reply-title" class="comment-reply-title py-2 hidden">',
            'title_reply_after' => '</h3>',
            'submit_field' => '<div class="mx-auto md:mx-0 grid justify-start order-3">
            <div class="form-submit flex flex-row-reverse flex-end max-lg:justify-center gap-1 relative rounded-full transition-all duration-300 cursor-pointer  text-white border border-cyan-400 py-3 px-8">%1$s %2$s
                        <svg class="icon text-white w-6 h-6"><use href="#icon-Send"/></svg>
                    </div>
                     </div>',
            //'class_submit' => 'comment-submit-btn'
        ]); ?>
    </div>
</div>

<?php if (have_comments()) :


?>

    <div class="comment-list gap-20" id="comment-list">

        <?php
        $comments = get_comments(array(
            'post_id' => get_the_ID(),
            'status' => 'approve',
            'orderby' => 'comment_date',
            'order' => 'ASC'
        ));
        ?>

        <?php foreach ($comments as $comment) :

            if ($comment->comment_parent != 0) {
                continue;
            }

        ?>

            <div class="flex flex-col gap-3 bg-primary-100 rounded-3xl p-6 my-4">

                <div class="flex items-center gap-3">

                    <!-- Avatar -->
                    <div>
                        <?php echo get_avatar($comment, 50, '', 'avatar', ['class' => 'rounded-full']); ?>
                    </div>

                    <div class="flex flex-col gap-3">

                        <!-- Name & Reply -->
                        <div class="flex flex-row gap-2">
                            <?php echo get_comment_author_link($comment); ?>

                            <a class="reply-comment cursor-pointer" id="comment-reply"
                                comment-id='<?php echo $comment->comment_ID ?>'>
                                <svg class="icon w-6 h-6">
                                    <use href="#icon-Reply,-Emails,-Letter,-Mail-1" />
                                </svg>
                            </a>
                        </div>

                        <!-- Date & Time-->
                        <div class="flex flex-row gap-1">
                            <!-- Date -->
                            <div>
                                <time
                                    datetime="<?php echo get_comment_date('c', $comment); ?>"><?php echo get_comment_date('', $comment); ?></time>
                            </div>
                            ،
                            <!-- Time -->
                            <div>
                                <?php comment_time('H:i:s'); ?>
                            </div>

                        </div>
                    </div>

                </div>

                <!-- comment text -->
                <div>
                    <?php echo $comment->comment_content; ?>
                </div>

                <?php
                $children = get_comments([
                    'post_id' => get_the_ID(),
                    'status' => 'approve',
                    'orderby' => 'comment_date',
                    'order' => 'ASC',
                    'parent' => $comment->comment_ID,
                ]); ?>

                <?php if ($children) : ?>
                    <!-- comment children -->
                    <div class="bg-primary-90 p-4 rounded-3xl">

                        <?php foreach ($children as $child_comment) : ?>

                            <div>
                                <div class="flex items-center gap-3">

                                    <!-- Avatar -->
                                    <div>
                                        <?php echo get_avatar($child_comment, 50, '', 'avatar', ['class' => 'rounded-full']); ?>
                                    </div>

                                    <div class="flex flex-col gap-3">

                                        <!-- Name & Reply -->
                                        <div class="flex flex-row gap-2">
                                            <?php echo get_comment_author_link($child_comment); ?>
                                            <a href="<?php echo esc_url(get_comment_link($child_comment)); ?>">
                                                <svg class="icon w-6 h-6">
                                                    <use href="#icon-Reply,-Emails,-Letter,-Mail-1" />
                                                </svg>
                                            </a>
                                        </div>

                                        <!-- Date & Time-->
                                        <div class="flex flex-row gap-1">
                                            <!-- Date -->
                                            <div>
                                                <time
                                                    datetime="<?php echo get_comment_date('c', $child_comment); ?>"><?php echo get_comment_date('', $child_comment); ?></time>
                                            </div>
                                            ،
                                            <!-- Time -->
                                            <div>
                                                <?php comment_time('H:i:s'); ?>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <!-- comment text -->
                                <div>
                                    <?php echo $child_comment->comment_content; ?>
                                </div>
                            </div>

                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>

            </div>

        <?php endforeach; ?>
    </div>

<?php else : ?>

    <div class="comment-list">
        <p class="fs-h2 text-secondary-400">کامنتی ثبت نشده است</p>
    </div>

<?php endif; ?>