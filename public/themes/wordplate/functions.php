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
};

// CUSTOM COLOR PALETTE

function getColorPalette()
{
    add_theme_support(
        'editor-color-palette',
        array(
            array(
                'name' => 'Dark Green',
                'slug' => 'dark green',
                'color' => '#18321D'
            ),
            array(
                'name' => 'Dark Yellow',
                'slug' => 'dark yellow',
                'color' => '#4C3D03'
            ),
            array(
                'name' => 'Dark Orange',
                'slug' => 'dark orange',
                'color' => '#46200A'
            ),
            array(
                'name' => 'Dark Red',
                'slug' => 'dark red',
                'color' => '#40100E'
            ),
            array(
                'name' => 'Dark Purple',
                'slug' => 'dark Purple',
                'color' => '#290F3E'
            ),
            array(
                'name' => 'Dark Blue',
                'slug' => 'dark blue',
                'color' => '#101D2D'
            ),
            array(
                'name' => 'Medium Green',
                'slug' => 'medium green',
                'color' => '#479556'
            ),
            array(
                'name' => 'Medium Yellow',
                'slug' => 'medium yellow',
                'color' => '#E5B80A'
            ),
            array(
                'name' => 'Medium Orange',
                'slug' => 'medium orange',
                'color' => '#D3601F'
            ),
            array(
                'name' => 'Medium Red',
                'slug' => 'medium red',
                'color' => '#BF302B'
            ),
            array(
                'name' => 'Medium Purple',
                'slug' => 'medium purple',
                'color' => '#7C2DBA'
            ),
            array(
                'name' => 'Medium Blue',
                'slug' => 'medium blue',
                'color' => '#315787'
            ),
            array(
                'name' => 'Green',
                'slug' => 'green',
                'color' => '#92CB9C'
            ),
            array(
                'name' => 'Yellow',
                'slug' => 'yellow',
                'color' => '#F9DE76'
            ),
            array(
                'name' => 'Orange',
                'slug' => 'orange',
                'color' => '#EDAA85'
            ),
            array(
                'name' => 'Red',
                'slug' => 'red',
                'color' => '#E48986'
            ),
            array(
                'name' => 'Purple',
                'slug' => 'purple',
                'color' => '#B986E2'
            ),
            array(
                'name' => 'Sky Blue',
                'slug' => 'sky blue',
                'color' => '#9EB9DC'
            ),
            array(
                'name' => 'Blue',
                'slug' => 'blue',
                'color' => '#6E96CA'
            ),
            array(
                'name' => 'Earth Blue',
                'slug' => 'earth blue',
                'color' => '#4273B4'
            ),
            array(
                'name' => 'Light Green',
                'slug' => 'light green',
                'color' => '#EDF6EF'
            ),
            array(
                'name' => 'Light Yellow',
                'slug' => 'light yellow',
                'color' => '#FEFAE8'
            ),
            array(
                'name' => 'Light Orange',
                'slug' => 'light orange',
                'color' => '#FCF1EB'
            ),
            array(
                'name' => 'Light Purple',
                'slug' => 'light purple',
                'color' => '#F3EBFA'
            ),
            array(
                'name' => 'Light Red',
                'slug' => 'light red',
                'color' => '#FBEBEB'
            ),
            array(
                'name' => 'Light Blue',
                'slug' => 'light blue',
                'color' => '#E7EDF6'
            )
        )
    );

    // add_theme_support(
    //     'editor-font-sizes',
    //     array(
    //         array(
    //             'name' => 'Normal',
    //             'slug' => 'normal',
    //             'size' => 16
    //         ),
    //         array(
    //             'name' => 'Large',
    //             'slug' => 'large',
    //             'size' => 24
    //         )
    //     )
    // );
}
add_action('init', 'getColorPalette');
