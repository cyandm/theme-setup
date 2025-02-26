<?php
$image_icon = get_field('icon');
$instagram_posts = [];

for ($i = 1; $i < 10; $i++) {
    array_push(
        $instagram_posts,
        [
            'image' => get_field("instagram_posts_$i"),
        ]

    );
}
?>
<!--instagram_posts-->
<section>
    <div class="w-full h-80 p-5 mt-10 mb-10 bg-gradient-to-b from-[rgba(83,4,103,0.53)] to-[rgba(4,8,103,0.49)]">
        <div class="container mx-auto flex justify-between items-center">
            <div class="md:text-4xl text-xl font-bold"> محبوب ترین پست های اینستاگرام </div>
            <div>
                <?php wp_get_attachment_image($image_icon, 'thumbnail', false); ?>
            </div>
        </div>
        <swiper-container slides-per-view="auto" space-between="5" loop="true" autoplay="true" pagination="false"
            navigation="false" class="mt-3 mb-3">

            <?php foreach ($instagram_posts as $instagram_post): ?>
                <swiper-slide style="max-width:250px">
                    <div class="mb-5 p-3 bg-cover">
                        <?php echo wp_get_attachment_image($instagram_post['image'], 'thumbnail', false, ['class' => 'w-48 h-48 rounded-3xl']); ?>
                    </div>
                </swiper-slide>
            <?php endforeach; ?>
        </swiper-container>

    </div>
</section>