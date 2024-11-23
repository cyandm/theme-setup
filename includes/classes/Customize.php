<?php

/**
 * Customize
 * this class is used to register customize in theme
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class Customize {

	private static $wpCustomize;

	public static function init() {
		add_action( 'customize_register', [ __CLASS__, 'register' ] );
	}


	public static function register( $wp_customize ) {
		self::$wpCustomize = $wp_customize;
		self::registerPanelCustomCode();
	}

	private static function addControl( $section, $type, $id, $label, $description = '' ) {

		self::$wpCustomize->add_setting(
			$id,
			[ 'type' => 'option' ]
		);


		if ( $type == "file" ) {
			self::$wpCustomize->add_control(
				new \WP_Customize_Upload_Control(
					self::$wpCustomize,
					$id,
					[ 
						'label' => $label,
						'section' => $section,
						'settings' => $id,
						'description' => $description,
					]
				)
			);
		}

		if ( $type != 'file' ) {
			self::$wpCustomize->add_control(
				$id,
				[ 
					'label' => $label,
					'section' => $section,
					'settings' => $id,
					'type' => $type,
					'description' => $description,
				]
			);
		}
	}

	private static function registerPanelCustomCode() {
		self::$wpCustomize->add_panel(
			'custom_code',
			[ 
				'title' => 'تنظیمات کدهای سفارشی',
				'priority' => 1
			]
		);

		self::$wpCustomize->add_section(
			'head_section',
			[ 
				'title' => 'داخل تگ head',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);


		for ( $i = 1; $i <= 10; $i++ ) {
			self::addControl( 'head_section', 'textarea', "cyn_head_code_$i", "کد سفارشی $i" );
		}

		self::$wpCustomize->add_section(
			'start_body_section',
			[ 
				'title' => 'ابتدای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ( $i = 1; $i <= 10; $i++ ) {
			self::addControl( 'start_body_section', 'textarea', "cyn_start_body_code_$i", "کد سفارشی $i" );
		}


		self::$wpCustomize->add_section(
			'end_body_section',
			[ 
				'title' => 'انتهای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ( $i = 1; $i <= 10; $i++ ) {
			self::addControl( 'end_body_section', 'textarea', "cyn_end_body_code_$i", "کد سفارشی $i" );
		}
	}
}
