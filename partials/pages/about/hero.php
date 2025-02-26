<?php


use Cyan\Theme\Helpers\Icon;

$hero_title = get_field('hero-title');
$hero_h1 = get_field('hero-h1');
$hero_h2 = get_field('hero-h2')


?>

<section class="container mx-auto pt-16 flex flex-col gap-y-8 justify-center items-center">
    <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
        <?php echo $hero_title ?>
    </h1>
    <h3 class="text-xl ">
        <?php echo $hero_h1 ?>
    </h3>
    <div class="text-base flex flex-col justify-center items-center gap-y-2">
        <?php echo $hero_h2 ?>

        <span class="size-6 rotate-90 text-cyan-500">
            <?php Icon::print('Arrow,-Forward') ?>
        </span>
    </div>
</section>