<?php

namespace Cyan\Theme\Helpers\ACF;

class AcfGroup extends AcfField {

	public $location;

	public $basicFields;
	public $advanceFields;
	public $contentFields;
	public $choiceFields;
	public $layoutFields;
	public $relationshipFields;

	public function __construct() {
		$this->location = [];

		$this->basicFields = new AcfBasicFields();
		$this->advanceFields = new AcfAdvanceFields();
		$this->contentFields = new AcfContentFields();
		$this->choiceFields = new AcfChoiceFields();
		$this->layoutFields = new AcfLayoutFields();
		$this->relationshipFields = new AcfRelationshipFields();
	}

	public function register( $label ) {

		acf_add_local_field_group(
			[ 
				'key' => 'acf_group_' . $label,
				'title' => $label,
				'fields' => parent::$fields,
				'location' => $this->location,
				'menu_order' => 0,
				'position' => 'normal',
				'style' => 'default',
				'label_placement' => 'top',
				'instruction_placement' => 'label',
				'hide_on_screen' => [ '' ],
				'active' => true,
				'description' => '',
				'show_in_rest' => 0,
			]
		);
	}


	//LOCATION
	public function setLocation( $param, $operator, $value ) {
		array_push( $this->location, [ [ 
			'param' => $param,
			'operator' => $operator,
			'value' => $value,
		] ] );
	}

	public function setMultipleLocations( $conditions, $logic = 'and' ) {
		$groupedConditions = [];

		foreach ( $conditions as $condition ) {
			$groupedConditions[] = [ 
				'param' => $condition['param'],
				'operator' => $condition['operator'],
				'value' => $condition['value'],
			];
		}

		if ( $logic === 'or' ) {
			$this->location[] = $groupedConditions;
			return;
		}

		foreach ( $groupedConditions as $condition ) {
			$this->location[] = [ $condition ];
		}
	}
}