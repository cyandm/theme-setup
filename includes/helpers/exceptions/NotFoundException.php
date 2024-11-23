<?php

namespace Cyan\Theme\Helpers\Exceptions;

class NotFoundException extends \Exception {

	protected $message;
	public function __construct( $message ) {
		parent::__construct();

		$this->message = $message;
	}
}