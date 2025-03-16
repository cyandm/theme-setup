<?php
$image_hero_contacts = get_field( 'image_hero_contacts' );
$title_social = get_field( 'title_social' );
$title_number = get_field( 'title_number' );
$title_address = get_field( 'title_address' );




?>

<div class="container flex flex-col md:flex-row justify-center gap-4 md:gap-36 mx-auto">
	<div class="md:w-1/2"
		 data-element="circle-section">
		<?php echo wp_get_attachment_image( $image_hero_contacts, 'full', false ); ?>
	</div>
	<div class="flex flex-col gap-6 rounded-[32px] border border-white/15 justify-center md:w-1/2 p-5">

		<div class="flex flex-col gap-4">
			<div class="md:text-2xl text-xl font-bold"><?php echo $title_social ?></div>
			<div class="flex flex-row gap-3">
				<?php for ( $i = 0; $i < 6; $i++ ) :
					if ( $link = get_option( "theme_social_link_$i" ) ) :
						?>
						<a href="<?php echo $link ?>">
							<img src="<?php echo get_option( "theme_social_image_$i" ) ?>"
								 alt="">
						</a>
					<?php endif; endfor; ?>
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<div class="md:text-2xl text-xl font-bold"><?php echo $title_number ?></div>
			<div class="flex flex-col gap-1">
				<div><?php echo get_option( 'title_number' ) ?></div>
				<div class="grid gap-1">
					<?php for ( $i = 0; $i < 10; $i++ ) :
						$tel = get_option( "theme_telephone_$i" );
						?>
						<a class="text-cyan-400 hover:text-cyan-700 transition-colors"
						   href="<?= 'tel:' . $tel ?>"><?= $tel ?></a>
					<?php endfor; ?>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-4">

			<div class="md:text-2xl text-xl font-bold"><?php echo $title_address ?></div>

			<div>
				<?php echo get_option( 'theme_address' ) ?>
			</div>

			<div class="overflow-hidden rounded-md [&_iframe]:w-full">
				<?php echo get_option( 'theme_address_html' ) ?>
			</div>

		</div>
	</div>
</div>