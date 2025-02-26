<?php
/**
 * Mobile Header
 * @package CyanThemeSetup
 */

use Cyan\Theme\Helpers\Templates;

?>

<div id="mobile-header">
	<div class="container">
		<div class="flex justify-between py-6">

			<?php Templates::getPart( 'header/menu-mobile' ) ?>


			<div class="size-10 flex justify-center items-center">
				<?php Templates::getComponent( 'logo' ) ?>
			</div>


			<?php Templates::getComponent( 'btn-call' ) ?>

		</div>
	</div>
</div>