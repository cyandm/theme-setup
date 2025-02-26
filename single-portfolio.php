<?php

$full_image_desktop = get_field('full_image_desktop');
$full_image_mobile = get_field('full_image_mobile');

?>

<?php get_header(null , ['render_template' => false])?>

<!-- desktop photo -->
<div class="hidden md:block">
    <?php echo wp_get_attachment_image($full_image_desktop, 'full', 'false' , ['class' => 'w-full']); ?>
</div>

<!-- mobile photo -->
<div class="block md:hidden">
    <?php echo wp_get_attachment_image($full_image_mobile, 'full', 'false' , ['class' => 'w-full']); ?>
</div>

<?php get_footer(null , ['render_template' => false])?>
