<template>
  <div>
    <!-- INTRO -->
    <section class="intro" id="intro">
      <div class="container-lg">
        <div
          class="intro__baner bg-set"
          :style="{ backgroundImage: `url('${mainBannerBg}')` }"
        >
        <!-- вставить ссылку на видео -->
        <!-- <video src="~/assets/ocean .mp4" class="intro-video" autoplay muted crossorigin playsinline></video> -->
          <div class="intro__shadow">
            <div class="intro__offer">
              <div class="intro__video-btn course" @click="playVideo=true">
                <img src="~/assets/img/intro/video-btn.svg" alt="video-btn" />
              </div>
              <h1 class="intro__title section-title">Приобретайте опыт<br> и зарабатывайте одновременно</h1>
              <span class="intro__subtitle"
                >Торговля в режиме реал-тайм совместно с профессиональными трейдерами</span>
              <!-- <div class="intro__btns">
                <a href="#register" class="intro__btn btn"
                  ><span>Вступить</span></a
                >
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //INTRO -->

    <!-- ADVANTAGES -->
    <section class="advantages" id="advantages">
      <div class="container">
        <h2 class="advantages__title section-title">Live Trading</h2>
        <TheCards :triggers="triggers"/>
        <div class="private-lines">
         <nuxt-link to="/profile"> <button class="connect-btn">
            <span>ПРИСОЕДИНИТСЯ</span>
          </button></nuxt-link>
        </div>
      </div>
      <!-- //container -->
      <div class="advantages__star">
        <img
          src="~/assets/img/advantages/advantages-img2.svg"
          alt="right-icon"
        />
      </div>
      <div class="advantages__rhombus">
        <img
          src="~/assets/img/advantages/advantages-img1.svg"
          alt="left-icon"
        />
      </div>
    </section>
    <!-- //ADVANTAGES -->

    <TheInstruction />
      <div class="video-wrap" v-if="playVideo">
      <div class="video-content">
        <span class="close-video" @click="playVideo = false">Закрыть</span>
        <client-only>
          <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              src="https://youtu.be/zFCBQG2Rmp4"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </vue-plyr>
        </client-only>

      </div>
    </div>

  </div>
</template>

<script>
import mainBannerBg from "~/assets/img/intro/live-trading-banner.jpg";
export default {
  data() {
    return {
      mainBannerBg,
      playVideo: false,
      triggers: [
        {
          title: "Реал-тайм сделки",
          about:
            "Объяснение рыночной ситуации, открытие и закрытие позиций на рынке с полным сопровождением: стоп-ордера, цели, логика входа и выхода.",
        },
        {
          title: "Торговая система",
          about:
            "Мини-курс с описанием поведения цены в различных рыночных ситуациях, контекста, конкретных сетапов для открытия сделок с объяснением механики рынка и методологии управления рисками.",
        },
        {
          title: "Чат трейдеров",
          about:
            "Общение, обмен опытом в отдельной приватной группе. Каждый человек в чате - начинающий или опытный трейдер, что делает его ценным ресурсом для профессионального роста.",
        },
        {
          title: "Обратная связь",
          about:
            "Консультации по любым вопросам относительно трейдинга на рынке криптовалют и профессиональная поддержка в доведении до конкретного результата.",
        },
      ],
    };
  },

};
</script>
