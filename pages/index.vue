<template>
  <div>
    <!-- INTRO -->
    <section class="intro" id="intro">
      <div class="container-lg">
        <div
          class="intro__baner bg-set"
          :style="{ backgroundImage: `url(${introBannerBg})` }"
        >
          <!-- вставить ссылку на видео -->
          <!-- <video src="~/assets/ocean .mp4" class="intro-video" autoplay muted crossorigin playsinline></video> -->
          <div class="intro__shadow">
            <div class="intro__offer">
              <div class="intro__video-btn" @click="playVideo = true">
                <img src="~/assets/img/intro/video-btn.svg" alt="video-btn" />
              </div>
              <h1 class="intro__title section-title">
                Обучение трейдингу
              </h1>
              <span class="intro__subtitle"
                >Наша команда подобна биткоину - есть мы и все остальные</span
              >
              <nuxt-link to="/profile" class="intro__btn btn"
                ><span>Подробнее</span></nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //INTRO -->

    <!-- ADVANTAGES -->
    <section class="advantages" id="advantages">
      <TheNumbers />
      <div class="container">
        <TheCards :triggers="triggers" />
        <!-- //advantages__cards -->
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

    <!-- COURSES -->
    <section class="courses" id="courses">
      <div class="container-1680">
        <ul class="courses__list">
          <li class="courses__item">
            <div class="courses__item-link">
              <img
                src="~/assets/img/academy-main.jpg"
                alt=""
                class="courses__item-link-img"
              />
            </div>
            <div class="courses__item-bottom">
              <div class="courses__text">
                <h2 class="courses__text-title section-title">ACADEMY</h2>
                <ul class="courses__text-list">
                  <li class="courses__text-item">
                    Обучение, построенное исключительно на механике рынка.
                    Методология хедж-фондов и институциональных инвесторов
                  </li>
                  <li class="courses__text-item">
                    Курс рассчитан на обучение новичка до уровня
                    профессионального трейдера
                  </li>
                  <li class="courses__text-item">
                    Торговая стратегия, риск-менеджмент
                  </li>
                </ul>
                <nuxt-link to="/academy" class="courses__btn"
                  ><span>Подробнее</span></nuxt-link
                >
              </div>
            </div>
          </li>
          <!-- //courses__item -->
          <li class="courses__item">
            <div class="courses__item-link">
              <img
                src="~/assets/img/live-trading-main.jpg"
                alt=""
                class="courses__item-link-img"
              />
            </div>
            <div class="courses__item-bottom">
              <div class="courses__text">
                <h2 class="courses__text-title section-title">LIVE TRADING</h2>
                <ul class="courses__text-list">
                  <li class="courses__text-item">
                    Публичная торговля на фьючерсном и спотовом рынках
                  </li>
                  <li class="courses__text-item">Торговая система</li>
                  <li class="courses__text-item">
                    Закрытый чат для участников
                  </li>
                </ul>
                <nuxt-link to="/live-trading" class="courses__btn"
                  ><span>Подробнее</span></nuxt-link
                >
              </div>
            </div>
          </li>
          <!-- //courses__item -->

          <li class="courses__item">
            <div class="courses__item-link">
              <img
                src="~/assets/img/trigger-3.jpg"
                alt=""
                class="courses__item-link-img"
              />
            </div>
            <div class="courses__item-bottom">
              <div class="courses__text">
                <h2 class="courses__text-title section-title">PRIVATE CLUB</h2>
                <ul class="courses__text-list">
                  <li class="courses__text-item">Курирование торговли</li>
                  <li class="courses__text-item">Долгосрочные портфели</li>
                  <li class="courses__text-item">Приватный чат инвесторов</li>
                  <li class="courses__text-item">Перспективные проекты</li>
                  <li class="courses__text-item">
                    Доступ к ACADEMY и LIVE TRADING
                  </li>
                </ul>
                <nuxt-link to="/private-club" class="courses__btn"
                  ><span>Подробнее</span></nuxt-link
                >
              </div>
            </div>
          </li>
          <!-- //courses__item -->
        </ul>
      </div>
      <!-- //container -->
    </section>
    <!-- //COURSES -->
    <TheInstruction />

    <div class="video-wrap" v-if="playVideo">
      <div class="video-content">
        <span class="close-video" @click="playVideo = false">Закрыть</span>
        <iframe
          width="800"
          height="480"
          src="https://www.youtube.com/embed/ciyL3RcY9Hc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import introBannerBg from "~/assets/img/intro/main-banner.jpg";
export default {
  head: {
    title: "Обучение трейдингу криптовалют | Обучение трейдингу курсы",
    // meta: [
    //   {
    //     hid: "description",
    //     name: "description",
    //     content: "Home page description",
    //   },
    // ],
  },

  data() {
    return {
      playVideo: false,
      introBannerBg,
      triggers: [
        {
          title: "Экспертиза",
          about:
            "Мы торговали на Forex, NYSE, NASDAQ, CME и рынке криптовалют, тестировали сотни стратегий и сформировали статистику из тысяч страниц бэктестов. В основе нашей торговли лежат методологии западных фондов.",
        },
        {
          title: "Компетентность",
          about:
            "Мы не используем классический теханализ - фигуры, индикаторы, волны Эллиота, и не ориентируемся на новостной шум. Фундамент нашей стратегии - анализ взаимодействия спроса и предложения, а также логика крупного капитала.",
        },
        {
          title: "Идеология ",
          about:
            "Проанализировав весь российский рынок обучения трейдингу, мы заметили острую нехватку профессиональных подходов и обилие давно изживших себя инструментов анализа, после чего решили создать уникальную линейку продуктов.",
        },
        {
          title: "Цель проекта",
          about:
            "Поиск бриллиантов среди нового поколения трейдеров, которые смогут адаптироваться к нашим стратегиям и работать в команде над прогрессивными торговыми алгоритмами.",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="sass" scoped>
</style>
