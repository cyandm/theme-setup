<?php
/*
Description: A template for displaying a 404 error page.
More information at https://developer.wordpress.org/themes/templates/template-hierarchy/#404-not-found-hierarchy
*/

?>

<?php get_header(); ?>

<main class="container">
	<div class="w-full min-h-[70vh] flex flex-col justify-center items-center gap-2">

		<img src="<?php echo get_option( '404_image' ) ?>"
			 alt="">

		<div class="flex flex-col gap-3">
			<p class="text-2xl"><?php _e( 'صفحه موردنظر یافت نشد', 'cyn-dm' ) ?></p>

			<a href="<?php echo home_url() ?>"
			   class="btn-primary p-2"><?php _e( 'بازگشت به صفحه اصلی', 'cyn-dm' ) ?></a>
		</div>
	</div>
</main>

<?php get_footer();
