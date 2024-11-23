<?php

/**
 * Custom code
 * this class is used to give custom code to the theme
 * its only responsible for give custom code, 
 * register custom code in customizer is in Customize class
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class CustomCode {
	public static function init() {
		add_action( 'wp_head', [ __CLASS__, 'headTag' ] );
		add_action( 'wp_body_open', [ __CLASS__, 'startBodyTag' ] );
		add_action( 'wp_footer', [ __CLASS__, 'endBodyTag' ] );

	}


	public static function headTag() {
		for ( $i = 1; $i <= 10; $i++ ) {
			echo get_option( "cyn_head_code_$i" );
		}
	}

	public static function startBodyTag() {
		for ( $i = 1; $i <= 10; $i++ ) {
			echo get_option( "cyn_start_body_code_$i" );
		}
	}
	public static function endBodyTag() {
		for ( $i = 1; $i <= 10; $i++ ) {
			echo get_option( "cyn_end_body_code_$i" );
		}
	}
}

