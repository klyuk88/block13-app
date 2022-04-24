<template>
  <div>
    <!-- INTRO -->
    <section class="intro" id="intro">
      <div class="container-lg">
        <div
          class="intro__baner bg-set"
          :style="{ backgroundImage: `url('${mainBannerBg}')` }"
        >
          <div class="intro__shadow">
            <div class="intro__offer">
              <div class="intro__video-btn course" @click="playVideo = true">
                <img src="~/assets/img/intro/video-btn.svg" alt="video-btn" />
              </div>
              <h1 class="intro__title section-title academy-page">
                Будьте на стороне<br />
                крупного игрока
              </h1>
              <span class="intro__subtitle">Прогрессивное обучение профессиональному трейдингу с использованием институциональных методик.</span>
              <div class="intro__btns">
                <nuxt-link to="/profile" class="intro__btn btn"><span>Начать путь</span></nuxt-link>
                <!-- <a href="#" class="intro__btn btn"><span>Подробнее</span></a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //INTRO -->

    <!-- ADVANTAGES -->
    <section class="advantages academy-page" id="advantages">
      <div class="container">
        <h2 class="advantages__title section-title">ACADEMY</h2>
        <TheCards :triggers="triggers" />
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
      <div class="academy-line"></div>
    </section>


    <!-- //ADVANTAGES -->
    <TheLessons />
    <TheInstruction />
        <div class="video-wrap" v-if="playVideo">
      <div class="video-content">
        <span class="close-video" @click="playVideo = false">Закрыть</span>
        <client-only>
          <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              src="https://youtu.be/sQs4pOw8ltY"
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
import mainBannerBg from "~/assets/img/intro/academy-banner.jpg";
export default {
  data() {
    return {
      mainBannerBg,
      playVideo: false,
      triggers: [
        {
          title: "SMART-MONEY",
          about:
            "Концепция «Умных денег». Вы перестанете торговать так, как это делает большинство, научитесь идентифицировать действия и манипуляции крупных инвесторов, что даст вам конкурентное преимущество и позволит стабильно извлекать из этого прибыль.",
        },
        {
          title: "PRICE ACTION",
          about:
            "Фундамент нашего обучения базируется на анализе взаимодействия спроса и предложения с помощью японских свечей и динамики изменения цен на основе механики рынка.",
        },
        {
          title: "Объемный анализ",
          about:
            "Вы будете изучать не индикаторы, а профессиональные инструменты, отображающие первопричину движения котировок, и научитесь опережать движение графика на несколько шагов вперед.",
        },
        {
          title: "С нуля до профессионала",
          about:
            "Самые сложные инструменты и методы аналитики будут разбираться с самых основ. Вы пройдете путь от новичка, изучающего простейшие инструменты, до гуру, анализирующего кластерный график и биржевой стакан.",
        },
      ],
    };
  },
  methods: {
    openVideo() {
      this.playVideo = true;
    },
  },

};
</script>
