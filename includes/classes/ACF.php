<?php
/**
 * ACF Class
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Validators;
use Cyan\Theme\Helpers\ACF\AcfGroup;


class ACF {

	public static function init() {
		$isDev = ENVIRONMENT === 'development';
		$isDev ? null : add_filter( 'acf/settings/show_admin', '__return_false', 100 );

		if ( ! function_exists( 'acf_add_local_field_group' ) ) {
			return;
		}


		add_action( 'acf/include_fields', [ __CLASS__, 'registerAllACF' ] );

	}

	/**
	 * Register all ACF fields for the individual post types, taxonomies, page templates, and menu items
	 * @return void
	 */
	public static function registerAllACF() {
		//PostTypes
		self::forPosts();

		//Taxonomies

		//Page Templates

		//Menu Items

	}

	private static function forPosts() {

		//define helper
		$acfGroup = new AcfGroup();

		//add fields
		$acfGroup->basicFields->addText( 'title', 'Title', [ 
			'default_value' => 'Default Title',
			'aria-label' => 'Title',
			'width' => '50%',
			'required' => true
		] );

		//location
		$acfGroup->setLocation( 'post_type', '==', Validators::PostType( 'post' ) );

		// register group
		$acfGroup->register( 'Post' );
	}
}
