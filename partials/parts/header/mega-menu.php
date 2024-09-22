<?php
$menu_object = $args['menu-object'];
$menu_id = $args['menu-id'];
?>

<div
	 class="mega-menu | fixed top-[--header-height] left-0  bg-white text-neutral-700 w-full py-5 opacity-0 pointer-events-none ">
	<div class="container">
		<div class="text-4xl ">
			<?php echo $menu_object->title ?>
		</div>

		<hr class="mt-3 mb-6" />

		<div class="grid grid-cols-5 gap-4 text-2xl ">
			<div class="col-span-1 grid gap-1 capitalize border-r border-gray-200 ">
				<?php foreach ( $menu_object->child_items as $child ) :
					$children = get_posts( [ 
						'post_type' => 'nav_menu_item',
						'meta_key' => '_menu_item_menu_item_parent',
						'meta_value' => $child->ID
					] );

					?>
					<div
						 class="text-neutral-400 hover:text-neutral-700 transition-colors flex justify-between items-start pr-4">
						<a href="<?php echo $child->url ?>">
							<?php echo $child->title ?>
						</a>
						<?php if ( count( $children ) > 0 ) : ?>
							<span>
								<svg class="icon size-4">
									<use href="#icon-chevron-right" />
								</svg>
							</span>
						<?php endif; ?>
					</div>
				<?php endforeach; ?>
			</div>

			<div class="col-span-1 grid gap-1 capitalize border-r border-gray-200 ">
				<div>shaker</div>
				<div>flush</div>
				<div>membrane</div>
			</div>

			<div class="col-span-2 bg-red-400">

			</div>

			<div class="col-span-1">
				<img class="w-full"
					 src="<?php echo CYN_THEME_URI . '/assets/img/placeholder-226-x-184.png' ?>"
					 alt="placeholder">
			</div>
		</div>
	</div>
</div>