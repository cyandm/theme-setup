<?php

function cyn_get_component( $name, $args = [] ) {
	get_template_part( '/partials/components/' . $name, null, $args );
}

function cyn_get_card( $name, $args = [] ) {
	get_template_part( '/partials/cards/' . $name, null, $args );
}

function cyn_get_page( $name, $args = [] ) {
	get_template_part( '/partials/page/' . $name, null, $args );
}

function cyn_get_part( $name, $args = [] ) {
	get_template_part( '/partials/parts/' . $name, null, $args );
}

