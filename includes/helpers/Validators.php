<?php

namespace Cyan\Theme\Helpers;

use Cyan\Theme\Helpers\Exceptions\NotFoundException;

class Validators {

	public static function postType( $post_type ) {
		switch ( $post_type ) {
			case 'post':
			case 'page':
				return $post_type;
			default:
				throw new NotFoundException( 'Post type not found' );
		}
	}

	public static function taxonomy( $taxonomy ) {
		switch ( $taxonomy ) {
			case 'category':
			case 'post_tag':
				return $taxonomy;
			default:
				throw new NotFoundException( 'Taxonomy not found' );
		}
	}

	public static function menu( $menu ) {
		switch ( $menu ) {
			case 'header-menu':
			case 'footer-menu':
				return $menu;
			default:
				throw new NotFoundException( 'Menu not found' );
		}
	}

	public static function page( $page ) {
		if ( get_page_by_path( $page ) ) {
			return $page;
		}

		throw new NotFoundException( 'Page not found' );
	}

	public static function term( $term ) {
		if ( get_term_by( 'slug', $term, 'category' ) ) {
			return $term;
		}

		throw new NotFoundException( 'Term not found' );
	}

}
