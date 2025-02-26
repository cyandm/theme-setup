<div class="single-blog-post">
    <?php if (has_post_thumbnail()) : ?>
        <div class="post-thumbnail mt-5">
            <?php the_post_thumbnail('large', ['class' => 'rounded-3xl mx-auto px-3',]); ?>
        </div>
    <?php endif; ?>
    <div class="block md:flex justify-between items-center">
        <div class="flex justify-start items-center mt-3">
            <!--avatar-->
            <?php
            $user_email = 'user@example.com';
            echo get_avatar($user_email, 50, '', '', [
                'class' => 'rounded-full ml-5'
            ]);
            ?>
            <!--author-->
            <div class="flex gap-x-2">
                <?php the_author(); ?>
                <p class="text-sm text-gray-300">
                    <?php echo get_the_date(); ?>
                </p>
            </div>
        </div>
        <!--Icons-->
        <!--Share-->
        <div class="flex flex-row justify-center items-end p-3 gap-x-3 mt-3">
            <div class="w-24 md:w-12 h-16 flex flex-col justify-center items-center bg-[#3F3CC30F] rounded-xl border border-zinc-700 gap-y-2 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>
                <span class="text-sm">23</span>

            </div>
            <!--Comment-->
            <div class="comment-container w-24 md:w-12 h-16 flex flex-col justify-center items-center bg-[#3F3CC30F] rounded-xl border border-zinc-700 gap-y-2 py-2"
                data-post-id="<?php echo get_the_ID(); ?>">

                <!-- آیکن کامنت -->
                <a href="#comments-section" class="comment-icon cursor-pointer flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    <!-- تعداد کامنت‌ها -->
                    <span class="comment-count text-sm">
                        <?php echo get_comments_number(get_the_ID()); ?>
                    </span>
                </a>
            </div>
            <!--Like-->
            <div class="like-container w-24 md:w-12 h-16 flex flex-col justify-center items-center bg-[#3F3CC30F] rounded-xl border border-zinc-700 gap-y-2 py-2"
                data-post-id="<?php echo get_the_ID(); ?>">

                <!-- gray-icon-->
                <span class="like-icon like-icon-empty cursor-pointer <?php echo in_array(['guest_user_id'] ?? '', get_post_meta(get_the_ID(), 'liked_users', true) ?: []) ? 'hidden' : ''; ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </span>

                <!--red-icon-->
                <span class="like-icon like-icon-red cursor-pointer hidden <?php echo in_array(['guest_user_id'] ?? '', get_post_meta(get_the_ID(), 'liked_users', true) ?: []) ? '' : 'hidden'; ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-red-800">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </span>

                <span class="like-count text-sm"><?php echo get_post_meta(get_the_ID(), 'like_count', true) ?: 0; ?></span>
            </div>
        </div>


    </div>

    <!-- Title -->
    <h3 class="md:text-4xl text-xl font-bold mt-5"><?php the_title(); ?></h3>

    <!-- Content -->
    <div class="prose">
        <?php the_content(); ?>
    </div>
</div>