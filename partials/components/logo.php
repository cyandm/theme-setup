<div id="logo">
	<?php if ( has_custom_logo() ) : ?>
		<?php the_custom_logo(); ?>
	<?php else : ?>
		<a href="<?php echo home_url(); ?>"
		   class="text-white text-2xl font-bold">
			<?php _e( 'لطفا لوگوی سایت را بارگذاری نمایید', 'cyn-dm' ) ?>
		</a>
	<?php endif; ?>
</div>