<?php
/**
 * Footer for wordpress theme
 * its must include only footer tag
 * footer templates located in /partials/footer/
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

$render_template = $args['render_template'] ?? true;
?>

<?php if ( $render_template ) : ?>
	<footer>
		<?php Templates::getPart( 'site-footer' ); ?>
	</footer>
<?php endif; ?>

<div id="wp-footer">
	<?php wp_footer(); ?>
</div>

</body>

</html>