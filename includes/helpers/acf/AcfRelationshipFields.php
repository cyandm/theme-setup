<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfRelationshipFields extends AcfField {

	/**
	 * Add a link field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'return_format' => 'array',
	 *		'width' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addLink( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'link', $name, $label, [ 
			'return_format' => $additionalAttributes['return_format'] ?? 'array',
			'width' => $additionalAttributes['width'] ?? '',
		], $id );
	}

	/**
	 * Add a post object field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'post_type' => '',
	 *		'label' => '',
	 *		'name' => '',
	 *		'taxonomy' => '',
	 *		'allow_null' => 0,
	 *		'multiple' => 0,
	 *		'return_format' => 'id',
	 *		'width' => '',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addPostObject( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'post_object', $name, $label, [ 
			'post_type' => $additionalAttributes['post_type'] ?? '',
			'label' => $label,
			'name' => $name,
			'taxonomy' => $additionalAttributes['taxonomy'] ?? '',
			'allow_null' => $additionalAttributes['allow_null'] ?? 0,
			'multiple' => $additionalAttributes['multiple'] ?? 0,
			'return_format' => $additionalAttributes['return_format'] ?? 'id',
			'width' => $additionalAttributes['width'] ?? '',
		], $id );
	}

	/**
	 * Add a page link field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'width' => '',
	 *		'post_type' => '',
	 *		'post_status' => '',
	 *		'allow_null' => 0,
	 *		'multiple' => 0,
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addPageLink( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'page_link', $name, $label, [ 
			'width' => $additionalAttributes['width'] ?? '',
			'post_type' => $additionalAttributes['post_type'] ?? '',
			'post_status' => $additionalAttributes['post_status'] ?? '',
			'allow_null' => $additionalAttributes['allow_null'] ?? 0,
			'multiple' => $additionalAttributes['multiple'] ?? 0,
		], $id );
	}

	/**
	 * Add a taxonomy field
	 * @param string $name The name of the field
	 * @param string $label The label of the field
	 * @param array $additionalAttributes Additional attributes for the field
	 * [
	 *		'taxonomy' => '',
	 *		'width' => '',
	 *		'create_terms' => 0,
	 *		'save_terms' => 0,
	 *		'load_terms' => 0,
	 *		'return_format' => 'id',
	 * ]
	 * @param string $id The ID of the field
	 * @return void
	 */
	public function addTaxonomy( $name, $label, $additionalAttributes = [], $id = '' ) {
		parent::addField( 'taxonomy', $name, $label, [ 
			'taxonomy' => $additionalAttributes['taxonomy'] ?? '',
			'width' => $additionalAttributes['width'] ?? '',
			'create_terms' => $additionalAttributes['create_terms'] ?? 0,
			'save_terms' => $additionalAttributes['save_terms'] ?? 0,
			'load_terms' => $additionalAttributes['load_terms'] ?? 0,
			'return_format' => $additionalAttributes['return_format'] ?? 'id',
		], $id );
	}
}

