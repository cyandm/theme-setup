<?php
$title_brand = get_field('title_brand_section');
$images_brand = [];

for ($i = 1; $i < 13; $i++) {
    array_push(
        $images_brand,
        get_field("image_brand_$i")
    );
}
?>

<section class="container mx-auto mt-8">
    <div class="md:text-3xl text-xl font-bold"><?php echo $title_brand ?></div>

    <swiper-container slides-per-view="9" space-between="5" loop="true" autoplay="true"
        class="swiper mt-10 !max-w-full mx-5 flex flex-row justify-center">

        <?php foreach ($images_brand  as $image_brand): ?>
        <swiper-slide>
                <?php echo wp_get_attachment_image($image_brand, 'full', false); ?>
        </swiper-slide>
        <?php endforeach; ?>

    </swiper-container>
</section>