<?php
/**
 * Template Name: Homepage
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

get_header();

Templates::getPage( 'homepage/hero' );
Templates::getPage( 'homepage/project-home' );
Templates::getPage( 'homepage/comments' );
Templates::getPage( 'homepage/brand' );
Templates::getPage( 'homepage/services' );
Templates::getPage( 'homepage/team' );
Templates::getPage( 'homepage/blog-home' );
Templates::getPage( 'homepage/faq-home' );


get_footer();
