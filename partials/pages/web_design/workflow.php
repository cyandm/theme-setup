<?php

use Cyan\Theme\Helpers\Icon;

$Projects_title = get_field('workflow_title');

$workflow_sections = [];

for ($i = 1; $i <= 5; $i++) {
    array_push(
        $workflow_sections,
        [
            'image' => get_field("image_workflow_$i"),
            'text_titr' => get_field("titr_section_$i"),
            'text_description' => get_field("description_section_$i"),
            'item_1' => get_field("item_description_1"),
            'item_2' => get_field("item_description_2"),
            'item_3' => get_field("item_description_3"),
        ]

    );
}
?>
<section class="container">
    <!-- عنوان -->
    <div class="md:text-4xl text-2xl font-bold md:mr-8"><?php echo $Projects_title ?></div>

    <!-- سوئیپر برای دسکتاپ -->
    <div>
        <swiper-container slides-per-view="1" space-between="5" loop="true" autoplay="false" effect="fade"
            fade-effect="{ 'crossFade': true }" pagination="false" navigation="true"
            navigation-next-el=".swiper-button-next" navigation-prev-el=".swiper-button-prev"
            class="hidden md:flex mt-10 max-w-full mx-auto flex-row justify-center">

            <?php
            $index = 1;
            foreach ($workflow_sections as $workflow_section): ?>
                <swiper-slide>
                    <div class="bg-gray-950 text-white p-5 rounded-[32px] flex flex-row justify-between gap-3">

                        <div class="flex flex-col gap-4 w-full md:max-w-xl">

                            <div class="md:text-2xl text-lg font-bold flex gap-2">
                                <span class="text-4xl text-black"
                                    style="text-shadow: 0 0 5px #FFCC00, 0 0 10px #FFCC00;"><?php echo $index; ?>
                                </span>
                                <?php echo $workflow_section['text_titr']; ?>
                            </div>

                            <div class="prose text-[#E0E0E0] text-[16px]">
                                <?php echo $workflow_section['text_description']; ?>
                            </div>

                        </div>

                        <div class="h-[428px] flex">
                            <?php echo wp_get_attachment_image($workflow_section['image'], 'full', false, ['class' => 'w-full max-w-[350px] md:max-w-[428px] h-auto object-cover rounded-md']); ?>
                        </div>

                    </div>
                </swiper-slide>
                <?php
                $index++;
            endforeach; ?>

        </swiper-container>

        <!-- دکمه‌های "بعدی" و "قبلی" برای دسکتاپ -->
        <div class="flex justify-center z-40 gap-2">
            <div class="hidden md:flex border px-5 py-2 rounded-[40px] gap-1 swiper-button-next">
                <span class="size-6">
                    <?php Icon::print('Arrow-22') ?>
                </span>
                <?php echo "بعدی"; ?>
            </div>
            <div class="hidden md:flex border px-5 py-2 rounded-[40px] gap-1 swiper-button-prev">
                <?php echo "قبلی"; ?>
                <span class="size-6">
                    <?php Icon::print('Arrow-6') ?>
                </span>
            </div>
        </div>
    </div>


    <!-- نمایش ساده برای موبایل -->
    <div class="flex flex-col justify-center items-center gap-5 md:hidden mt-10">
        <?php $index = 1; ?>
        <?php foreach ($workflow_sections as $workflow_section): ?>

            <div class="text-white rounded-[32px] flex flex-col gap-3 prose">

                <div class="text-lg font-bold flex gap-2 items-center">

                    <span class="text-4xl text-black"
                        style="text-shadow: 0 0 5px #FFCC00, 0 0 10px #FFCC00;"><?php echo $index; ?>
                    </span>

                    <?php echo $workflow_section['text_titr'] ?>

                </div>

                <div class="w-full">
                    <?php echo wp_get_attachment_image($workflow_section['image'], 'full', false, ['class' => 'w-full h-auto object-cover rounded-md']); ?>
                </div>
                <div class="flex flex-col gap-4 w-full">
                    <div><?php echo $workflow_section['text_description'] ?></div>
                </div>
            </div>

            <?php
            $index++;
        endforeach;
        ?>
    </div>

</section>