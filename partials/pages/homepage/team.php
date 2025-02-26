<?php


$title_team = get_field('team_title');
$view_all_button_text = get_field('view_all_button_text');

$feature_staff_Q = new WP_Query([
    'post_type' => 'staff',
    'posts_per_page' => 4,
    'orderby' => 'date',
    'order' => 'DESC',
]);

use Cyan\Theme\Helpers\Templates;
?>

<section class="container mx-auto mt-8">
    <div class="flex justify-between">
        <div class="md:text-3xl text-xl font-bold">
            <?php echo $title_team ?>
        </div>
        <a href="<?php echo $view_all_button_url; ?>"
            class="hidden md:flex border px-8 py-2 btn-primary rounded-[40px]"><?php echo $view_all_button_text; ?></a>
    </div>
    
    <div class="container mt-4 mx-auto lg:grid lg:grid-cols-4 lg:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col gap-4">
        <?php
        if ($feature_staff_Q->have_posts()) {
            while ($feature_staff_Q->have_posts()) {
                $feature_staff_Q->the_post();
                Templates::getCard('staffCard');
            }
            wp_reset_postdata();
        } else {
            echo 'عضوی پیدا نشد!';
        }
        ?>
    </div>
        
    
</section>