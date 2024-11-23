<?php

/**
 * Register
 * this class is used to register post type, taxonomy, term and page in theme
 * you must be added to validators after register menus, post type, taxonomy, term and page
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class Register {
	public static function init() {
		add_action( 'init', [ __CLASS__, 'registerPostType' ] );
		add_action( 'init', [ __CLASS__, 'registerTaxonomy' ] );
		add_action( 'init', [ __CLASS__, 'registerTerm' ] );
		add_action( 'init', [ __CLASS__, 'registerPage' ] );

		add_action( 'after_setup_theme', [ __CLASS__, 'registerMenus' ] );
	}

	/**
	 * register menus
	 * after register menus, you can use get_nav_menu_locations() to get the menu locations
	 * @return void
	 */
	public static function registerMenus() {
		register_nav_menus( [ 
			'header-menu' => 'منوی بالا',
			'footer-menu' => 'منوی پایین'
		] );
	}

	public static function registerPostType() {
		// self::makePostType( 'post', 'پست', 'پست ها', 'dashicons-admin-post' );
	}

	public static function registerTaxonomy() {
		// self::makeTaxonomy( 'category', 'دسته بندی', 'دسته بندی ها', [ 'post' ], true );
	}

	/**
	 * register term
	 * this terms can not be removed
	 * @return void
	 */
	public static function registerTerm() {

		// wp_insert_term( 'دسته بندی جدید', 'category' );
	}

	/**
	 * register page
	 * this pages can not be removed
	 * @return void
	 */
	public static function registerPage() {
		// self::makePage( 'about-us', 'درباره ما' );
	}

	private static function makePostType( $slug, $singular_name, $plural_name, $icon, $supports = [ 'title', 'thumbnail' ], $search_include = true ) {
		$labels = [ 
			'name' => $singular_name,
			'singular_name' => $singular_name,
			'menu_name' => $plural_name,
			'name_admin_bar' => $singular_name,
			'add_new' => 'افزودن ' . $singular_name,
			'add_new_item' => 'افزودن ' . $singular_name . ' جدید',
			'new_item' => $singular_name . ' جدید',
			'edit_item' => 'ویرایش ' . $singular_name,
			'view_item' => 'دیدن ' . $singular_name,
			'all_items' => 'همه ' . $plural_name,
			'search_items' => 'جستجو ' . $singular_name,
			'not_found' => $singular_name . '‌ای پیدا نشد',
			'not_found_in_trash' => $singular_name . ' پیدا نشد'
		];

		$args = [ 
			'labels' => $labels,
			'public' => true,
			'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'rewrite' => [ 'slug' => $slug ],
			'exclude_from_search' => ! $search_include,
			'has_archive' => true,
			'hierarchical' => false,
			'menu_position' => null,
			'menu_icon' => $icon,
			'supports' => $supports,

		];

		register_post_type( $slug, $args );
	}

	private static function makeTaxonomy( $slug, $singular_name, $plural_name, $post_types, $hierarchical = false ) {
		$labels = [ 
			'name' => $plural_name,
			'menu_name' => $plural_name,
			'all_items' => 'همه ' . $plural_name,
			'add_new_item' => 'افزودن ' . $singular_name . ' جدید',
		];

		$args = [ 
			'labels' => $labels,
			'hierarchical' => $hierarchical,
			'show_ui' => true,
			'show_admin_column' => true,
			'rewrite' => [ 'slug' => $slug ],
			'query_var' => true,
			'show_in_rest' => true,
			'show_tagcloud' => true,
			'show_in_quick_edit' => true,
		];

		register_taxonomy( $slug, $post_types, $args );
	}

	private static function makePage( $slug, $title ) {
		if ( is_null( get_page_by_path( $slug ) ) ) {
			wp_insert_post( [ 
				'post_type' => 'page',
				'post_status' => 'publish',
				'post_title' => $title,
				'post_name' => $slug,
				'page_template' => 'templates/' . $slug . '.php'
			] );
		}
	}
}
