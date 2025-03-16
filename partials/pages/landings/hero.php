<?php

use Cyan\Theme\Helpers\Icon;


?>
<section class="container">
	<div class="max-md:hidden flex justify-center items-center">
		<?php echo wp_get_attachment_image( get_field( 'image_hero_desktop' ), 'full' ); ?>
	</div>

	<div class="md:hidden  flex justify-center items-center">
		<?php echo wp_get_attachment_image( get_field( 'image_hero_mobile' ), 'full' ); ?>
	</div>
</section>