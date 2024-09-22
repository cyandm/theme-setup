<form method="get"
	  action="<?php echo get_site_url() ?>">
	<div class="bg-white py-2 px-2 rounded-full flex items-center gap-2">

		<!-- category drop down-->
		<div class="flex gap-1 items-center ml-3 pr-2 border-r border-gray-400 relative group py-2">

			<input type="text"
				   name="product_cat"
				   value="All Products"
				   id="searchCategorySelectedInput"
				   class="hidden">
			<span id="searchCategorySelected"
				  class="text-sm cursor-pointer">
				<?php echo ! empty( $_GET['product_cat'] ) ? $_GET['product_cat'] : __( 'All Products', 'fmd-store' ) ?>
			</span>
			<svg class="icon size-3 group-hover:rotate-180 transition-transform">
				<use href="#icon-chevron-down" />
			</svg>

			<div id="searchCategory"
				 class="absolute  bg-white top-9 -left-4 min-w-32 px-2 py-1 border rounded-lg flex flex-col divide-y [&_>_*]:p-2 text-sm  transition-all opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto pointer-events-none">

				<?php $items = [ 'all products', 'floor', 'moulding', 'doors' ] ?>

				<?php foreach ( $items as $index => $item ) : ?>
					<span class="cursor-pointer hover:text-orange-400 transition-colors capitalize">
						<?php echo $item ?>
					</span>
				<?php endforeach; ?>
			</div>


		</div>

		<!-- search input-->
		<div>
			<input type="text"
				   class="border-none focus:ring-0 autofill:bg-white"
				   name="s"
				   value="<?php the_search_query() ?>">
		</div>

		<!-- submit button-->
		<div>
			<button class="bg-orange-600 hover:bg-orange-700 text-white text-sm rounded-full capitalize flex items-center py-2 px-3 transition-colors"
					type="submit">
				<svg class="icon">
					<use href="#icon-search-loupe" />
				</svg>

				<span>
					<?php _e( 'search', 'fmd-store' ) ?>
				</span>
			</button>
		</div>
	</div>
</form>