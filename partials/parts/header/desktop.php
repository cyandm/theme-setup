<?php

/**
 * Desktop Header
 * @package CyanThemeSetup
 */


use Cyan\Theme\Helpers\Templates;


?>

<div id="desktop-header">
	<div class="container">
		<div class="flex justify-between items-center py-6">
			<?php Templates::getPart('header/menu-desktop') ?>

			<div class="flex items-center gap-3">
				<?php Templates::getComponent('btn-consultation'); ?>

				<?php Templates::getComponent('btn-search'); ?>
			</div>
		</div>
	</div>
</div>