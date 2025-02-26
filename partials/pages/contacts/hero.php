<?php
$image_hero_contacts = get_field('image_hero_contacts');
$titr_social = get_field('titr_social');
$titr_number = get_field('titr_number');
$titr_adress = get_field('titr_adress');
$adress = get_field('adress');
$image_adress = get_field('image_adress');

$social_images = [];

for ($i = 1; $i < 6; $i++) {
    array_push(
        $social_images,
        get_field("social_image_$i")
    );
}
?>

<div class="container flex flex-col md:flex-row justify-center gap-4 md:gap-36 mx-auto">
    <div class="md:w-1/2">
        <?php echo wp_get_attachment_image($image_hero_contacts, 'full', false); ?>
    </div>
    <div class="flex flex-col gap-6 rounded-[32px] border border-white justify-center md:w-1/2 max-md:py-5 pr-4">
        <div class="flex flex-col gap-4">
            <div class="md:text-2xl text-xl font-bold"><?php echo $titr_social ?></div>
            <div class="flex flex-row gap-3">
                <?php foreach ($social_images as $social_image):
                    echo wp_get_attachment_image($social_image, 'full', false);
                endforeach; ?>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="md:text-2xl text-xl font-bold"><?php echo $titr_number ?></div>
            <div class="flex flex-col gap-1">
                <div><?php echo get_option('titr_number')?></div>
                <div>+۹۸۳۸۵۴۹۰۳۹۰</div>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="md:text-2xl text-xl font-bold"><?php echo $titr_adress ?></div>
            <div><?php echo $adress ?></div>
            <div>
                <?php echo wp_get_attachment_image($image_adress, 'full', false); ?>
            </div>
        </div>
    </div>
</div>