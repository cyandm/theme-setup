<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfField {

	public static $fields;

	public function __construct() {
		self::$fields = [];
	}

	protected function addField( $type, $name, $label, $additionalAttributes = [], $id = '' ) {
		$field = [ 
			'key' => 'acf_' . $type . '_' . $name . '_' . $id,
			'label' => $label,
			'name' => $name,
			'type' => $type,
			'instructions' => '',
			'required' => $additionalAttributes['required'] ?? 0,
			'conditional_logic' => 0,
			'wrapper' => [ 
				'width' => $additionalAttributes['width'] ?? '',
				'class' => '',
				'id' => '',
			],
		];

		// Merge additional attributes
		$field = array_merge( $field, $additionalAttributes );


		array_push( self::$fields, $field );


	}

}


