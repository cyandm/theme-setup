<?php get_header() ?>


<main class="default-page | container mb-9">
	<div class="paragraph">
		<h1>
			<?php the_title() ?>
		</h1>

		<div class="py-2"></div>

		<div class="img-wrapper">
			<?= wp_get_attachment_image( get_post_thumbnail_id(), 'full' ); ?>
		</div>

		<div class="py-6"></div>

		<section>
			<?php the_content() ?>
		</section>
	</div>
</main>

<?php get_footer() ?>