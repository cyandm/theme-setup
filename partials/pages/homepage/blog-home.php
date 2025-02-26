<?php


$title_blog_home = get_field('blog_home_title');
$view_all_button_text = get_field('view_all_button_text');

?>

<section class="container mx-auto mt-8">
    <div class="flex justify-between">
        <div class="md:text-3xl text-xl font-bold">
            <?php echo $title_blog_home ?>
        </div>
        <a href="<?php echo $view_all_button_url; ?>"
            class="hidden md:flex border px-8 py-2 btn-primary rounded-[40px]"><?php echo $view_all_button_text; ?></a>
    </div>
</section>