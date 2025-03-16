<?php get_header() ?>

<main class="container">
	<div class="single-blog-post">
		<?php if ( has_post_thumbnail() ) : ?>
			<div class="post-thumbnail mt-5">
				<?php the_post_thumbnail( 'large', [ 'class' => 'rounded-3xl mx-auto px-3',] ); ?>
			</div>
		<?php endif; ?>
		<div class="block md:flex justify-between items-center">
			<div class="flex justify-start items-center mt-3">
				<!--avatar-->
				<?php
				echo get_avatar( get_current_user_id(), 50, '', '', [ 
					'class' => 'rounded-full ml-5'
				] );
				?>
				<!--author-->
				<div class="flex gap-x-2">
					<?php the_author(); ?>
					<p class="text-sm text-gray-300">
						<?php echo get_the_date(); ?>
					</p>
				</div>
			</div>


		</div>

		<!-- Title -->
		<h3 class="md:text-4xl text-xl font-bold mt-5"><?php the_title(); ?></h3>

		<!-- Content -->
		<div
			 class="prose !max-w-full  prose-headings:text-white prose-p:text-white/80 prose-a:text-blue-600 prose-li:text-white/80">
			<?php the_content(); ?>
		</div>
	</div>
</main>
<?php get_footer() ?>