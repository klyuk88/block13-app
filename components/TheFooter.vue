<template >
    <div>
          <!-- FOOTER -->
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer__inner">
        <a href="#" class="footer__logo">
          <img src="~/assets/img/logo.png" alt="logo" class="footer__logo-img">
        </a>
        <div class="footer__contacts">
          <div class="footer__nav">
            <div class="footer__nav-title">Навигация</div>
            <div class="footer__nav-wrapper">
              <ul class="footer__nav-left">
                <li class="footer__nav-item">
                  <nuxt-link to="/academy" class="footer__nav-link">Academy</nuxt-link>
                </li>

                <li class="footer__nav-item">
                  <nuxt-link to="live-trading" class="footer__nav-link">Live Trading </nuxt-link>
                </li>
              </ul>
              <ul class="footer__nav-right">
                <li class="footer__nav-item">
                  <nuxt-link to="/beginner" class="footer__nav-link">Инструкция для новичка</nuxt-link>
                </li>
                <li class="footer__nav-item">
                  <nuxt-link to="/private-club" class="footer__nav-link">Private club</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__social">
            <div class="footer__social-title">Социал</div>
            <div class="footer__social-wrapper">
              <div class="footer__social-left">
                <a href="https://www.okx.com/join/14189390" class="footer__social-link okx" style="background-color: #EFEFEF;" target="_blank">
                  <img src="~/assets/img/footer/okx.svg" alt="okx-image">
                </a>
                <a href="https://t.me/+kEoUT65cjTFiM2Qy" class="footer__social-link telegram" style="background-color: #52A8E4;" target="_blank">Telegram</a>
              </div>
              <div class="footer__social-right">
                <a href="https://accounts.binance.com/ru/register?ref=WHWJIJB7" class="footer__social-link binance"
                  style="background: linear-gradient(95.45deg, #3C3E40 0%, #2F3133 104.2%);" target="_blan">Binance</a>
                <a href="https://www.youtube.com/channel/UCV-aFLWIUc6tp3UWLpwRuNA" class="footer__social-link youtube" style="background: #EFEFEF;" target="_blank">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div><!-- //footer__inner -->
    </div><!-- //container -->
    <div class="advantages__star">
      <img src="~/assets/img/footer/rhombus1.svg" alt="left-icon">
    </div>
    <div class="advantages__rhombus">
      <img src="~/assets/img/footer/circles.svg" alt="right-icon">
    </div>
  </footer><!-- //FOOTER -->
    </div>
</template>
