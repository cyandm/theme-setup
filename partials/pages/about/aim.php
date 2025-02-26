<?php


use Cyan\Theme\Helpers\Icon;

$aim_sections = [];
for ($i = 1; $i < 4; $i++) {
    array_push(
        $aim_sections,
        [
            'aim-title' => get_field('aim-title' .$i),
            'aim-text' => get_field('aim-text'.$i),
        ]
    );
}
?>



<section class="relative container mt-8 isolate">

    <div class="bg-white bg-opacity-5 bg-transparent backdrop-blur-md rounded-2xl  flex flex-col justify-center items-center gap-y-4 pt-8">

        <!-- swiper -->
        <swiper-container slides-per-view="1" space-between="10" loop="true" navigation="true" 
        navigation-next-el=".swiper-button-next"
        navigation-prev-el=".swiper-button-prev"
        effect="fade"
        fade-effect="{ 'crossFade': true }"
        class="swiper-container relative  mx-auto mt-8 max-w-full z-10 px-9">

            <?php foreach ($aim_sections as $aim_section): ?>
            <swiper-slide class="swiper-slide transition-opacity duration-500 ease-in-out">
                    <div class="text-xl md:text-3xl lg:text-4xl text-center"><?php echo $aim_section['aim-title'] ?></div>
                    <div class="text-base md:text-xl md:leading-9 flex text-justify leading-9 pt-4"><?php echo $aim_section['aim-text'] ?></div>
            </swiper-slide>
            <?php endforeach; ?>
        </swiper-container>

        <!-- buttons -->
        <div class="grid grid-cols-2 z-10 gap-2 p-4 justify-center">
            <button class="swiper-button-next flex border border-neutral rounded-3xl py-2 pr-4 pl-5 justify-center items-center">
                <span class="size-5">
                    <?php Icon::print('Arrow-22') ?>
                </span>
                <span class="text-sm">
                    <?php _e('بعدی', 'cyan-dm') ?>
                </span>
            </button>

            <button class="swiper-button-prev flex border border-neutral rounded-3xl py-2 pr-5 pl-4 justify-center items-center hover:text-neutral-50">
                <span class="text-sm">
                    <?php _e('قبلی', 'cyan-dm') ?>
                </span>
                <span class="size-5">
                    <?php Icon::print('Arrow-6') ?>
                </span>

            </button>
        </div>
    </div>
    
</section>