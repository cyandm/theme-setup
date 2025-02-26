<?php

use Cyan\Theme\Helpers\Templates;

$feature_posts_Q = new WP_Query([
    'post_type'      => 'post',
    'posts_per_page' => 3,
    'orderby'        => 'date',
    'order'          => 'DESC',
]);


?>
<section>
    <div class="container mx-auto">
        <div class="flex flex-col md:flex-row-reverse justify-between items-center">
            <!--custom_picture-->
            <div class="">
                <?php
                $custom_image = get_theme_mod('custom_featured_image', '');
                if ($custom_image) {
                    echo '<img src="' . esc_url($custom_image) . '" alt="Custom Featured Image">';
                }
                ?>
            </div>

            <swiper-container slides-per-view="1" space-between="5" loop="true" autoplay="true" pagination="false"
                navigation="false" scrollbar-hide="true" class="max-w-[335px] sm:max-w-[592px]">
                <?php
                if ($feature_posts_Q->have_posts()) {
                    while ($feature_posts_Q->have_posts()) {
                        $feature_posts_Q->the_post();
                        Templates::getCard('feature-post');
                    }

                    wp_reset_postdata();
                } else {
                    echo 'پستی پیدا نشد!';
                }
                ?>
            </swiper-container>

        </div>
    </div>
</section>