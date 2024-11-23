<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfLayoutFields extends AcfField {
	/**
	 * Add a Group field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'layout' => 'block',
	 *		'sub_fields' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addGroup( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'group', $name, $label, [ 
			'layout' => $additionalAttributes['layout'] ?? 'block',
			'sub_fields' => $additionalAttributes['sub_fields'] ?? '',
		], $id );
	}

	/**
	 * Add a Tab field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'placement' => 'top',
	 *		'endpoint' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addTab( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'tab', $name, $label, [ 
			'placement' => $additionalAttributes['placement'] ?? 'top',
			'endpoint' => $additionalAttributes['endpoint'] ?? 0,
		], $id );
	}

	/**
	 * Add an Accordion field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'open' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addAccordion( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'accordion', $name, $label, [ 
			'open' => $additionalAttributes['open'] ?? 0,
		], $id );
	}

	/**
	 * Add a Message field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'message' => '',
	 *		'new_lines' => 'wpautop',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addMessage( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'message', $name, $label, [ 
			'message' => $additionalAttributes['message'] ?? '',
			'new_lines' => $additionalAttributes['new_lines'] ?? 'wpautop',
		], $id );
	}
}


