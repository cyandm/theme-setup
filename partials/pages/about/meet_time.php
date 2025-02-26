<?php


use Cyan\Theme\Helpers\Icon;


$meet_image = get_field('about_meet_img')


?>

<section class="container mx-auto pt-16 flex flex-col justify-center items-center text-neutral-200">



    <?php echo wp_get_attachment_image($meet_image, 'full', 'false'); ?>

    <h1 class="text-xl md:text-[28px] lg:[36px] font-bold">
        <?php _e('وقتشه تک به تک باهم ملاقات کنیم', 'cyan-dm') ?>
    </h1>

    <div class="text-base flex flex-col justify-center items-center mb-4">
        <?php _e('تیم سایان', 'cyan-dm') ?>

        <span class="size-6 rotate-90 text-cyan-500">
            <?php Icon::print('Arrow,-Forward') ?>
        </span>
    </div>
    
</section>

    <div class="container mx-auto flex mb-t justify-center mb-2">
        <button class="btn-primary px-6 py-2 text-sm ">
            <?php _e('مشاهده همه', 'cyan-dm') ?>
        </button>
    </div>