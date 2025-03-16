<?php

use Cyan\Theme\Helpers\Icon;
?>

<div class="swiper-slide text-white p-5 rounded-[32px] flex flex-row md:flex-col gap-3"
	 style="background-color: #0F121D !important;">

	<!-- تصویر -->
	<div>
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'full', [ 'class' => 'rounded-lg' ] ); ?>
		<?php endif; ?>
	</div>

	<!-- محتوا -->
	<div>
		<div class="font-bold"><?php the_title(); ?></div>
		<div class="flex flex-col md:flex-row justify-between">
			<div><?php _e( 'ویدیو معرفی', 'cyn-dm' ) ?></div>

			<!-- نمایش دسته‌بندی‌های 'working_team' -->
			<div class="flex gap-2">
				<?php
				// تغییر 'category' به 'working_team'
				$working_team = get_the_terms( get_the_ID(), 'working_team' ); // گرفتن دسته‌بندی‌های 'working_team'
				if ( $working_team && ! is_wp_error( $working_team ) ) :
					foreach ( $working_team as $team ) :

						$color = get_field( 'color-term', 'working_team_' . $team->term_id );
						echo '<span style="background-color:' . $color . '" class="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">' . esc_html( $team->name ) . '</span>';
					endforeach;
				endif;
				?>
			</div>
		</div>

		<!-- لینک فقط در حالت موبایل -->
		<a href="#"
		   class="text-blue-500 md:hidden mt-4 flex">
			<span class="size-6 group-hover:rotate-90 transition-transform">
				<?php Icon::print( 'Arrow-17' ) ?>
			</span><span>مشاهده همه</span></a>

		<button class="btn-primary w-full p-2 mt-4">
			<?php _e( 'مشاهده پروژه', 'cyn-dm' ) ?>
		</button>

	</div>

</div>