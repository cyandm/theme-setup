<?php
use Cyan\Theme\Helpers\Icon;

$project_images = [];

for ($i = 1; $i < 5; $i++) {
    array_push(
        $project_images,
         get_field('project_images_' . $i)
        
    );
}


$section_color = get_field('section-color');
?>



<div
    style="--start-color: <?php echo $section_color?>;"
    class="flex bg-gradient-to-r pb-4 even:from-[var(--start-color)] even:to-[#090C17] odd:from-[#090C17] odd:to-[var(--start-color)] group">

<div class="container mx-auto flex-row group-even:flex-row-reverse flex  max-md:!flex-col-reverse pt-8">
    <div class="flex flex-col gap-y-5">
            <div class="text-4xl font-bold pt-2 leading-8 pb-5">
                <?php
                the_title();
                ?>
            </div>

            <div class="text-2xl font-bold">
                <?php _e('درباره پروژه', 'cyan-dm') ?>
            </div>

            <div class="text-xl pt-2 font-normal leading-8">
                <?php
                the_content();
                ?>
            </div>

            <div class="flex justify-end">
                <button class="btn-primary rounded-3xl items-center px-5 py-2 ">
                    <?php _e('مشاهده سایت', 'cyan-dm') ?>
                </button>
            </div>

            <span class="text-2xl font-bold">
                <?php _e('خدمات ما', 'cyan-dm') ?>
            </span>

            <div class="flex gap-2">
                <?php
                // تغییر 'category' به 'working_team'
                    $working_team = get_the_terms(get_the_ID(), 'working_team'); // گرفتن دسته‌بندی‌های 'working_team'
                    if ($working_team && !is_wp_error($working_team)) :
                        foreach ($working_team as $team) :

                            $color = get_field('color-term', 'working_team_' . $team->term_id);
                            echo '<span style="background-color:' . $color . '" class="text-white px-3 py-1 rounded-md bg-blur-xl text-sm">' . esc_html($team->name) . '</span>';
                        endforeach;
                    endif;
                ?>
            </div>

        </div>

        <!-- image swiper div -->
        <div class="flex flex-col"> 

                <swiper-container slides-per-view="1" space-between="5" loop="true" navigation="true" 
                    navigation-next-el="#swiper-button-next-<?php echo get_the_ID()?>"
                    navigation-prev-el="#swiper-button-prev-<?php echo get_the_ID()?>"
                    style="max-width: 400px;"
                    class="swiper-container relative z-10">
                        <?php foreach ($project_images as $project_image): ?>
                            <swiper-slide class="swiper-slide transition-opacity duration-500 ease-in-out">
                                <div class="flex"><?php echo wp_get_attachment_image($project_image , 'full', false)  ?></div>
                            </swiper-slide>
                            <?php endforeach; ?>
                </swiper-container>

            <div class="flex gap-2 justify-center">
                <button id="swiper-button-next-<?php echo get_the_ID()?>" class=" flex border border-neutral rounded-full py-2 px-2 justify-center items-center">
                    <span class="size-5">
                        <?php Icon::print('chevron-right') ?>
                    </span>
                </button>

                <button id="swiper-button-prev-<?php echo get_the_ID()?>" class=" flex border border-neutral rounded-full py-2 px-2 justify-center items-center">
                    <span class="size-5">
                        <?php Icon::print('chevron-left') ?>
                    </span>
                </button>
            </div>
        </div>
</div>
   
</div>

