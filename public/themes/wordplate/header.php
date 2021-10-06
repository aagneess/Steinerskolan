<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/global.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/header.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/footer.css') ?>">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <header>
        <nav role="navigation">
            <?php
            $pages = get_pages();
            foreach ($pages as $page) {
            ?>
                <a href="<?php echo get_page_link($page->ID) ?>" class="header-link"><?php echo $page->post_title ?></a>
            <?php
            } ?>
        </nav>
    </header>

    <div class="header-wave" style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
            <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #4273b4;">

            </path>
        </svg>
    </div>