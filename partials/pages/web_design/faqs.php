<?php
$color_theme = $args['color_theme'] ?? '';

$faqs_title = get_field('faqs_title'); // عنوان بخش
$faqs_image = get_field('faqs_image'); // تصویر بخش
$view_all_button_url = site_url('/portfolio'); // لینک به آرشیو پست تایپ نمونه‌کارها

// ایجاد کوئری برای دریافت پست‌های پست تایپ faq
$query = new WP_Query([
    'post_type'      => 'faq',      // نام پست تایپ
    'posts_per_page' => -1,         // تعداد پست‌ها (تمامی پست‌ها)
    'orderby'        => 'date',     // مرتب‌سازی بر اساس تاریخ
    'order'          => 'DESC',     // ترتیب نزولی
]);

use Cyan\Theme\Helpers\Templates;
?>

<section class="bg-zinc-950 mx-auto container text-white flex flex-col gap-3 mb-8">

    <div class="flex flex-row justify-between mt-24">
        <h2 class="text-2xl text-center sm:text-right sm:text-4xl font-bold "><?php echo $faqs_title; ?></h2>
    </div>

    <div class="flex flex-col-reverse md:flex-row gap-3 md:p-4 md:pl-8 pb-10">
        <div class="flex-1">
            <div class="mt-5 md:p-5 grid gap-5">
                <?php if ($query->have_posts()): ?>
                    <?php while ($query->have_posts()): $query->the_post();

                        Templates::getCard('faq-card', ['border_color' => $color_theme]);
                    endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                <?php else: ?>
                    <p>هیچ سوالی یافت نشد.</p>
                <?php endif; ?>
            </div>
        </div>

        <div>
            <?php echo wp_get_attachment_image($faqs_image, 'full', false); ?>
        </div>
    </div>
</section>