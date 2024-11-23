<?php
/**
 * Third Party Plugins
 * if you want to add a new third party plugin, add it here
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class ThirdParty {

	public static function init() {
		self::acf();

	}

	private static function includePluginFunctions() {
		if ( ! function_exists( 'is_plugin_active' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
	}

	public static function acf() {

		self::includePluginFunctions();

		//check acf plugin activated
		if ( ! is_plugin_active( 'advanced-custom-fields/acf.php' ) ) {
			add_action( 'admin_notices', function () {
				echo '<div class="notice notice-error">';
				echo '<p>' . esc_html__( THEME_NAME . ': The ACF plugin is not active. Please install and activate the ACF plugin to enable additional features.', 'cyn-theme' ) . '</p>';
				echo '</div>';
			} );
			return;
		}

		ACF::init();
	}

}
