<?php
/**
 * Cyan Theme Functions
 * this file is used to initialize the theme
 * @package CyanTheme
 */

//Constants
define( 'THEME_DIR', get_template_directory() );
define( 'THEME_URI', get_template_directory_uri() );
define( 'THEME_VERSION', '0.0.0' );
define( 'ENVIRONMENT', 'development' ); //development, production
define( 'THEME_SLUG', 'cyn-theme' );
define( 'THEME_NAME', 'Cyan Theme' );

define( 'THEME_ASSETS_DIR', THEME_DIR . '/assets' );
define( 'THEME_ASSETS_URI', THEME_URI . '/assets' );

define( 'THEME_IMAGES_DIR', THEME_DIR . '/assets/images' );
define( 'THEME_IMAGES_URI', THEME_URI . '/assets/images' );

include_once THEME_DIR . '/vendor/autoload.php';

//Init theme
Cyan\Theme\Classes\ThemeInit::init();

//Third party plugins
Cyan\Theme\Classes\ThirdParty::init();

//Customize
Cyan\Theme\Classes\Customize::init();

//Custom code
Cyan\Theme\Classes\CustomCode::init();

//Register
Cyan\Theme\Classes\Register::init();

//Rest
Cyan\Theme\Classes\Rest::init();
