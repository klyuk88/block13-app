<template>
  <div id="beginner-page">
    
    <section
      class="beginner-header bg-set"
      :style="{ backgroundImage: `url(${zeusBg})` }"
    >
      <!-- <img src="~/assets/img/beginners/zeus.png" alt="" class=""> -->
      <div class="container">
        <div class="beginner_content_wrap">
          <div>
            <!-- <h2 class="beginner-header__title">ИНСТРУКЦИЯ для НОВИЧКА</h2> -->
            <h1 class="beginner-header__title">Криптовалюта инструкция</h1>
          </div>
          <div>
            <img src="~/assets/img/beginners/zeus.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="beginner-body">
      <div class="container">
        <div class="beginner-content">
          <div class="beginner-content-steps">
            <div class="beginner-content-step">
              <span class="beginner_step_number first_number">1</span>
              <div class="beginner-content__title">Первый шаг</div>
              <div class="beginner-content-steps-item">
                <h3 class="beginner-content-steps-item__title">
                  Быть подписанным на Телеграм-канал:
                </h3>
                <p class="beginner-content-steps-item__about">
                  Вас ждут там сливки ценнейшей информации о торговле,
                  инвестидеи и обучение профессиональному трейдингу. Вы будете в
                  курсе всех текущих движений на рынке и четко будете понимать,
                  что происходит в текущий момент времени.
                </p>
                <div class="beginner-content-steps-item-btns">
                  <a href="https://t.me/+kEoUT65cjTFiM2Qy" target="_blank">
                  <div class="beginner-content-steps-item-btns__btn-white">
                    <img src="~/assets/img/beginners/tg-logo.svg" alt="" />
                  </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="beginner-content-step">
              <span class="beginner_step_number">2</span>
              <div class="beginner-content__title">Второй шаг</div>
              <div class="beginner-content-steps-item">
                <h3 class="beginner-content-steps-item__title">
                  Зарегистрироваться на одной из бирж:
                </h3>
                <p class="beginner-content-steps-item__about">
                  Диверсифицируйте возможные риски и сделайте аккаунты на 2
                  биржах сразу: это Binance и OKX. При регистрации по моим
                  ссылкам вы получите 20% кэшбека на все биржевые комиссии,
                  который будет приходить вам на счет в USDT. На длинной
                  дистанции вы сможете сэкономить тысячи долларов комиссионных.
                </p>
                <div class="beginner-content-steps-item-btns">
                  <a href="https://www.okx.com/join/14332324" target="_blank">
                    <div class="beginner-content-steps-item-btns__btn-white">
                      <img src="~/assets/img/beginners/first-btn.svg" alt="" />
                    </div>
                  </a>
                  <a href="https://accounts.binance.com/ru/register?ref=W5IYJ4BK" target="_blank">
                    <div class="beginner-content-steps-item-btns__btn-black">
                      <img
                        src="~/assets/img/beginners/binance.svg"
                        alt=""
                      /></div
                  ></a>
                </div>
              </div>

            </div>

            <div class="beginner-content-step">
              <span class="beginner_step_number">3</span>
              <div class="beginner-content__title">Третий шаг</div>
              <div class="beginner-content-steps-item">
                <h3 class="beginner-content-steps-item__title">
                  Ознакомиться с бесплатными уроками по пользованию биржами
                </h3>
                <p class="beginner-content-steps-item__about">
                  Если вы попали в индустрию криптовалют только вчера, эти уроки
                  помогут вам понять, как устроены криптобиржи от А до Я.
                </p>
              </div>
              <div class="beginner-video-lessons">
                <div
                  class="beginner-video-lesson"
                  v-for="(lesson, index) in videoLessons"
                  :key="index"
                >
                  <h4 class="beginner-video-lesson__title">
                    {{ index + 1 }}. {{ lesson.title }}
                  </h4>
                  <div
                    class="beginner-video-lesson-btn"
                    @click="openVideo(index)"
                  >
                    <img src="~/assets/img/beginners/youtube.svg" alt="" />
                    <span>Смотреть</span>
                  </div>
                </div>
                <img
                  src="~/assets/img/beginners/decor-2.png"
                  alt=""
                  class="beginner-decor-2"
                />
              </div>
              <!-- конец уроков -->
              <div class="beginner-content-steps-links mob">
                <div class="beginner-content-steps-links-item">
                  <div class="beginner-content__title">
                    <span class="steps-links__title">ACADEMY</span>
                  </div>
                  <div class="beginner-content-steps-item">
                    <h3 class="beginner-content-steps-item__title">
                      Будьте на стороне крупного игрока
                    </h3>
                    <p class="beginner-content-steps-item__about">
                      Прогрессивное обучение профессиональному трейдингу с
                      использованием институциональных методик.
                    </p>
                    <nuxt-link to="/academy">
                      <div class="beginner-content-steps-links-btn">
                      Подробнее
                      <img src="~/assets/img/beginners/arrow.svg" alt="" />
                    </div>
                    </nuxt-link>

                  </div>
                </div>

                <div class="beginner-content-steps-links-item">
                  <div class="beginner-content__title">
                    <span class="steps-links__title">LIVE TRADING</span>
                  </div>
                  <div class="beginner-content-steps-item">
                    <h3 class="beginner-content-steps-item__title">
                      Учитесь, приобретайте опыт и зарабатывайте одновременно
                    </h3>
                    <p class="beginner-content-steps-item__about">
                      Торговля в режиме реального времени совместно с
                      профессиональными трейдерами.
                    </p>
                    <nuxt-link to="/live-trading">
                     <div class="beginner-content-steps-links-btn">
                      Подробнее
                      <img src="~/assets/img/beginners/arrow.svg" alt="" />
                    </div>
                    </nuxt-link>

                  </div>
                </div>
                <div class="beginner-content-steps-links-item">
                  <div class="beginner-content__title">
                    <span class="steps-links__title">PRIVATE CLUB</span>
                  </div>
                  <div class="beginner-content-steps-item">
                    <h3 class="beginner-content-steps-item__title">
                      Не повторяйте действия крупного игрока, а станьте им
                    </h3>
                    <p class="beginner-content-steps-item__about">
                      Место для тех, кто готов выйти на совершенно иной
                      уровень.
                    </p>
                    <nuxt-link to="/private-club">
                     <div class="beginner-content-steps-links-btn">
                      Подробнее
                      <img src="~/assets/img/beginners/arrow.svg" alt="" />
                    </div>
                    </nuxt-link>

                  </div>
                </div>
                <img
                  src="~/assets/img/beginners/decor-3.1.png"
                  alt=""
                  class="beginner-decor-3"
                />
              </div>
            </div>
            <!-- end beginner step -->

          </div>
          <!-- end beginner steps -->

          <div class="beginner-content-helps">
            <div class="beginner-content__title">Подсказки</div>

            <div class="beginner-content-helps-items">
              <div
                class="beginner-content-helps-item"
                v-for="(item, index) in helps"
                :key="index"
              >
                <h3 class="beginner-content-helps-item__title">
                  {{ item.title }}
                </h3>
                <p class="beginner-content-helps-item__about">
                  {{ item.about }}
                </p>
              </div>
            </div>
            <!-- beginner-content-helps-items -->
            <client-only>
              <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item, index) in helps" :key="index">
                  <div class="beginner-content-helps-item">
                    <h3 class="beginner-content-helps-item__title">
                      {{ item.title }}
                    </h3>
                    <p class="beginner-content-helps-item__about">
                      {{ item.about }}
                    </p>
                  </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </client-only>

            <div class="beginner-content-steps-links">
              <div class="beginner-content-steps-links-item">
                <div class="beginner-content__title">
                  <span class="steps-links__title">ACADEMY</span>
                </div>
                <div class="beginner-content-steps-item">
                  <h3 class="beginner-content-steps-item__title">
                    Будьте на стороне крупного игрока
                  </h3>
                  <p class="beginner-content-steps-item__about">
                    Прогрессивное обучение профессиональному трейдингу с
                    использованием институциональных методик.
                  </p>
                  <nuxt-link to="/academy"><div class="beginner-content-steps-links-btn">
                    Подробнее
                    <img src="~/assets/img/beginners/arrow.svg" alt="" />
                  </div></nuxt-link>
                </div>
              </div>

              <div class="beginner-content-steps-links-item">
                <div class="beginner-content__title">
                  <span class="steps-links__title">LIVE TRADING</span>
                </div>
                <div class="beginner-content-steps-item">
                  <h3 class="beginner-content-steps-item__title">
                    Учитесь, приобретайте опыт и зарабатывайте одновременно
                  </h3>
                  <p class="beginner-content-steps-item__about">
                    Торговля в режиме реального времени совместно с
                    профессиональными трейдерами.
                  </p>
                  <nuxt-link to="/live-trading">
                   <div class="beginner-content-steps-links-btn">
                    Подробнее
                    <img src="~/assets/img/beginners/arrow.svg" alt="" />
                  </div>
                  </nuxt-link>

                </div>
              </div>
              <div class="beginner-content-steps-links-item">
                <div class="beginner-content__title">
                  <span class="steps-links__title">PRIVATE CLUB</span>
                </div>
                <div class="beginner-content-steps-item">
                  <h3 class="beginner-content-steps-item__title">
                    Не повторяйте действия крупного игрока, а станьте им
                  </h3>
                  <p class="beginner-content-steps-item__about">
                    Место для тех, кто готов выйти на совершенно иной уровенья.
                  </p>
                  <nuxt-link to="/private-club">
                  <div class="beginner-content-steps-links-btn">
                    Подробнее
                    <img src="~/assets/img/beginners/arrow.svg" alt="" />
                  </div>
                  </nuxt-link>
                </div>
              </div>
              <img
                src="~/assets/img/beginners/decor-3.1.png"
                alt=""
                class="beginner-decor-3"
              />
            </div>
            <!-- beginner links -->
          </div>
        </div>
      </div>
      <!-- декор элементы -->
      <img src="~/assets/img/decor-4.png" alt="" class="decor-poligon" />
      <img src="~/assets/img/beginners/decor-mob.png" alt="" class="beginner-decor-mob-1">
      <img src="~/assets/img/beginners/mob-decor-5.png" alt="" class="beginner-decor-mob-2">
      <img src="~/assets/img/beginners/decor-mob-6.png" alt="" class="beginner-decor-mob-3">
      <img src="~/assets/img/beginners/decor-mob-4.png" alt="" class="beginner-decor-mob-4">
      <div class="beginner_step_decor"></div>
      <div class="decor-round"></div>
       <!-- декор элементы -->
    </section>

    <div class="video-wrap" v-if="playVideo">
      <div class="video-content">
        <span class="close-video" @click="playVideo = false">Закрыть</span>
         <iframe width="800" height="480" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <!-- <client-only>
          <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              :src="video"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            ></iframe>
          </div>
        </vue-plyr>
        </client-only> -->

      </div>
    </div>

  </div>
</template>


<script>
import zeusBg from "~/assets/img/beginners/numbers.png";
export default {
  middleware: "secretLock",
   head: {
    title: "Криптовалюта пошаговая инструкция как купить и заработать",
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
      zeusBg,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        spaceBetween: 20,
      },
      playVideo: false,
      videoLesson: null,
      video: "",
      videoLessons: [
        {
          videoSrc: "https://www.youtube.com/embed/ud6vp7NV4D0",
          title: "Почему я начал торговать на OKX ",
        },
        {
          videoSrc: "https://www.youtube.com/embed/SduAgmikUl4",
          title: "Как пополнять счёт, вывод денег, верификация",
        },
        {
          videoSrc: "https://www.youtube.com/embed/ZiuvMTTI5Rk",
          title: "Все о комиссиях. Кэшбек до 50%",
        },
        {
          videoSrc: "https://www.youtube.com/embed/00A2_S2SA9w",
          title: "Фьючерсы для новичков простыми словами",
        },
        {
          videoSrc: "https://www.youtube.com/embed/_WGVLcs98pw",
          title: "Стоп-лоссы и тейк-профиты на Binance",
        },
        {
          videoSrc: "https://www.youtube.com/embed/tRw2pT5aCk0&t=1s",
          title: "Фьючерсы без риска ликвидации",
        },
        {
          videoSrc: "https://www.youtube.com/embed/W3yeESVDBHg",
          title: "Обзор биржи Binance. Обучение трейдингу",
        },

      ],
      helps: [
        {
          title: "Соблюдайте риск-менеджмент",
          about:
            "Не рискуйте суммой более чем в 5% от депозита на одну сделку. Управление рисками - это то, что отличает профессионалов от игроманов. Режьте убытки и давайте прибыли течь, и только данное правило позволит вам быть на дистанции в плюсе и в том числе раскрутить небольшой депозит.",
        },
        {
          title: "Практикуйтесь",
          about:
            "Нарабатывайте руку на большом количестве мелких сделок. Ваша задача - не заработать здесь и сейчас, а сформировать опыт и понимание рынка, чтобы впоследствии вы могли филигранно чувствовать рынок. На эту тему есть известная фраза: «чтобы стать мастером в каком-либо деле, посвятите ему 10000 часов»",
        },
        {
          title: "Торгуйте структуру рынка",
          about:
            "Hе наступайте на стандартные грабли всех новичков.Не заходите по сигналам какого-то индикатора, пересечению скользящих средних или по словам блогера в интернете. Чтобы понимать, почему цена двигается именно так, изучайте поведение покупателей и продавцов - в первую очередь график цены и объемы.",
        },
        {
          title: "Занимайтесь статистикой",
          about:
            "Ведите полные отчеты по своим торговым идеями их отработкам. Собирайте статистику сделок той или иной стратегии и фиксируйте поведение цены в различных рыночных ситуациях. Это может показаться лишней работой, но поверьте, что когда вы начнете собирать данные, постепенно рыночная структура у вас в голове встанет как книги на полках в библиотеке.",
        },
      ],
    };
  },

  methods: {
    openVideo(idx) {
      this.videoLesson = this.videoLessons.find((item, index) => index === idx);
      this.video = this.videoLesson.videoSrc;
      this.playVideo = true;
    },
  },
};
</script>



<style lang="sass" scoped>
</style>
