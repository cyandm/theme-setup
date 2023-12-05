<?php

$post_type = get_queried_object()->post_type;

if ( $post_type ) {
	get_template_part( 'templates/single/' . $post_type );
} else {
	echo 'not template found!';
}