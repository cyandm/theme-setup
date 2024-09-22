<?php

if ( ! class_exists( 'cyn_customize' ) ) {
	class cyn_customize {
		function __construct() {
			add_action( 'customize_register', [ $this, 'cyn_basic_settings' ] );
		}

		public function cyn_basic_settings( $wp_customize ) {

			$this->cyn_register_panel_header( $wp_customize );


		}

		/**
		 * Summary of cyn_add_control
		 * @param mixed $wp_customize
		 * @param string $section name of section that this control related to
		 * @param string $type 'text' | 'textarea' | 'tel' | 'image' | 'file'
		 * @param string $id name that saved on wp_option table on database
		 * @param string $label 
		 * @param string $description
		 * @return void
		 */
		private function cyn_add_control( $wp_customize, $section, $type, $id, $label, $description = '' ) {
			$wp_customize->add_setting(
				$id,
				[ 'type' => 'option' ]
			);


			if ( $type == "file" ) {
				$wp_customize->add_control(
					new WP_Customize_Upload_Control(
						$wp_customize,
						$id,
						[ 
							'label' => $label,
							'section' => $section,
							'settings' => $id,
							'description' => $description,
						]
					)
				);
			}

			if ( $type != 'file' ) {
				$wp_customize->add_control(
					$id,
					[ 
						'label' => $label,
						'section' => $section,
						'settings' => $id,
						'type' => $type,
						'description' => $description,
					]
				);
			}
		}

		private function cyn_register_panel_header( $wp_customize ) {

			$wp_customize->add_panel(
				'header',
				[ 
					'title' => 'Header',
					'priority' => 1
				]
			);


			$wp_customize->add_section(
				'top_header',
				[ 
					'title' => 'Top header',
					'priority' => 1,
					'panel' => 'header'
				]
			);

			//left corner
			$this->cyn_add_control( $wp_customize, 'top_header', 'text', 'find_us_url', 'Find us URL' );
			$this->cyn_add_control( $wp_customize, 'top_header', 'text', 'close_time', 'Close time' );

			//right corner
			$this->cyn_add_control( $wp_customize, 'top_header', 'text', 'faq_url', 'FAQ URL' );
			$this->cyn_add_control( $wp_customize, 'top_header', 'text', 'track_order_url', 'Track order URL' );

		}


	}
}
