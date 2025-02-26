<?php


use Cyan\Theme\Helpers\Icon;



$border_color = $args['border_color'] ?? '#ffffff'; // مقدار پیش‌فرض

?>



<div class="rounded-[32px] p-4 group border-2 border-transparent hover:border-[var(--border-color)]"
    style="background-color: #0F121D !important; --border-color:<?php echo $border_color ?>">
    <div class="flex justify-between mb-4">
        <p><?php the_title(); ?></p> <!-- نمایش عنوان سوال -->
        <div>
            <span class="size-6 group-hover:rotate-90 transition-transform">
                <?php Icon::print('Arrow-27') ?>
            </span>
        </div>
    </div>
    <div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all delay-75">
        <span class="overflow-hidden">
            <?php the_content(); ?>
            <!-- نمایش متن پاسخ -->
        </span>
    </div>
</div>