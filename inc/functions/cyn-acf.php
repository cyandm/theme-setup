<?php
add_action( 'acf/include_fields', 'cyn_register_acf' );

function cyn_register_acf() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}
	cyn_register_acf_mega_menu();
}

function cyn_register_acf_mega_menu() {
	$fields = [ 
		cyn_acf_add_boolean( 'is_mega_menu', 'is mega menu' ),
		cyn_acf_add_image( 'mega_menu_image', 'mega menu image' ),
	];
	$location = [ 
		[ 
			[ 
				'param' => 'nav_menu_item',
				'operator' => '==',
				'value' => 'all',
			],
		],
	];

	cyn_register_acf_group( 'Mega Menu Settings', $fields, $location );
}



