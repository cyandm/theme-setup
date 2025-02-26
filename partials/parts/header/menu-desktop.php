<?php
use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Validators;

?>


<div class="flex items-center gap-6">
	<?php

	Templates::getComponent( 'logo' );

	Templates::getComponent(
		'menu-vertical',
		[ 'menu_location' => Validators::menu( 'header-menu' ) ] );
	?>

</div>