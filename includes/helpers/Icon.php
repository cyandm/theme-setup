<?php
/**
 * 
 */

namespace Cyan\Theme\Helpers;


class Icon {
	private static $icons;


	public static function get( $icon_id ) {
		$icon_id = str_replace( ' ', '-', $icon_id );

		if ( ! self::$icons ) {
			$json = file_get_contents( THEME_DIR . '/assets/icon/icons.json' );
			self::$icons = json_decode( $json, true );
			self::$icons = self::$icons['icons'];
		}

		foreach ( self::$icons as $icon ) {
			if ( $icon['name'] == $icon_id ) {
				return $icon['content'];
			}
		}
	}

	public static function print( $icon_id ) {
		echo self::get( $icon_id );
	}
}