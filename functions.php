<?php

/****************************** Required Files */
//globals
require_once( __DIR__ . '/inc/cyn-global.php' );

//classes
require_once( CYN_THEME_DIR . '/inc/classes/cyn-theme-init.php' );
require_once( CYN_THEME_DIR . '/inc/classes/cyn-customize.php' );
require_once( CYN_THEME_DIR . '/inc/classes/cyn-register.php' );

//functions
require_once( CYN_THEME_DIR . '/inc/functions/cyn-general.php' );
require_once( CYN_THEME_DIR . '/inc/functions/cyn-menu.php' );


//acf
include_once( CYN_ACF_PATH . 'acf.php' );
require_once( CYN_THEME_DIR . '/inc/functions/cyn-acf-fields.php' );
require_once( CYN_THEME_DIR . '/inc/functions/cyn-acf.php' );

//instance classes
new cyn_theme_init( false, '0.0.0' );
new cyn_register();
new cyn_customize();
