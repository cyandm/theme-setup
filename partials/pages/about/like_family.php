<?php


use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

$family_video_id = get_field('likeAFamilyVideo');

if (is_null($family_video_id)) return;

?>

<div class="py-32"></div>

<section class="container mx-auto pt-16 flex flex-col text-center justify-center items-center">


    <h1 class="text-xl md:text-[28px] lg:[36px] font-bold">
        <?php _e('مثل یه خانواده ', 'cyan-dm') ?>
    </h1>

    <div class="text-base flex flex-col justify-center items-center mb-4">
        <?php _e('ویدیو معرفی', 'cyan-dm') ?>

        <span class="size-6 rotate-90 text-cyan-500">
            <?php Icon::print('Arrow,-Forward') ?>
        </span>
    </div>

    <div class="w-full h-full rounded-lg">
        <video
            class="plyr_element h-full w-full rounded-lg"
            controls
            playsinline>

            <source src="<?php echo wp_get_attachment_url($family_video_id, 'full'); ?>" type="video/mp4">

        </video>
    </div>

    <div class="md:hidden mt-3">
    <?php
    Templates::getComponent('btn-scroll-top')
    ?>
    </div>

</section>