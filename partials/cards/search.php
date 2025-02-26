<a href="<?php echo get_permalink() ?>" class="flex gap-2 px-8 py-[26px]">

	<div class="flex justify-between items-center w-full">
		<div class="text-[#E9FAFF] text-body md:text-2xl">
			<?php the_title() ?>
		</div>

		<div class="text-[#767676] text-body-s">
			<span>
				<?php echo get_post_type_object(get_post_type())->labels->singular_name ?>
			</span>
		</div>
	</div>

</a>