<?php
$article_title = " جدیدترین مقالات";
$view_all_button_text = "مشاهده همه";

use Cyan\Theme\Helpers\Templates;

$articles_Q = new WP_Query([
    'post_type'      => 'post',
    'posts_per_page' => 5,
    'orderby'        => 'date',
    'order'          => 'DESC',
]);

?>

<section class="container mx-auto">
    <div class="flex flex-col justify-between">

        <div class="flex justify-between mt-5">
            <div class="md:text-4xl text-xl font-bold"> <?php echo ($article_title); ?></div>
            <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))) ?>"
                class="hidden md:flex border border-cyan-400 rounded-full p-3 px-7"><?php echo ($view_all_button_text); ?></a>
        </div>

        <swiper-container slides-per-view="4" space-between="16" loop="true" autoplay="true" pagination="false"
            navigation="false" class="hidden md:block mt-5 w-full">
            <?php if ($articles_Q->have_posts()) {
                while ($articles_Q->have_posts()) {
                    $articles_Q->the_post();
                    //echo '<swiper-slide>';
                    Templates::getCard('swiper_post');
                    //echo '</swiper-slide>';
                }

                wp_reset_postdata();
            } else {
                echo 'هیچ مقاله ای پیدا نشد!!';
            }
            ?>
        </swiper-container>

        <div class="md:hidden">
            <?php if ($articles_Q->have_posts()) {
                while ($articles_Q->have_posts()) {
                    $articles_Q->the_post();
                    Templates::getCard('mobile_posts');
                }

                wp_reset_postdata();
            } else {
                echo 'هیچ مقاله ای پیدا نشد!!';
            }
            ?>
        </div>

        <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))) ?>"
            class="md:hidden flex border border-cyan-400 px-8 py-2 rounded-full justify-center mt-5"><?php echo $view_all_button_text; ?></a>
    </div>
</section>