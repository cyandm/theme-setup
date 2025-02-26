<?php
/* Template Name: brand */

use Cyan\Theme\Helpers\Templates;


get_header();


//Templates::getPage('web_design/faqs');


Templates::getPage('web_design/faqs', [

    'color_theme' => '#23F144'
]);

get_footer();
