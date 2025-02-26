<?php
/**
 * Templates helper
 * for every folder on partial you must create a function
 * @package CyanTheme
 */

namespace Cyan\Theme\Helpers;

class Templates
{

	private static function checkPath($path)
	{
		$template_path = locate_template($path . '.php');

		if ($template_path === '') {
			wp_die($path . ' is not a valid path');
		}
	}

	public static function getPart($partial, $args = [])
	{
		$path = 'partials/parts/' . $partial;

		self::checkPath($path);

		get_template_part($path, null, $args);
	}

	public static function getCard($partial, $args = [])
	{


		$path = 'partials/cards/' . $partial;

		self::checkPath($path);

		get_template_part($path, null, $args);
	}

	public static function getPage($partial, $args = [])
	{
		$path = 'partials/pages/' . $partial;

		self::checkPath($path);

		get_template_part($path, null, $args);
	}

	public static function getComponent($partial, $args = [])
	{
		$path = 'partials/components/' . $partial;

		self::checkPath($path);

		get_template_part($path, null, $args);
	}

	public static function getArchive($partial, $args = [])
	{
		$path = 'partials/archive/' . $partial;

		self::checkPath($path);

		get_template_part($path, null, $args);

	}
}
