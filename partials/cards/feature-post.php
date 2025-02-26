<swiper-slide>
    <div class="rounded-2xl bg-gradient-to-b from-[rgba(255,255,255,0.0616)] to-[rgba(255,255,255,0.07)] backdrop-blur-xl p-5">
        <h2 class="">
            <?php echo get_the_title(); ?> </h2>
        <p class="">
            <?php echo get_the_excerpt(); ?></p>
        <div class="flex justify-start items-center gap-x-1 mt-5">
            <a href="<?php the_permalink(); ?>" class="text-cyan-400 ">ادامه </a>
            <div class="text-cyan-400 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </div>
        </div>

        <div class="block md:flex justify-between items-center mt-5">
            <div class="flex items-center">
                <!--avatar-->
                <?php
                $user_email = 'user@example.com';
                echo get_avatar($user_email, 50, '', '', [
                    'class' => 'rounded-full ml-5'
                ]);
                echo get_the_date('j F Y');
                the_author(); ?>
            </div>
            <!--Icons-->
            <div class="flex justify-end items-center gap-x-2">
                <div class="flex bg-[#3F3CC30F] border border-zinc-700 p-3 rounded-md gap-x-1 " data-post-id=" <?php echo get_the_ID(); ?>">
                    <span> <?php echo get_comments_number(get_the_ID()); ?></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </div>
                <div class="flex bg-[#3F3CC30F] border border-zinc-700  p-3 rounded-md gap-x-1 " data-post-id="<?php echo get_the_ID(); ?>">
                    <span><?php echo get_post_meta(get_the_ID(), '_like_count', true) ?: 0; ?></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
            </div>

        </div>

    </div>
</swiper-slide>