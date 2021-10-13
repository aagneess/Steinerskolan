<?php get_header(); ?>

<main role="main">
    <div class="wp-block-nextend-smartslider3">
        <?php
        echo do_shortcode('[smartslider3 slider="2"]');
        ?></div>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article>

                <?php the_content(); ?>
            </article>
        <?php endwhile;
    else : ?>

    <?php endif; ?>
</main>

<?php get_footer(); ?>