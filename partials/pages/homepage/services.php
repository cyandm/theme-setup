<?php

use Cyan\Theme\Helpers\Icon;

$title_services = get_field('services_title');
$view_all_button_text = get_field('view_all_button_text');

$consultation_image = get_field('consultation_image');
$title_consultation = get_field('consultation_title');

$web_design_image = get_field('web_design_image');
$title_web_design = get_field('web_design_title');

$teaser_image = get_field('teaser_image');
$title_teaser = get_field('teaser_title');

$content_image = get_field('content_image');
$title_content = get_field('content_title');

$seo_image = get_field('seo_image');
$title_seo = get_field('seo_title');

$marketing_image = get_field('marketing_image');
$title_marketing = get_field('marketing_title');

?>

<section class="container mx-auto mt-8">
    <div class="flex justify-between">
        <div class="md:text-3xl text-xl font-bold">
            <?php echo $title_services ?>
        </div>
        <a href="<?php echo $view_all_button_url; ?>"
            class="hidden md:flex border px-8 py-2 btn-primary rounded-[40px]"><?php echo $view_all_button_text; ?></a>
    </div>

    <div class="grid grid-cols-4 grid-rows-2 gap-4 mt-4 ">

        <div class="row-span-1 col-span-1 py-6 hover:border hover:border-cyan-500 shadow-black shadow-sm bg-white bg-opacity-5 bg-transparent backdrop-blur-md rounded-2xl flex flex-col justify-center text-center items-center"> 
            <?php echo wp_get_attachment_image($consultation_image, 'full', 'false'); ?>
            <div class="font-bold text-2xl">
            <?php echo $title_consultation ?>
            </div>
            
            <div class="flex mt-4">
                <span class="size-6 text-cyan-500">
                    <?php Icon::print('Arrow,-Forward') ?>
                </span>
                <a class="opacity-55" href="#">
                    <?php _e('اطلاعات بیشتر', 'cyan-dm') ?>
                </a>
            </div>
        </div>

        <div class="row-start-1 col-start-2 col-span-2 py-6 hover:border hover:border-cyan-500 shadow-black shadow-sm bg-white bg-opacity-5 bg-transparent backdrop-blur-md rounded-2xl flex flex-col justify-center text-center items-center">
            <?php echo wp_get_attachment_image($web_design_image, 'full', 'false'); ?>
            <div class="font-bold text-2xl">
                <?php echo $title_web_design ?>
            </div>
            
            <div class="flex mt-4">
                <span class="size-6 text-cyan-500">
                    <?php Icon::print('Arrow,-Forward') ?>
                </span>
                <a class="opacity-55" href="#">
                    <?php _e('اطلاعات بیشتر', 'cyan-dm') ?>
                </a>
            </div>
        </div>

        <div class="row-start-1 col-start-4 col-span-1 py-6 hover:border hover:border-cyan-500 shadow-black shadow-sm bg-white bg-opacity-5 bg-transparent backdrop-blur-md rounded-2xl flex flex-col justify-center text-center items-center">
            <?php echo wp_get_attachment_image($teaser_image, 'full', 'false'); ?>
            <div class="font-bold text-2xl">
                <?php echo $title_teaser ?>
            </div>
            
            <div class="flex mt-4">
                <span class="size-6 text-cyan-500">
                    <?php Icon::print('Arrow,-Forward') ?>
                </span>
                <a class="opacity-55" href="#">
                    <?php _e('اطلاعات بیشتر', 'cyan-dm') ?>
                </a>
            </div>
        </div>

        <div class="row-start-2 col-span-1 py-6 hover:border hover:border-cyan-500 shadow-black shadow-sm bg-white bg-opacity-5 bg-transparent backdrop-blur-md rounded-2xl flex flex-col justify-center text-center items-center">
            <?php echo wp_get_attachment_image($content_image, 'full', 'false'); ?>
            <div class="font-bold text-2xl">
                <?php echo $title_content ?>
            </div>
            
            <div class="flex mt-4">
                <span class="size-6 text-cyan-500">
                    <?php Icon::print('Arrow,-Forward') ?>
                </span>
                <a class="opacity-55" href="#">
                    <?php _e('اطلاعات بیشتر', 'cyan-dm') ?>
                </a>
            </div>
        </div>

        <div class="row-start-2 col-start-2 col-span-2 py-6 hover:border hover:border-cyan-500 shadow-black shadow-sm bg-white bg-opacity-5 bg-transparent backdrop-blur-md rounded-2xl flex flex-col justify-center text-center items-center">
            <?php echo wp_get_attachment_image($seo_image, 'full', 'false'); ?>
            <div class="font-bold text-2xl">
                <?php echo $title_seo ?>
            </div>
            
            <div class="flex mt-4">
                <span class="size-6 text-cyan-500">
                    <?php Icon::print('Arrow,-Forward') ?>
                </span>
                <a class="opacity-55" href="#">
                    <?php _e('اطلاعات بیشتر', 'cyan-dm') ?>
                </a>
            </div>
        </div>

        <div class="row-start-2 col-start-4 col-span-1 py-6 hover:border hover:border-cyan-500 shadow-black shadow-sm bg-white bg-opacity-5 bg-transparent backdrop-blur-md rounded-2xl flex flex-col justify-center text-center items-center">
            <?php echo wp_get_attachment_image($marketing_image, 'full', 'false'); ?>
            <div class="font-bold text-2xl">
                <?php echo $title_marketing ?>
            </div>
            
            <div class="flex mt-4">
                <span class="size-6 text-cyan-500">
                    <?php Icon::print('Arrow,-Forward') ?>
                </span>
                <a class="opacity-55" href="#">
                    <?php _e('اطلاعات بیشتر', 'cyan-dm') ?>
                </a>
            </div>
        </div>

    </div>
</section>