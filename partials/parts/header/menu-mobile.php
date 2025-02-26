<?php

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

?>

<a href="#" modal-opener data-modal-name="mobileMenu" class="btn-icon size-10 p-1.5">
	<?php Icon::print('shapes-objects-1') ?>
</a>


<!-- margin top for logged in users -->
<div modal data-modal-name="mobileMenu" data-active="false"
	class="fixed bg-gray-900/45 backdrop-blur-lg inset-0 transition-transform duration-500  translate-x-full pointer-events-none data-[active='true']:translate-x-0 data-[active='true']:pointer-events-auto"
	style="margin-top: var(--wp-admin--admin-bar--height);">


	<div class="container py-6">

		<div class="flex justify-between items-center">
			<a href="#" modal-closer data-modal-name="mobileMenu" class="btn-icon size-10 p-2">
				<?php Icon::print('xmark') ?>
			</a>


			<?php Templates::getComponent('btn-search') ?>
		</div>


		<div class="my-6">
			<?php Templates::getComponent('btn-consultation') ?>
		</div>


		<div>
			<?php Templates::getComponent('menu-horizontal', ['menu_location' => 'mobile-menu']) ?>
		</div>
	</div>


</div>