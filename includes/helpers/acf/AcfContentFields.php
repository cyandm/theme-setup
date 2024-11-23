<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfContentFields extends AcfField {

	/**
	 * Add an image field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addImage( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'image', $name, $label, [ 
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'return_format' => 'id',
		], $id );
	}

	/**
	 * Add a file field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'required' => 0,
	 *		'width' => '',
	 *		'return_format' => 'id',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addFile( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'file', $name, $label, [ 
			'required' => $additionalAttributes['required'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
			'return_format' => 'id',
		], $id );
	}

	/**
	 * Add a text editor field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'toolbar' => 'basic',
	 *		'media_upload' => 1,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addTextEditor( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'wysiwyg', $name, $label, [ 
			'toolbar' => $additionalAttributes['toolbar'] ?? 'basic',
			'media_upload' => $additionalAttributes['media_upload'] ?? 1,
		], $id );
	}
}

