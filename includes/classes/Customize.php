<?php

/**
 * Customize
 * this class is used to register customize in theme
 * @package CyanTheme
 */

namespace Cyan\Theme\Classes;

class Customize
{

	private static $wpCustomize;

	public static function init()
	{
		add_action('customize_register', [__CLASS__, 'register']);
	}


	public static function register($wp_customize)
	{
		self::$wpCustomize = $wp_customize;
		self::registerPanelCustomCode();
		self::registerPanelBasicTheme();
		self::customizeImageUpload();
	}

	private static function addControl($section, $type, $id, $label, $description = '')
	{

		self::$wpCustomize->add_setting(
			$id,
			['type' => 'option']
		);


		if ($type == "file") {
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

		if ($type != 'file') {
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

	private static function registerPanelCustomCode()
	{
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


		for ($i = 1; $i <= 10; $i++) {
			self::addControl('head_section', 'textarea', "cyn_head_code_$i", "کد سفارشی $i");
		}

		self::$wpCustomize->add_section(
			'start_body_section',
			[
				'title' => 'ابتدای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ($i = 1; $i <= 10; $i++) {
			self::addControl('start_body_section', 'textarea', "cyn_start_body_code_$i", "کد سفارشی $i");
		}


		self::$wpCustomize->add_section(
			'end_body_section',
			[
				'title' => 'انتهای تگ body',
				'priority' => 1,
				'panel' => 'custom_code'
			]
		);

		for ($i = 1; $i <= 10; $i++) {
			self::addControl('end_body_section', 'textarea', "cyn_end_body_code_$i", "کد سفارشی $i");
		}
	}

	private static function registerPanelBasicTheme()
	{
		self::$wpCustomize->add_panel(
			'basic_theme',
			[
				'title' => 'تنظیمات پایه ای تم',
				'priority' => 1
			]
		);

		self::$wpCustomize->add_section(
			'telephones',
			[
				'title' => 'شماره تلفن ها',
				'priority' => 1,
				'panel' => 'basic_theme'
			]
		);

		for ($i = 1; $i <= 10; $i++) {
			self::addControl('telephones', 'number', "theme_telephone_$i", "شماره تلفن $i");
		}
	}

	private static function customizeImageUpload()
	{

		// اضافه کردن بخش جدید
		self::$wpCustomize->add_section('custom_image_section', array(
			'title' => __('تصویر دلخواه', 'mytheme'),
			'priority' => 30,
			'description' => __('آپلود عکس', 'mytheme'),
		));

		// ثبت تنظیمات برای آپلود تصویر
		self::$wpCustomize->add_setting('custom_featured_image', array(
			'default' => '',
			'transport' => 'refresh',
		));

		// کنترل تصویر آپلودی
		self::$wpCustomize->add_control(new \WP_Customize_Upload_Control(self::$wpCustomize, 'custom_featured_image_control', array(
			'label' => __('Upload Image', 'mytheme'),
			'section' => 'custom_image_section',
			'settings' => 'custom_featured_image',
		)));
	}
}
