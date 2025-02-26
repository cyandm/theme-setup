<?php

use Cyan\Theme\Helpers\Templates;

$view_all_button_text = "مشاهده همه";

$taxonomy = 'category';

$terms = get_terms([
    'taxonomy' => $taxonomy,
    'hide_empty' => true,
    'include' => get_field('user_selected_taxonomies'),
    'orderby' => 'include',
])

?>
<?php
if (!empty($terms) && !is_wp_error($terms)) {
    $first_term_displayed = false;
    foreach ($terms as $term) {

?>

        <section class="container mx-auto">
            <div class="flex flex-col justify-between">
                <?php
                // عنوان ترم (دسته‌بندی یا برچسب)
                echo '<div class="flex justify-between mt-5">';
                echo '<div class="md:text-4xl text-xl font-bold">' . esc_html($term->name) . '</div>'; ?>
                <a href="<?php echo esc_url(get_term_link($term)); ?>" class="hidden md:flex border border-cyan-400 rounded-full p-3 px-7"> <?php echo ($view_all_button_text)  ?> </a>
            </div>


            <swiper-container slides-per-view="4" space-between="16" loop="true" autoplay="true" pagination="false"
                navigation="false" class="hidden md:block gap-x-5 mt-5 w-full">

                <?php
                // دریافت پست‌های مرتبط با ترم
                $args = [
                    'post_type' => 'post',
                    'posts_per_page' => 5,
                    'tax_query' => [
                        [
                            'taxonomy' => $taxonomy,
                            'field' => 'term_id',
                            'terms' => $term->term_id,
                        ],
                    ],
                ];
                $query = new WP_Query($args);

                if ($query->have_posts()) {
                    while ($query->have_posts()) {
                        $query->the_post();
                        Templates::getCard('swiper_post');
                    }
                } else {
                    echo '<p>هیچ پستی در این دسته‌بندی موجود نیست.</p>';
                }
                ?>
            </swiper-container>

            <!--Mobile Version-->
            <div class="md:hidden">
                <?php if ($query->have_posts()) {
                    while ($query->have_posts()) {
                        $query->the_post();
                        Templates::getCard('mobile_posts');
                    }

                    wp_reset_postdata();
                } else {
                    echo 'هیچ مقاله ای پیدا نشد!!';
                }
                ?>
            </div>
            <a href="<?php echo esc_url(get_term_link($term)); ?>" class="md:hidden flex border border-cyan-400  px-8 py-2 rounded-full justify-center mt-5 mb-2"> <?php echo ($view_all_button_text)  ?> </a>


        </section>
        <?php
        if (!$first_term_displayed) {
            Templates::getArchive('posts/instagram_posts');
            $first_term_displayed = true;
        }
        ?>

<?php
        wp_reset_postdata();
    }
} else {
    echo '<p>هیچ ترمی برای این تاکسونومی وجود ندارد.</p>';
}

?>