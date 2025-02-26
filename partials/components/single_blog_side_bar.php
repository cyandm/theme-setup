<!--Category-->
<?php

$post_categories = get_terms([
    'taxonomy' => 'category',
    'hide_empty' => true,
]);

?>

<h3 class="text-3xl font-bold"> دسته بندی ها</h3>


<div class="md:w-[380px] bg-gradient-to-b from-[rgba(255,255,255,0.0616)] to-[rgba(255,255,255,0.07)] px-4 py-2 rounded-xl mb-10 mt-2">

    <div class="font-bold mt-3">
        <?php _e('دسته بندی ها', 'cyn-dm') ?>
    </div>

    <div>
        <div>
            <ul>
                <?php foreach ($post_categories as $term): ?>
                    <a href="<?php echo get_term_link($term) ?>" class="text-white hover:text-cyan-400">

                        <li class="py-4 ">
                            <?php echo $term->name ?>
                        </li>
                    </a>

                <?php endforeach; ?>
            </ul>
        </div>

    </div>

</div>
<!--Suggestion Posts-->
<?php

use Cyan\Theme\Helpers\Templates;

$articles_Q = new WP_Query([
    'post_type'      => 'post',
    'posts_per_page' => 3,
    'orderby'        => 'date',
    'order'          => 'DESC',
]);

?>

<div>
    <h3 class="text-3xl font-bold"> شاید بپسندید</h3>

    <div class="grid grid-rows-3 gap-y-2">
        <?php if ($articles_Q->have_posts()) {
            while ($articles_Q->have_posts()) {
                $articles_Q->the_post();
                Templates::getCard('post');
            }

            wp_reset_postdata();
        } else {
            echo 'هیچ مقاله ای پیدا نشد!!';
        }
        ?>
    </div>

</div>