<?php
/**
 * Rest API
 * this class is used to register rest routes and handle requests
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class Rest {

	protected static $namespace = 'cyn/v1';

	public static function init() {
		add_action( 'rest_api_init', [ __CLASS__, 'registerRoutes' ] );
	}

	public static function registerRoutes() {
		self::makeRoute( '/test', 'GET', [ __CLASS__, 'test' ] );
	}

	public static function test() {
		return 'test';
	}

	/**
	 * make route
	 * @param string $route route path
	 * @param string $methods GET, POST, PUT, DELETE, etc.
	 * @param callable $callback callback function
	 * @param callable $permission_callback permission callback function
	 * @return void
	 */
	private static function makeRoute( $route, $methods, $callback, $permission_callback = '__return_true' ) {
		register_rest_route( self::$namespace, $route, [ 
			'methods' => $methods,
			'callback' => $callback,
			'permission_callback' => $permission_callback
		] );
	}
}
