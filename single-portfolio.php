<?php

use Cyan\Theme\Helpers\Icon;

$full_image_desktop = get_field( 'full_image_desktop' );
$full_image_mobile = get_field( 'full_image_mobile' );

$is_dark = get_field( 'is_dark' );

$portfolio_page = get_posts( [ 
	'post_type' => 'page',
	'posts_per_page' => 1,
	'meta_query' => [ 
		[ 
			'key' => '_wp_page_template',
			'value' => 'templates/projects.php'
		]
	]
] );

$portfolio_url = ! empty( $portfolio_page ) ? get_permalink( $portfolio_page[0]->ID ) : '';

?>

<?php get_header( null, [ 'render_template' => false ] ) ?>

<!-- desktop photo -->
<div class="hidden md:block">
	<?php echo wp_get_attachment_image( $full_image_desktop, 'full', false, [ 'class' => 'w-full' ] ); ?>
</div>

<!-- mobile photo -->
<div class="block md:hidden">
	<?php echo wp_get_attachment_image( $full_image_mobile, 'full', false, [ 'class' => 'w-full' ] ); ?>
</div>


<!-- float button -->
<div class="fixed left-3 bottom-3 z-10">
	<div class="flex flex-col gap-3">
		<!-- Buttons that slide up -->
		<div
			 class="slide-up-btn opacity-0 pointer-events-none <?php echo $is_dark ? 'bg-black' : 'bg-white' ?> aspect-square size-14 rounded-full cursor-pointer">
			<a href="<?php echo $portfolio_url ?>"
			   class="block p-2 <?php echo $is_dark ? 'text-white' : 'text-black' ?>">
				<?php Icon::print( 'Left,-Arrow' ) ?>
			</a>
		</div>
		<div
			 class="slide-up-btn opacity-0 pointer-events-none <?php echo $is_dark ? 'bg-black' : 'bg-white' ?> aspect-square size-14 rounded-full cursor-pointer">
			<a href="<?php printf( 'tel:%s', get_option( 'theme_telephone_1' ) ) ?>"
			   class="block p-2 <?php echo $is_dark ? 'text-white' : 'text-black' ?>">
				<?php Icon::print( 'Phone,-Call-1' ) ?>
			</a>
		</div>
		<!-- Main button -->
		<div
			 class="main-btn <?php echo $is_dark ? 'bg-black' : 'bg-white' ?> aspect-square size-14 rounded-full cursor-pointer">
			<div class="p-2 <?php echo $is_dark ? 'text-white' : 'text-black' ?>">
				<?php Icon::print( 'Settings,-Switches,-Square' ) ?>
			</div>
		</div>
	</div>
</div>


<?php get_footer( null, [ 'render_template' => false ] ) ?>