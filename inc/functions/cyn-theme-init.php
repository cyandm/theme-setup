<?php
add_action('wp_enqueue_scripts', 'cyn_enqueue_files', 10, 2);
add_action('init', 'cyn_theme_init');
add_action('after_setup_theme', 'cyn_theme_setup');
add_action('admin_enqueue_scripts', 'cyn_admin_files');
add_action('wp_logout', 'cyn_logout_user');

add_filter('wp_check_filetype_and_ext', 'cyn_allow_svg', 10, 4);
add_filter('upload_mimes', 'cyn_mime_types');



function cyn_enqueue_files($build = false, $ver = '1.0.0')
{

    $css_path = $build ? '/assets/css/final.css' : '/assets/css/compiled.css';
    $js_path = $build ? '/assets/js/dist/scripts.bundle.min.js' : '/assets/js/dist/scripts.bundle.js';

    wp_enqueue_style('cyn-theme', get_stylesheet_directory_uri() . $css_path, [], $ver);
    wp_enqueue_style('cyn-style', get_stylesheet_directory_uri());
    wp_dequeue_style('wp-block-library');

    wp_enqueue_script('cyn-theme', get_stylesheet_directory_uri() . $js_path, [], $ver, true);
    wp_dequeue_script('global-styles');
}


function cyn_theme_init()
{
    add_filter('use_block_editor_for_post', '__return_false');
    add_filter('login_errors', function () {
        return null;
    });
    cyn_remove_unnecessary();
}

function cyn_theme_setup()
{
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('automatic-feed-links');

    register_nav_menus([
        'header' => 'Header',
        'footer' => 'Footer'
    ]);
}

function cyn_admin_files()
{
    wp_enqueue_style('cyn-admin', get_stylesheet_directory_uri() . '/assets/css/admin.css');
    wp_enqueue_script('cyn-admin', get_stylesheet_directory_uri() . '/assets/js/admin.js');
}

function cyn_logout_user()
{
    wp_redirect(home_url());
    exit();
}

function cyn_allow_svg($data, $file, $filename, $mimes)
{
    $filetype = wp_check_filetype($filename, $mimes);

    return [
        'ext' => $filetype['ext'],
        'type' => $filetype['type'],
        'proper_filename' => $data['proper_filename']
    ];
}

function cyn_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

function cyn_remove_unnecessary()
{
    // REMOVE WP EMOJI
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');

    remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
    remove_action('wp_enqueue_scripts', 'wp_enqueue_classic_theme_styles');
    remove_action('wp_footer', 'wp_enqueue_global_styles', 1);
}
