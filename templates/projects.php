<?php

/**
 * Template Name: Projects
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;

get_header();

/** Represent hero section */
Templates::getPage('projects/hero');


/** Represent search bar section */
// Templates::getPage('projects/searchbar');

Templates::getPage('projects/sample_projects');


get_footer();
