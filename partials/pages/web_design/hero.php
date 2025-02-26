<?php

use Cyan\Theme\Helpers\Icon;

$image_hero_desctop = get_field('image_hero_desctop');
$image_hero_mobile = get_field('image_hero_mobile');
$text_button = get_field('text_button');
$icon_button = get_field('icon_button');
$icon_scroll = get_field('icon_scroll');
$titrs_hero = [];

for ($i = 1; $i < 5; $i++) {
    array_push(
        $titrs_hero,
        get_field("titr_hero_$i")
    );
}
?>
<section class="container">
    <h1 class="md:hidden md:text-6xl text-3xl font-bold absolute right-16 top-48"><?php echo $titrs_hero[0] ?></h1>
    <div class="mt-24 hidden md:flex"><?php echo wp_get_attachment_image($image_hero_desctop, 'full', false); ?></div>
    <div class="mt-24 md:hidden"><?php echo wp_get_attachment_image($image_hero_mobile, 'full', false); ?></div>

    <div class="mb-40 flex flex-col gap-6 md:gap-16 justify-center md:items-start items-center whitespace-nowrap mx-10">

        <div class="flex md:flex-row flex-col gap-5 max-md:w-full">
            <h1 class="hidden md:flex md:text-6xl text-xl font-bold mr-16"><?php echo $titrs_hero[0] ?></h1>
            <div class="border border-yellow-500 rounded-[12px] text-white flex max-md:w-full md:w-40 justify-center items-center gap-3 py-3"
                style="box-shadow: 0 4px 8px rgba(234, 179, 8, 0.5);">
                <div><?php echo wp_get_attachment_image($icon_button, 'full', false); ?></div>
                <div><?php echo $text_button ?></div>
            </div>
            <div class=" md:text-6xl text-3xl font-bold max-md:mr-24"> <?php echo $titrs_hero[1] ?></div>
        </div>
        <div class="md:text-3xl text-xl font-bold flex md:mr-20">
            <?php echo $titrs_hero[2] ?>
        </div>
        <div class=" text-xl font-bold md:mr-20">
            <?php echo $titrs_hero[3] ?>
            <div class="mr-12 mt-3"><?php echo wp_get_attachment_image($icon_scroll, 'full', false); ?></div>
        </div>
    </div>
</section>