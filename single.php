<?php
/*
Template Name: Single
Description: A template for displaying a single post type.
More information at https://developer.wordpress.org/themes/templates/template-hierarchy/#single-hierarchy
*/

use Cyan\Theme\Helpers\Templates;
?>
<?php get_header(); ?>

<main class="container mx-auto">
	<!-- write your code here -->

	<div class="block md:flex justify-between gap-x-5">
		<!--sidebar-->
		<div class="hidden md:block h-full">
			<?php Templates::getComponent('single_blog_side_bar'); ?>
		</div>

		<div class="bg-gradient-to-b from-[rgba(255,255,255,0.0616)] to-[rgba(255,255,255,0.07)] rounded-3xl p-5">
			<?php
			if (have_posts()):
				while (have_posts()):
					the_post(); ?>
					<?php Templates::getCard('single_post'); ?>

				<?php endwhile;
			else:
				echo '<p>هیچ پستی یافت نشد</p>';
			endif;
			?>
		</div>
		<!-- Comments -->
		<div class="md:hidden mt-5">
			<?php Templates::getComponent('single_comment'); ?>
		</div>

		<div class="md:hidden">
			<?php Templates::getComponent('single_blog_side_bar'); ?>
		</div>
	</div>
	<!-- Comments -->
	<div class="hidden md:block mr-[400px] mt-5">
		<?php Templates::getComponent('single_comment'); ?>
	</div>

</main>

<?php get_footer();
