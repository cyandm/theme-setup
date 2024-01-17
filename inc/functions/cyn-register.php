<?php

add_action('init', 'cyn_post_type_register');
add_action('init',  'cyn_taxonomy_register');
add_action('init',  'cyn_term_register');
add_action('init',  'cyn_page_register');


function cyn_post_type_register()
{
}


function cyn_taxonomy_register()
{
}

//make_taxonomy('دسته‌بندی پروژه', 'project-type', ['project']);
function cyn_make_post_type($name, $slug, $icon, $menu = true)
{
    $labels = [
        'name' => $name,
        'singular_name' => $name,
        'menu_name' => $name . '‌' . 'ها',
        'name_admin_bar' => $name,
        'add_new' => 'افزودن ' . $name,
        'add_new_item' => 'افزودن ' . $name . ' جدید',
        'new_item' => $name . ' جدید',
        'edit_item' => 'ویرایش ' . $name,
        'view_item' => 'دیدن ' . $name,
        'all_items' => 'همه ' . $name . ' ها',
        'search_items' => 'جستجو ' . $name,
        'not_found' => $name . '‌ای پیدا نشد',
        'not_found_in_trash' => $name . ' پیدا نشد'
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => $menu,
        'query_var' => true,
        'rewrite' => ['slug' => $slug],
        'exclude_from_search' => false,
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => null,
        'menu_icon' => $icon,
        'supports' => ['title', 'thumbnail'],

    ];

    register_post_type($slug, $args);
}

//make_post_type( 'پروژه', 'project', 'dashicons-layout' );
function cyn_make_taxonomy($name, $slug, $post_types, $is_hierarchical = true)
{
    $labels = [
        'name' => $name . '‌ها',
        'singular_name' => $name,
        'search_items' => 'ها' . $name . 'جستجو در',
        'all_items' => 'همه ' . $name . '‌ ها',
        'edit_item' => ' ویرایش ' . $name,
        'update_item' => 'به روز رسانی' . $name,
        'add_new_item' => 'افزودن ' . $name . ' جدید',
        'new_item_name' => $name . ' جدید',
        'menu_name' => $name,
    ];

    $args = [
        'hierarchical' => $is_hierarchical,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => ['slug' => $slug],
    ];

    register_taxonomy($slug, $post_types, $args);
}

function cyn_term_register()
{
    //wp_insert_term(__('اقتصادی', 'cyn-dm'), 'tour-type', ['slug' => 'economy']);

}

function cyn_page_register()
{
    // if ( ! get_option( 'cyn_theme_installed' ) ) {
    //     wp_insert_post( [ 
    //         'post_type' => 'page',
    //         'post_status' => 'publish',
    //         'post_title' => __( 'درباره ما', 'cyn-dm' ),
    //         'post_name' => 'about-us',
    //         'page_template' => 'templates/about.php'
    //     ] );

    //     update_option( 'cyn_theme_installed', true );
    // }
}
