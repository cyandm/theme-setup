<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfAdvanceFields extends AcfField {

	/**
	 * Add a Google Map field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'width' => '',
	 *		'center_lat' => '',
	 *		'center_lng' => '',
	 *		'zoom' => '',
	 *		'height' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addGoogleMap( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'google_map', $name, $label, [ 
			'width' => $additionalAttributes['width'] ?? '',
			'center_lat' => $additionalAttributes['center_lat'] ?? '',
			'center_lng' => $additionalAttributes['center_lng'] ?? '',
			'zoom' => $additionalAttributes['zoom'] ?? '',
			'height' => $additionalAttributes['height'] ?? '',
		], $id );
	}

	/**
	 * Add a Date Picker field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'display_format' => 'd/m/Y',
	 *		'return_format' => 'Ymd',
	 *		'width' => '',
	 *		'first_day' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addDatePicker( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'date_picker', $name, $label, [ 
			'display_format' => $additionalAttributes['display_format'] ?? 'd/m/Y',
			'return_format' => $additionalAttributes['return_format'] ?? 'Ymd',
			'width' => $additionalAttributes['width'] ?? '',
			'first_day' => $additionalAttributes['first_day'] ?? 0,
		], $id );
	}

	/**
	 * Add a Date Time Picker field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'display_format' => 'd/m/Y',
	 *		'return_format' => 'Ymd',
	 *		'first_day' => 0,
	 *		'width' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addDateTimePicker( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'date_time_picker', $name, $label, [ 
			'display_format' => $additionalAttributes['display_format'] ?? 'd/m/Y',
			'return_format' => $additionalAttributes['return_format'] ?? 'Ymd',
			'first_day' => $additionalAttributes['first_day'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
		], $id );
	}

	/**
	 * Add a Time Picker field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'display_format' => 'g:i a',
	 *		'return_format' => 'H:i:s',
	 *		'width' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addTimePicker( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'time_picker', $name, $label, [ 
			'display_format' => $additionalAttributes['display_format'] ?? 'g:i a',
			'return_format' => $additionalAttributes['return_format'] ?? 'H:i:s',
			'width' => $additionalAttributes['width'] ?? '',
		], $id );
	}

	/**
	 * Add a Color Picker field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'return_format' => 'string',
	 *		'transparent' => 0,
	 *		'width' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addColorPicker( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'color_picker', $name, $label, [ 
			'return_format' => 'string',
			'transparent' => $additionalAttributes['transparent'] ?? 0,
			'width' => $additionalAttributes['width'] ?? '',
		], $id );
	}
}


