<?php

use Cyan\Theme\Helpers\Icon;

$Projects_title = get_field( 'workflow_title' );
$color_theme = $args['color_theme'] ?? '';

$workflow_sections = [];

for ( $i = 1; $i <= 5; $i++ ) {
	if ( $image = get_field( "image_workflow_$i" ) === false ) {
		continue;
	}
	;

	array_push(
		$workflow_sections,
		[ 
			'image' => get_field( "image_workflow_$i" ),
			'text_title' => get_field( "title_section_$i" ),
			'text_description' => get_field( "description_section_$i" ),
		]

	);
}
?>
<section class="container">
	<!-- عنوان -->
	<div class="md:text-4xl text-2xl font-bold md:mr-8"><?php echo $Projects_title ?></div>

	<!-- سوئیپر برای دسکتاپ -->
	<div>
		<swiper-container slides-per-view="1"
						  space-between="5"
						  autoplay="false"
						  effect="fade"
						  fade-effect="{ 'crossFade': true }"
						  pagination="false"
						  navigation="true"
						  navigation-next-el=".swiper-button-next"
						  navigation-prev-el=".swiper-button-prev"
						  class="hidden md:flex mt-10 max-w-full mx-auto flex-row justify-center">

			<?php
			$index = 1;
			foreach ( $workflow_sections as $workflow_section ) : ?>
				<swiper-slide>
					<div class="bg-gray-950 text-white p-5 rounded-[32px] grid gap-3 grid-cols-3">

						<div class="flex flex-col gap-4 w-full col-span-2">

							<div class="md:text-2xl text-lg font-bold flex gap-2">
								<span class="text-4xl text-black"
									  style="<?php printf( 'text-shadow: 0 0 5px %s, 0 0 10px %s;', $color_theme, $color_theme ) ?>"><?php echo $index; ?>
								</span>
								<?php echo $workflow_section['text_title']; ?>
							</div>

							<div class="prose max-w-full text-[#E0E0E0] text-[16px]">
								<?php echo $workflow_section['text_description']; ?>
							</div>

						</div>

						<div class="h-[428px] flex">
							<?php echo wp_get_attachment_image( $workflow_section['image'], 'full', false, [ 'class' => 'w-full min-w-full h-auto object-cover rounded-md' ] ); ?>
						</div>

					</div>
				</swiper-slide>
				<?php
				$index++;
			endforeach; ?>

		</swiper-container>

		<!-- دکمه‌های "بعدی" و "قبلی" برای دسکتاپ -->
		<div class="flex justify-center z-40 gap-2">
			<button class="hidden md:flex border px-5 py-2 rounded-[40px] gap-1 swiper-button-next disabled:opacity-45">
				<span class="size-6">
					<?php Icon::print( 'Arrow-22' ) ?>
				</span>
				<?php echo "بعدی"; ?>
			</button>
			<button
					class="hidden md:flex border px-5 py-2 rounded-[40px] gap-1 swiper-button-prev  disabled:opacity-45">
				<?php echo "قبلی"; ?>
				<span class="size-6">
					<?php Icon::print( 'Arrow-6' ) ?>
				</span>
			</button>
		</div>
	</div>


	<!-- نمایش ساده برای موبایل -->
	<div class="flex flex-col justify-center items-center gap-5 md:hidden mt-10">
		<?php $index = 1; ?>
		<?php foreach ( $workflow_sections as $workflow_section ) : ?>

			<div class="text-white rounded-[32px] flex flex-col gap-3 prose">

				<div class="text-lg font-bold flex gap-2 items-center">

					<span class="text-4xl text-black"
						  style="<?php printf( 'text-shadow: 0 0 5px %s, 0 0 10px %s;', $color_theme, $color_theme ) ?>"><?php echo $index; ?>
					</span>

					<?php echo $workflow_section['text_title'] ?>

				</div>

				<div class="w-full">
					<?php echo wp_get_attachment_image( $workflow_section['image'], 'full', false, [ 'class' => 'w-full h-auto object-cover rounded-md' ] ); ?>
				</div>
				<div class="flex flex-col gap-4 w-full">
					<div><?php echo $workflow_section['text_description'] ?></div>
				</div>
			</div>

			<?php
			$index++;
		endforeach;
		?>
	</div>

</section>