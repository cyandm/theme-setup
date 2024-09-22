<?php $render_template = $args['render_template'] ?? true ?>

<!DOCTYPE html>
<html <?php language_attributes() ?>>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport"
			  content="width=device-width, initial-scale=1.0">
		<?php wp_head() ?>
	</head>

	<body <?php body_class() ?>>

		<div class="backdrop | fixed bg-black/25 inset-0 z-10 opacity-0 pointer-events-none"></div>

		<?php wp_body_open() ?>

		<?php get_template_part( '/assets/icons/icons' ) ?>

		<?php if ( $render_template ) : ?>
			<header class="relative z-10">
				<div class="desktop-header | hidden md:block">
					<?php cyn_get_part( '/header/top-header' ) ?>

					<?php cyn_get_part( '/header/bottom-header' ) ?>
				</div>

				<div class="mobile-header | block md:hidden">

				</div>
			</header>
		<?php endif; ?>