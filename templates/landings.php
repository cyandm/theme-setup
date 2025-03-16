<?php
/* Template Name: landings */

use Cyan\Theme\Helpers\Templates;

$color = get_field( 'color' );

get_header();


Templates::getPage( 'landings/hero' );

Templates::getPage( 'landings/workflow', [ 'color_theme' => $color ] );

Templates::getPage( 'landings/Projects' );

Templates::getPage( 'landings/faqs', [ 'color_theme' => $color ] );

Templates::getPage( 'landings/contactSection' );


get_footer();
