<?php

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');

    register_nav_menus([
        'navigation' => __('Navigation'),
    ]);
});

/* ADDITIONAL CSS/SCSS */
function additional_custom_styles()
{

    /*Enqueue The Styles*/
    wp_enqueue_style('uniquestylesheetid', get_template_directory_uri() . '/resources/styles/style.scss');
}
add_action('wp_enqueue_scripts', 'additional_custom_styles');
