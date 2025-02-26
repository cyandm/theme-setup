<?php

/**
 * Template Name: Blog
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;


get_header();

Templates::getArchive('posts/hero');
Templates::getArchive('posts/new-articles');
Templates::getArchive('posts/posts');

get_footer();
