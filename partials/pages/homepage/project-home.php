<?php
$Projects_title = get_field('Projects_title'); // عنوان ثابت یا سفارشی
$view_all_button_text = get_field('view_all_button_text'); // متن دکمه مشاهده همه
$view_all_button_url = site_url('/portfolio'); // لینک به آرشیو پست تایپ نمونه‌کارها

// ایجاد یک کوئری برای دریافت نمونه کارها
$query = new WP_Query([
    'post_type'      => 'portfolio', // نام پست تایپ
    'posts_per_page' => 7,          // تعداد نمونه کارها
    'orderby'        => 'date',     // مرتب‌سازی بر اساس تاریخ
    'order'          => 'DESC',     // ترتیب نزولی
]);

use Cyan\Theme\Helpers\Templates;
?>

<section class="container mx-auto">
    <div class="flex flex-col gap-[20px] md:mx-8 mt-8">

        <!-- عنوان و دکمه -->
        <div class="flex flex-row justify-between">
            <div class="md:text-4xl text-2xl font-bold"><?php echo $Projects_title; ?></div>
            <a href="<?php echo $view_all_button_url; ?>"
                class="hidden md:flex border px-8 py-2 btn-primary rounded-[40px]"><?php echo $view_all_button_text; ?></a>
        </div>

        <!-- سوئیپر برای دسکتاپ -->
        <swiper-container slides-per-view="auto" space-between="20" loop="true" autoplay="true" pagination="false"
            navigation="false" class="hidden md:flex mt-10 max-w-full md:mx-5 flex-row justify-center">

            <?php if ($query->have_posts()): ?>
            <?php while ($query->have_posts()): $query->the_post(); ?>
            <swiper-slide style="max-width:340px">
                <?php Templates::getCard('portfolio'); ?>
            </swiper-slide>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
            <?php else: ?>
            <p>هیچ نمونه‌کاری یافت نشد.</p>
            <?php endif; ?>

        </swiper-container>

        <!-- نمایش ساده برای موبایل -->
        <div class="flex flex-col gap-3 md:hidden">
            <?php if ($query->have_posts()): ?>
            <?php
                $count = 0;
                while ($query->have_posts() && $count < 3): $query->the_post();
                    $count++;
                ?>
            <div class="md:p-4 rounded-lg">
                <?php Templates::getCard('portfolio'); ?>
            </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
            <?php else: ?>
            <p>هیچ نمونه‌کاری یافت نشد.</p>
            <?php endif; ?>
        </div>

        <!-- دکمه مشاهده همه برای موبایل -->
        <a href="<?php echo $view_all_button_url; ?>"
            class="md:hidden flex border border-blue-500 px-8 py-2 rounded-[40px] justify-center">
            <?php echo $view_all_button_text; ?>
        </a>

    </div>
</section>