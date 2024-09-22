<?php $desktop_menu = cyn_get_menu_items_by_slug( CYN_DESKTOP_HEADER ) ?>

<div class="bg-blue-700 relative">
	<div class="container flex justify-between items-center py-4">

		<!--desktop menu-->
		<div class="text-white flex gap-5 ">
			<?php foreach ( $desktop_menu as $index => $menu_item ) :
				$is_mega_menu = get_field( 'is_mega_menu', $menu_item->ID );

				?>
				<div class="flex items-center gap-1 <?php echo $is_mega_menu ? 'is-mega-menu' : '' ?>">

					<a href="<?php echo $menu_item->url ?>"
					   class="capitalize">
						<?php echo $menu_item->title; ?>
					</a>

					<?php echo $menu_item->child_items ? '<svg class="icon size-4"><use href="#icon-chevron-down"/></svg>' : ''; ?>

					<?php cyn_get_part( $is_mega_menu ? 'header/mega-menu' : 'header/normal-menu', [ 'menu-id' => $menu_item->ID, 'menu-object' => $menu_item ] ); ?>


				</div>
			<?php endforeach; ?>
		</div>

		<!--search-->
		<div>
			<?php cyn_get_part( '/header/search' ) ?>
		</div>
	</div>
</div>