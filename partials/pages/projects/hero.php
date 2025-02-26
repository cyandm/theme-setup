<?php


use Cyan\Theme\Helpers\Icon;

$hero_title = get_field('hero-title');
$hero_img = get_field('hero_img');
?>


<section class="container mx-auto pt-16 flex flex-col gap-y-4 justify-center items-center">
    <span>
        <?php echo wp_get_attachment_image($hero_img, 'full', false); ?>
    </span>

    <h1   h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
        <?php echo $hero_title ?>
    </h1>

    <div>
    <?php _e( 'بزن بریم', 'cyan-dm' ) ?>
    </div>
    
    <span class="size-10 rotate-90 text-cyan-500">
        <?php Icon::print('Arrow,-Forward') ?>
    </span>
</section>