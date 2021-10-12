<!DOCTYPE html>
<html <?= language_attributes(); ?>>

<head>
    <meta charset="<?= bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/global.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/media.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/header.css') ?>">
    <link rel="stylesheet" href="<?= get_theme_file_uri('assets/footer.css') ?>">

    <?= wp_head(); ?>
</head>

<body <?= body_class(); ?>>
    <?= wp_body_open(); ?>

    <header>

        <section class="logo">
            <img class="logo-image" src="http://localhost:8000/uploads/2021/10/Logotyp.svg" alt="Logga med skolbyggnad" />
            <img class="logo-text" src="http://localhost:8000/uploads/2021/10/RS.svg" alt="Rudolf Steiner textlogga" />
        </section>

        <nav role="navigation">
            <?php $menuItems = menu('navigation'); ?>
            <?php foreach ($menuItems as $menuItem) : ?>

                <?php if (sizeof($menuItem->children) === 0) :
                    // if (isset($_GET['page_id'])) {
                    //     $pageId = $menuItem->object_id;
                    //     $id = $_GET['page_id'];

                    //     if ($id == $pageId) {
                    //         // Current page
                    //     }
                    // }
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


                    <!-- CHILDREN -->
                    <?php
                    // continue;
                    ?>

                    </div class="sub-pages">

                    </div>

                <?php endif; ?>
            <?php endforeach; ?>






            <div class="social">
                <button class="social-links">
                    <img class="insta" src="<?= get_template_directory_uri(); ?>/assets/logo/fb.png" alt="facebook button" /></button>
                <button class="social-links">
                    <img class="facebook" src="<?= get_template_directory_uri(); ?>/assets/logo/insta.png" alt="instagram button" /></button>
            </div>
        </nav>


    </header>

    <div class="header-wave" style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 50%; width: 100%; position: absolute;">
            <path d="M-2.82,116.94 C16.36,-8.38 146.16,15.28 501.12,13.31 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #6e96ca;">

            </path>
        </svg>
    </div>