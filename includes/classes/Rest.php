<?php

/**
 * Rest API
 * this class is used to register rest routes and handle requests
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class Rest
{

	protected static $namespace = 'cyn/v1';

	public static function init()
	{
		add_action('rest_api_init', [__CLASS__, 'registerRoutes']);
	}

	public static function registerRoutes()
	{
		self::makeRoute('/test', 'GET', [__CLASS__, 'test']);
		self::makeRoute('/postLike', 'POST', [__CLASS__, 'postLike']);
	}

	public static function test()
	{
		return 'test';
	}

	public static function postLike()
	{
		$guest_user_id = sanitize_text_field($_POST['guest_user_id']);

		if (!$guest_user_id || strlen($guest_user_id) != 6) {
			wp_send_json_error(['message' => 'Invalid guest ID']);
		}

		$post_id = intval($_POST['post_id']);

		if (!get_post($post_id)) {
			wp_send_json_error(['message' => 'Invalid post ID']);
		}

		$liked_users = get_post_meta($post_id, 'liked_users', true) ?: [];

		if (in_array($guest_user_id, $liked_users)) {
			$liked_users = array_diff($liked_users, [$guest_user_id]);
			update_post_meta($post_id, 'liked_users', $liked_users);
			update_post_meta($post_id, 'like_count', count($liked_users));
			wp_send_json_success(['liked' => false, 'like_count' => count($liked_users)]);
		} else {
			$liked_users[] = $guest_user_id;
			update_post_meta($post_id, 'liked_users', $liked_users);
			update_post_meta($post_id, 'like_count', count($liked_users));
			wp_send_json_success(['liked' => true, 'like_count' => count($liked_users)]);
		}
	}


	/**
	 * make route
	 * @param string $route route path
	 * @param string $methods GET, POST, PUT, DELETE, etc.
	 * @param callable $callback callback function
	 * @param callable $permission_callback permission callback function
	 * @return void
	 */
	private static function makeRoute($route, $methods, $callback, $permission_callback = '__return_true')
	{
		register_rest_route(self::$namespace, $route, [
			'methods' => $methods,
			'callback' => $callback,
			'permission_callback' => $permission_callback
		]);
	}
}
