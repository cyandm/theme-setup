<?php

use Cyan\Theme\Helpers\Icon;

?>

<a href="<?php printf( 'tel:%s', get_option( 'theme_telephone_1' ) ) ?>">
	<div class="flex justify-center items-center rounded-full text-black bg-cyan-500 size-10 p-1.5">
		<?php Icon::print( 'Phone, Call-11' ) ?>
	</div>
</a>