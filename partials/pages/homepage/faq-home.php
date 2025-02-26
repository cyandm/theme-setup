<?php

use Cyan\Theme\Helpers\Templates;

$feature_faq = new WP_Query([
    'post_type' => 'faq',
    'posts_per_page' => 6,
    'orderby' => 'date',
    'order' => 'DESC',
]);

$title_faq = get_field('faq_title');
$view_all_button_text = get_field('view_all_button_text');
$faq_image = get_field('faq_home_image');
?>

<section class="container mx-auto mt-8">
    <div class="flex justify-between">
        <div class="md:text-3xl text-xl font-bold">
            <?php echo $title_faq ?>
        </div>
        <a href="<?php echo $view_all_button_url; ?>"
            class="hidden md:flex border px-8 py-2 btn-primary rounded-[40px]"><?php echo $view_all_button_text; ?></a>
    </div>
        
    <div class="grid grid-rows-1 grid-cols-3 mt-4">
        <div class="col-start-1 col-span-2">
            <?php Templates::getCard('faq-card')?>
        </div>

        <div class="">
            <?php echo wp_get_attachment_image($faq_image, 'full', 'false');?>
        </div>
    </div>
</section>