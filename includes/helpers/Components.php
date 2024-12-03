<?php

namespace Cyan\Theme\Helpers;

class Components {

	public static function getMenuByLocation( $location ) {
		// wordpress does not group child menu items with parent menu items
		$menuLocations = get_nav_menu_locations();
		$navbar_items = wp_get_nav_menu_items( $menuLocations[ $location ] );
		$child_items = [];

		// pull all child menu items into separate object
		foreach ( $navbar_items as $key => $item ) {
			if ( $item->menu_item_parent ) {
				array_push( $child_items, $item );
				unset( $navbar_items[ $key ] );
			}
		}

		// push child items into their parent item in the original object
		foreach ( $navbar_items as $item ) {
			foreach ( $child_items as $key => $child ) {
				if ( $child->menu_item_parent == $item->ID ) {
					if ( ! $item->child_items ) {
						$item->child_items = [];
					}

					array_push( $item->child_items, $child );
					unset( $child_items[ $key ] );
				}
			}
		}

		// return navbar object where child items are grouped with parents
		return $navbar_items;
	}

	public static function getIcon( $icon_id ) {
		$icon_id = str_replace( ' ', '-', $icon_id );
		
		$json = file_get_contents( THEME_DIR . '/assets/icon/icons.json' );
		$icons = json_decode( $json, true );
		$icons = $icons['icons'];

		foreach ( $icons as $icon ) {
			if ( $icon['name'] == $icon_id ) {
				return $icon['content'];
			}
		}
	}


}
