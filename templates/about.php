<?php

/**
 * Template Name: About
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

get_header();

/** Represent hero section */
Templates::getPage('about/hero');

Templates::getPage('about/aim');

Templates::getPage('about/meet_time');

Templates::getPage('about/staff');

Templates::getPage('about/like_family');


get_footer();
