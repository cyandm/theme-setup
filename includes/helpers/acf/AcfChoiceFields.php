<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfChoiceFields extends AcfField {
	/**
	 * Add a select field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'choices' => '',
	 *		'width' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addSelect( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'select', $name, $label, [ 
			'choices' => $additionalAttributes['choices'] ?? '',
			'width' => $additionalAttributes['width'] ?? '',
		], $id );
	}

	/**
	 * Add a checkbox field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'choices' => '',
	 *		'width' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addCheckbox( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'checkbox', $name, $label, [ 
			'choices' => $additionalAttributes['choices'] ?? '',
			'width' => $additionalAttributes['width'] ?? '',
		], $id );
	}

	/**
	 * Add a radio field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'choices' => '',
	 *		'width' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addRadio( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'radio', $name, $label, [ 
			'choices' => $additionalAttributes['choices'] ?? '',
			'width' => $additionalAttributes['width'] ?? '',
		], $id );
	}

	/**
	 * Add a boolean field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'width' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addBoolean( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'true_false', $name, $label, [ 
			'width' => $additionalAttributes['width'] ?? '',
			'label' => $label,
		], $id );
	}
}
