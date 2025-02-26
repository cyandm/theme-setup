<?php

use Cyan\Theme\Helpers\Templates;

$feature_projects = new WP_Query([
    'post_type' => 'portfolio',
    'posts_per_page' => 6,
    'orderby' => 'date',
    'order' => 'DESC',
]);
?>

<section class="flex flex-col">


        <?php
        if ($feature_projects->have_posts()) {
            while ($feature_projects->have_posts()) {
                $feature_projects->the_post();
                Templates::getCard('projectsCard');
            }
            wp_reset_postdata();
        } else {
            echo 'عضوی پیدا نشد!';
        }
        ?>

</section>