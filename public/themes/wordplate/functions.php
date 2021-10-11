<?php

declare(strict_types=1);

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');

    register_nav_menus([
        'navigation' => __('Navigation'),
    ]);
});

// Allow SVG
add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {

    global $wp_version;
    if ($wp_version !== '4.7.1') {
        return $data;
    }

    $filetype = wp_check_filetype($filename, $mimes);

    return [
        'ext'             => $filetype['ext'],
        'type'            => $filetype['type'],
        'proper_filename' => $data['proper_filename']
    ];
}, 10, 4);

function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function fix_svg()
{
    echo '<style type="text/css">
          .attachment-266x266, .thumbnail img {
               width: 100% !important;
               height: auto !important;
          }
          </style>';
}
add_action('admin_head', 'fix_svg');

// NAVIGATION
function menu(string $location)
{
    $menu = [];
    $menu_items = wp_get_nav_menu_items($location) ?: [];

    foreach ($menu_items as $menu_item) {
        $parentId = (int) $menu_item->menu_item_parent;

        if ($parentId === 0) {
            $menu_item->children = [];
            $menu[$menu_item->ID] = $menu_item;

            continue;
        }

        $menu[$parentId]->children[] = $menu_item;
    }

    return $menu;
}
