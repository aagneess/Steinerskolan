</svg>
</div>

<footer>
  <img class="footer-background" src="<?= get_template_directory_uri(); ?>/assets/logo/footer.svg" />
  <img class="footer-background-mobile" src="<?= get_template_directory_uri(); ?>/assets/logo/footer-mobile.svg" />


  <section>

    <div class="mobile-footer-container">
      <div class="links-container">
        <p>Om skolan ></p>
        <ul>
          <li><a href="">Fritids</a></li>
          <li><a href="">Tallkottan</a></li>
          <li><a href="">Skolprojekt</a></li>
          <li><a href="">Tidigare elever</a></li>
        </ul>
      </div>
      <div class="links-container">
        <p>Kontakta oss ></p>
        <ul>
          <li>
            <p>rudolf@steinerskolan.se<br>
              Expedition: 031-21 46 32<br>
              Vaktmästare: 0705-11 50 98</p>
          </li>
        </ul>
      </div>
      <div class="links-container">
        <p>Hitta hit ></p>
        <ul>
          <li>
            <p>Rudolf Steinerskolan i Göteborg<br>
              Tallhöjdsgatan 1<br>
              416 74 GÖTEBORG
            </p>
          </li>
        </ul>
      </div>
    </div>

    <article>
      <h2>Vår skola</h2>
      <ul>
        <li><a href="">Om skolan</a></li>
        <li><a href="">Fritids</a></li>
        <li><a href="">Tallkottan</a></li>
        <li><a href="">Skolprojekt</a></li>
        <li><a href="">Tidigare elever</a></li>
      </ul>
    </article>

    <article>
      <h2>Hitta hit</h2>
      <p>Rudolf Steinerskolan i Göteborg<br>
        Tallhöjdsgatan 1<br>
        416 74 GÖTEBORG
      </p>
    </article>

    <article>
      <h2>Kontakta oss</h2>
      <p>rudolf@steinerskolan.se<br>
        Expedition: 031-21 46 32<br>
        Vaktmästare: 0705-11 50 98</p>
    </article>
    <div class="social">
      <button class="social-links">
        <img class="insta" src="<?= get_template_directory_uri(); ?>/assets/logo/fb.png" alt="facebook button" /></button>
      <button class="social-links">
        <img class="facebook" src="<?= get_template_directory_uri(); ?>/assets/logo/insta.png" alt="instagram button" /></button>
    </div>
  </section>
  <div class="social-mobile">
    <button class="social-links">
      <img class="insta" src="<?= get_template_directory_uri(); ?>/assets/logo/fb.png" alt="facebook button" /></button>
    <button class="social-links">
      <img class="facebook" src="<?= get_template_directory_uri(); ?>/assets/logo/insta.png" alt="instagram button" /></button>
  </div>

</footer>


<script src="<?= get_theme_file_uri('assets/app.js') ?>" async></script>
<?php wp_footer(); ?>
</footer>
</body>

</html>