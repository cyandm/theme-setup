<div
	 class="mx-auto bg-white bg-opacity-5 bg-transparent backdrop-blur-md rounded-3xl shadow-zinc-950 shadow-2xl px-2 pt-2 pb-5 md:max-w-72 ">
	<div class="w-full rounded-3xl overflow-hidden">
		<?php the_post_thumbnail( 'full', [ 'class' => 'w-full h-full' ] ); ?>
	</div>
	<div class="flex flex-col justify-start mx-2">

		<div class="text-base font-bold flex pt-2 leading-8">
			<?php the_title(); ?>
		</div>
		<div class="leading-8">
			<?= get_field( 'jobTitle' ); ?>
		</div>

	</div>

</div>