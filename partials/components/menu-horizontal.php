<?php
/**
 * this file for horizontal menu
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Menu;
use Cyan\Theme\Helpers\Validators;

$menu_location = $args['menu_location'] ?? null;

if ( ! isset( $menu_location ) ) {
	wp_die( 'menu is not set!' );
}

Validators::menu( $menu_location );

$menu = Menu::getMenuByLocation( $menu_location );

?>

<div class="grid">
	<?php foreach ( $menu as $item ) :
		$has_children = isset( $item->child_items );
		$modal_name = sprintf( 'menu-%s', $item->ID );

		?>
		<div modal-toggler
			 data-modal-name="<?php echo $modal_name ?>">
			<div
				 class="flex justify-between items-center border-b border-gray-800 pb-2 mb-2 last:border-none last:p-0 last:m-0 transition-colors text-white/30 hover:text-white data-[current=true]:text-white">
				<a href="<?php echo $item->url; ?>">
					<?php echo $item->title; ?>
				</a>

				<span modal
					  data-active="false"
					  data-modal-name="<?php echo $modal_name ?>"
					  class="size-8 rotate-180 data-[active='true']:rotate-0 transition-transform">
					<?php echo $has_children ? Icon::get( 'Arrow-1-2' ) : null; ?>
				</span>
			</div>

			<?php if ( $has_children ) : ?>
				<div modal
					 data-active="false"
					 data-modal-name="<?php echo $modal_name ?>"
					 class="group grid transition-all grid-rows-[0fr] data-[active='true']:grid-rows-[1fr]">
					<div class="overflow-hidden">
						<div class="grid bg-gray-900 p-2 rounded-md">
							<?php foreach ( $item->child_items as $child ) : ?>
								<a href="<?php echo $child->url ?>"
								   data-current="<?php echo Menu::isCurrentPageMenuItem( $child ) ? 'true' : 'false'; ?>"
								   class="border-b border-gray-800 pb-2 mb-2 last:border-none last:p-0 last:m-0 transition-colors text-white/30 hover:text-white data-[current=true]:text-white">
									<?php echo $child->title ?>
								</a>
							<?php endforeach; ?>
						</div>
					</div>
				</div>
			<?php endif; ?>
		</div>
	<?php endforeach; ?>
</div>