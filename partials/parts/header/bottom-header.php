<?php $desktop_menu = cyn_get_menu_items_by_slug( CYN_DESKTOP_HEADER ) ?>

<div class="bg-blue-700">
	<div class="container flex justify-between items-center py-4">

		<!--desktop menu-->
		<div class="text-white flex gap-5 ">
			<?php foreach ( $desktop_menu as $index => $menu_item ) : ?>
				<div class="flex items-center gap-1">
					<a href="<?php echo $menu_item->url ?>"
					   class="capitalize">
						<?php echo $menu_item->title; ?>
					</a>
					<?php echo $menu_item->child_items ? '<svg class="icon size-4"><use href="#icon-chevron-down"/></svg>' : ''; ?>
					<?php

					if ( get_field( 'is_mega_menu', $menu_item->ID ) ) {
						cyn_get_part( 'header/mega-menu', [ 'menu-id' => $menu_item->ID ] );
					} else {
						cyn_get_part( 'header/normal-menu', [ 'menu-id' => $menu_item->ID ] );
					}
					?>
				</div>
			<?php endforeach; ?>
		</div>

		<!--search-->
		<div>
			<?php cyn_get_part( '/header/search' ) ?>
		</div>
	</div>
</div>