<!DOCTYPE html>
<html <?= language_attributes(); ?>>

<head>
    <meta charset="<?= bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/global.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/header.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/footer.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/media.css') ?>">

    <?= wp_head(); ?>
</head>

<body <?= body_class(); ?>>
    <?= wp_body_open(); ?>

    <header>
        <a class="logo" href="/">
            <img class="logo-image" src="<?= get_template_directory_uri(); ?>/assets/logo/Logo.svg" alt="Logga med skolbyggnad" />
        </a>
        <a class="logo logo-mobile" href="/">
            <img class="logo-image" src="<?= get_template_directory_uri(); ?>/assets/logo/RS.svg" alt="Logga med skolbyggnad" />
        </a>
        <div class="mobile-nav">
            <?php $menuItems = menu('navigation'); ?>
            <?php foreach ($menuItems as $menuItem) : ?>
                <?php if (sizeof($menuItem->children) === 0) :
                ?>
                    <!-- SINGLE PAGES -->
                    <a class="single-page-mobile mobile-container" href="<?= $menuItem->url; ?>">
                        <?= $menuItem->title; ?>
                    </a>
                <?php else : ?>
                    <!-- PARENTS -->
                    <div class="pages-container-mobile mobile-container">
                        <span> <?= $menuItem->title; ?> > </span>
                        <ul class="child-pages-mobile">
                            <?php foreach ($menuItem->children as $child) : ?>
                                <li>
                                    <a href="<?= $child->url ?>">
                                        <?= $child->title; ?>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                <?php endif; ?>
            <?php endforeach; ?>
            <div class="social-nav">
                <button>
                    <img src="<?= get_template_directory_uri(); ?>/assets/logo/fb.png" alt="facebook button" /></button>
                <button>
                    <img src="<?= get_template_directory_uri(); ?>/assets/logo/insta.png" alt="instagram button" /></button>
            </div>
        </div>
        <div class="hamburger-menu">
            <div class="top"></div>
            <div class="middle"></div>
            <div class="bottom"></div>
        </div>
        <div class="close-menu">
            <span>x</span>
        </div>
        <nav role="navigation">

            <?php $menuItems = menu('navigation'); ?>
            <?php foreach ($menuItems as $menuItem) : ?>

                <?php if (sizeof($menuItem->children) === 0) :
                ?>
                    <!-- SINGLE PAGES -->
                    <a class="single-page" href="<?= $menuItem->url; ?>">
                        <?= $menuItem->title; ?>
                    </a>
                <?php else : ?>
                    <!-- PARENTS -->
                    <div class="pages-container">
                        <a class="parent-pages" href="<?= $menuItem->url; ?>">
                            <?= $menuItem->title; ?> >
                        </a>
                        <ul class="child-pages">
                            <?php foreach ($menuItem->children as $child) : ?>
                                <li>
                                    <a href="<?= $child->url ?>">
                                        <?= $child->title; ?>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                <?php endif; ?>
            <?php endforeach; ?>
        </nav>

    </header>

    <div class="header-wave" style="height: 100px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%; position: absolute;">
            <path d="M 0.41,147.53 C-3.10,13.31 36.96,15.28 500.84,13.31 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #6e96ca;">

            </path>
        </svg>
    </div>