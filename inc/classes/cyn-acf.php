<?php

if (!class_exists('cyn_acf')) {
	class cyn_acf
	{

		function __construct()
		{
			define('MY_ACF_PATH', get_stylesheet_directory() . '/inc/acf/');
			define('MY_ACF_URL', get_stylesheet_directory_uri() . '/inc/acf/');
			include_once(MY_ACF_PATH . 'acf.php');

			add_filter('acf/settings/url', function ($url) {
				return MY_ACF_URL;
			});
			add_filter('acf/settings/show_updates', '__return_false', 100);
			// add_filter('acf/settings/show_admin', '__return_false');

			$this->cyn_acf_actions();
		}

		public function cyn_acf_actions()
		{
		}
	}
}
