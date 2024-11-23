<?php
/**
 * Header for wordpress theme
 * its must include only head and body tags
 * header templates located in /partials/header/
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$render_template = $args['render_template'] ?? true;
?>
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport"
			  content="width=device-width, initial-scale=1.0">
		<?php wp_head(); ?>
	</head>

	<body>
		<?php wp_body_open(); ?>

		<?php if ( $render_template ) : ?>
			<header>
				<div class="hidden lg:block">
					<?php Templates::getPart( 'desktop-header' ); ?>
				</div>
				<div class="lg:hidden">
					<?php Templates::getPart( 'mobile-header' ); ?>
				</div>
			</header>
		<?php endif; ?>