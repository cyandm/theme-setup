<?php
use Cyan\Theme\Helpers\Icon;
?>

<form action="/" method="GET" value="<?php the_search_query() ?>">
	<a href="/?search-type=all&s=" data-modal="search">
		<div class="btn-icon size-9 p-1.5">
			<?php echo Icon::get('Search'); ?>
		</div>
	</a>
</form>