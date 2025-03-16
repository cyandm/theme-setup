<?php

use Cyan\Theme\Helpers\Templates;

$feature_staff_Q = new WP_Query( [ 
	'post_type' => 'staff',
	'posts_per_page' => 8,
	'orderby' => 'date',
	'order' => 'DESC',
] );
?>

<section
		 class="container mx-auto lg:grid lg:grid-cols-4 lg:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col gap-4">

	<?php
	if ( $feature_staff_Q->have_posts() ) {
		while ( $feature_staff_Q->have_posts() ) {
			$feature_staff_Q->the_post();
			Templates::getCard( 'staffCard' );
		}
		wp_reset_postdata();
	} else {
		echo __( 'عضوی پیدا نشد!', 'cyn-dm' );
	}
	?>
</section>