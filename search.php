<?php

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;


get_header();

?>

<?php

defined( 'ABSPATH' ) || exit;

global $wp_query;

$search_type = empty( $_GET['search-type'] ) ? 'all' : $_GET['search-type'];

?>

<div class="container">

	<div id="searchPostType"
		 class="bg-[#090C17] flex flex-row justify-between items-center p-5 rounded-3xl">

		<form id="search-form"
			  class="flex justify-between items-center max-lg:flex-col max-lg:gap-3">

			<div class="max-lg:border-0 max-lg:w-full">
				<div class="flex items-center justify-start gap-1 py-1 px-3  border border-[#E0E0E0] rounded-full">

					<div class="size-9 text-[#E0E0E0]">
						<?php echo Icon::get( 'Search' ); ?>
					</div>

					<div>
						<input type="text"
							   id="search"
							   name="s"
							   value="<?php the_search_query() ?>"
							   class="bg-transparent text-right text-sm block w-full border-0 focus:ring-0"
							   placeholder="جست و جو">
					</div>
				</div>
			</div>
		</form>

		<div class="flex justify-center items-center py-3 text-[#767676] text-caption">
			<?php if ( ! empty( $_GET['s'] ) ) : ?>
				<span id='postsCount'>

					<?php echo $wp_query->found_posts ?>
				</span>
				<span>
					<?php _e( 'نتیجه', 'cyn-dm' ) ?>
				</span>
			<?php endif; ?>
		</div>
	</div>


	<div class="p-6 ">

		<?php if ( ! empty( $_GET['s'] ) ) : ?>

			<?php if ( have_posts() ) : ?>

				<div id="searchPostsWrapper "
					 class="space-y-4 py-4">

					<div>
						<?php while ( have_posts() ) : ?>

							<?php the_post() ?>

							<div
								 class="relative p-[2px] rounded-[42px] hover:bg-gradient-to-r hover:from-[#1DBACF] hover:to-[#0D8BFF] transition-all duration-300 shadow-[0px_4px_24px_0px_#050507] backdrop-blur-[34px]">

								<div class="bg-[#090C17] rounded-[40px] h-full w-full">

									<?php Templates::getCard( 'search' ) ?>

								</div>

							</div>

						<?php endwhile; ?>

					</div>

				</div>

			<?php else : ?>
				<div class="w-full flex flex-col justify-center items-center">
					<p class="text-2xl">متاسفانه نتیجه ای یافت نشد</p>

					<img style="max-width: min(600px , 90vw);"
						 src="<?php echo get_option( 'search_not_found_image' ) ?>"
						 alt="">

				</div>

			<?php endif; ?>

		<?php endif; ?>
	</div>


	<?php get_footer() ?>