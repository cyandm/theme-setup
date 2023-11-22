<?php

if (!class_exists('cyn_customize')) {
    class cyn_customize
    {
        function __construct()
        {
            add_action('customize_register', [$this, 'basic_settings']);
        }

        public function basic_settings($wp_customize)
        {


            $wp_customize->add_section('basic_settings', [
                'title' => 'Site settings',
                'priority' => 1
            ]);

            //ADD Phone Numbers
            $wp_customize->add_setting(
                'cyn_phone_number_one',
                [
                    'type' => 'option'
                ]
            );

            $wp_customize->add_control(new WP_Customize_Upload_Control(
                $wp_customize,
                'cyn_phone_number_one',
                array(
                    'label' => 'phone number 1',
                    'section' => 'basic_settings',
                    'type' => 'tel',
                    'settings' => 'cyn_phone_number_one'
                )
            ));
        }
    }
}
