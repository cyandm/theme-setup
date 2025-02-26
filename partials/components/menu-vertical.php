<?php
/**
 * this file for vertical menu
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Menu;


$menu_location = $args['menu_location'] ?? null;

if ( ! isset( $menu_location ) ) {
	wp_die( 'menu is not set!' );
}

$menu = Menu::getMenuByLocation( $menu_location );


?>

<div class="flex items-center gap-6">
	<?php foreach ( $menu as $item ) :
		$has_children = isset( $item->child_items );
		?>
		<div class="relative group">
			<div data-current="<?php echo Menu::isCurrentPageMenuItem( $item ) ? 'true' : 'false'; ?>"
				 class="transition-colors text-white/30 hover:text-white data-[current=true]:text-white">
				<div class="flex justify-center items-center">
					<a href="<?php echo $item->url; ?>">
						<?php echo $item->title; ?>
					</a>

					<span class="size-8 rotate-180 group-hover:rotate-0 transition-transform">
						<?php echo $has_children ? Icon::get( 'Arrow-1-2' ) : null; ?>
					</span>
				</div>
			</div>

			<?php if ( $has_children ) : ?>
				<div
					 class="absolute bg-gray-900 border border-cyan-500 rounded-md p-2 flex flex-col gap-1 min-w-36 transition-all opacity-0 pointer-events-none translate-y-3 group-hover:translate-y-0  group-hover:pointer-events-auto group-hover:opacity-100">
					<?php foreach ( $item->child_items as $child ) : ?>
						<a href="<?php echo $child->url ?>"
						   data-current="<?php echo Menu::isCurrentPageMenuItem( $child ) ? 'true' : 'false'; ?>"
						   class="border-b border-gray-800 pb-2 mb-2 last:border-none last:p-0 last:m-0 transition-colors text-white/30 hover:text-white data-[current=true]:text-white">
							<?php echo $child->title ?>
						</a>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		</div>
	<?php endforeach; ?>
</div>