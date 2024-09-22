<div class="bg-white">
	<div class="container flex justify-between items-center py-5">
		<!-- left section -->
		<div class="flex-1 flex space-x-2 divide-x-2">

			<a href="<?php echo get_option( 'find_us_url', '#' ) ?>"
			   class="capitalize flex items-center justify-center hover:text-stone-600 transition-colors text-stone-400 ">

				<svg class="icon size-6 ">
					<use href="#icon-Pin,-Location-1" />
				</svg>

				<span class="">
					<?php _e( 'find us', 'fmd-store' ) ?>
				</span>
			</a>

			<div class="capitalize pl-2 text-stone-400">
				<?php _e( 'open until', 'fmd-store' ) ?>
				<span class="text-orange-400 font-medium">
					<?php echo get_option( 'close_time', '9pm' ) ?>
				</span>
			</div>


		</div>

		<!-- middle section -->
		<div class="flex-1 justify-center flex">
			<?php the_custom_logo() ?>
		</div>

		<!-- right section -->
		<div class="flex-1 flex gap-2 items-center divide-x-2 [&_>_*]:pl-2 justify-end">
			<div>
				<a class="text-stone-400 hover:text-stone-600 transition-colors ml-0"
				   href="<?php echo get_option( 'faq_url', '#' ) ?>"><?php _e( 'FAQ', 'fmd-store' ) ?></a>
			</div>

			<div>
				<a class="text-stone-400 hover:text-stone-600 transition-colors"
				   href="<?php echo get_option( 'track_order_url', '#' ) ?>"><?php _e( 'Track Order', 'fmd-store' ) ?></a>
			</div>

			<div class="text-zinc-600 hover:text-orange-400 transition-colors">
				<a href="">
					<svg class="icon ">
						<use href="#icon-Shopping-bag,-Package,-Pack-1" />
					</svg>
				</a>
			</div>

			<div class="text-zinc-600 hover:text-orange-400 transition-colors">
				<a href="">
					<svg class="icon size-5">
						<use href="#icon-bookmark" />
					</svg>
				</a>
			</div>

			<div class=" capitalize  text-zinc-600 hover:text-orange-400 transition-colors">

				<a href=""
				   class="flex items-center gap-1">
					<svg class="icon ">
						<use href="#icon-User,-Profile" />
					</svg>

					<span>
						<?php echo is_user_logged_in() ? __( 'account', 'fmd-store' ) : __( 'sign in', 'fmd-store' ) ?>
					</span>
				</a>

			</div>
		</div>
	</div>
</div>