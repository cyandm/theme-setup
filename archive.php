<?php
/*
Template Name: Archive
Description: A template for displaying an archive of post types
More information at https://developer.wordpress.org/themes/templates/template-hierarchy/#archive-hierarchy

*/

use Cyan\Theme\Helpers\Templates;

get_header();

?>

<main class="">
	<!-- write your code here... -->

	<div class="bg-gradient-to-b from-[rgba(255,255,255,0.022)] to-[rgba(255,255,255,0.025)] container mx-auto">
		<?php Templates::getComponent('search_box'); ?>
		<div class="">
			<!-- نمایش عنوان آرشیو -->
			<div class="mb-8">
				<?php
				if (is_category()) {
					echo '<h3 class="md:text-4xl text-xl font-bold">' . single_cat_title('دسته‌بندی: ', false) . '</h3>';
				} else {
					echo '<h3 class="md:text-4xl text-xl font-bold"> همه مقالات</h3>';
				}
				?>

			</div>

			<?php if (have_posts()): ?>
				<div class="block md:grid grid-cols-4">
					<?php while (have_posts()):
						the_post(); ?>
						<?php Templates::getCard('post'); ?>

					<?php endwhile; ?>
				</div>
				<!--Pagination-->
				<div class="mt-8 flex justify-end gap-x-5">
					<?php
					the_posts_pagination([
						'mid_size' => 2,
						'prev_text' => '<span class="border border-gray-600 hover:border-[#1DBACF] hover:text-[#1DBACF] rounded-lg p-3 px-7">«</span>',
						'next_text' => '<span class="border border-gray-600 hover:border-[#1DBACF] hover:text-[#1DBACF] rounded-lg p-3 px-7">»</span>',
						'before_page_number' => '<span class="border border-gray-600 hover:border-[#1DBACF] hover:text-[#1DBACF] rounded-lg p-3 px-7">',
						'after_page_number' => '</span>',
						'screen_reader_text' => __('صفحه‌بندی', 'textdomain'),
					]);
					?>
				</div>

			<?php else: ?>
				<p>هیچ مطلبی برای نمایش وجود ندارد.</p>
			<?php endif; ?>

		</div>
	</div>

</main>

<?php get_footer(); ?>