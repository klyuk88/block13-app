<template>
  <div v-if="lessons">
    <!-- LESSONS -->
    <section class="lessons" id="lessons">
      <div class="container">
        <h2 class="lessons__title">ОБУЧАЮЩИЙ КУРС ПО ТРЕЙДИНГУ</h2>
        <div class="lessons__wrapper">
          <div class="lessons__left">
            <div class="lessons__left-top">
              <!-- 1-е состояние плеера -->
              <client-only v-if="lessons">
                <vue-plyr ref="plyr">
                  <video controls crossorigin playsinline>
                    <source size="" src="" type="video/mp4" />
                  </video>
                </vue-plyr>
              </client-only>
            </div>
            <div class="lessons__left-bottom">
              <div class="lessons__desc">
                <div class="lessons__desc-title">
                  {{ lessonTitle }}
                </div>
                <p class="lessons__desc-text">
                  {{ lessonDescription }}
                </p>
              </div>
            </div>
            <!-- lessons__left-bottom -->
          </div>
          <div class="lessons__right">
            <div class="lessons__right-top">
              <div class="lessons__tabs">
                <div><button class="lessons__tab active">Тизеры</button></div>
                <div>
                  <nuxt-link to="/profile"
                    ><button class="lessons__tab">Курсы</button></nuxt-link
                  >
                </div>
              </div>
              <div class="lessons__themes" v-if="lessons">
                <div
                  class="lessons__theme"
                  v-for="(lesson, index) in lessons"
                  :key="index"
                  @click="openDesc(index)"
                  :class="{ active: index === idx ? true : false }"
                >
                  <div class="lessons__theme-header">
                    {{ index + 1 }}. {{ lesson.name }}
                    <span class="lessons__theme-arrow"
                    >
                      <img src="~/assets/img/lessons/lesson-arrow.svg" alt="" />
                    </span>
                    <!-- <span class="lessons__theme-progress">{{
                      percentProgress + "%"
                    }}</span> -->
                  </div>

                  <div class="lessons__theme-desc">
                    <div class="lessons__theme-title" v-if="lessonDuration">
                      {{ lessonDuration }}
                    </div>
                    <p class="lessons__theme-text" v-if="lesson.shortDescription">
                      {{ lesson.shortDescription }}
                    </p>
                    <div class="value">
                      <div
                        class="value-box"
                        :style="{ width: percentProgress + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <button class="lessons__visible-btn">Посмотреть еще</button> -->
            <nuxt-link to="/profile">
              <div class="lesson_btn">
                <img
                  src="~/assets/img/ci_check.svg"
                  alt=""
                  class="btn_buy_check"
                  v-if="course.bought"
                />
                <span v-else
                  >КУПИТЬ ВЕСЬ КУРС - <del v-if="course.price.discountPercent">$ {{course.price.price / 100}}</del> $ {{ course.price.discountPrice / 100 }}</span
                >
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- //LESSONS -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      idx: 0,
      lessonTitle: "",
      lessonDescription: "",
      lessonDuration: "00:00:00",
      percentProgress: null,
      lesson: null,
      player: null,
    };
  },

  computed: {
    lessons() {
      return this.$store.getters["lessons/getLessons"];
    },
    videoKey() {
      return this.$store.getters["lessons/getVideoKey"];
    },
    course() {
      return this.$store.getters["lessons/getCourse"];
    },
  },

  methods: {
    openRegister() {
      this.$store.commit("openRegister");
    },
    async openDesc(index) {
      this.idx = index;
      this.lesson = this.lessons.find((item, indx) => indx === index);
      await this.$store.dispatch("lessons/getVideoKey", {
        typeVideo: 4,
        elementId: this.lesson.id,
      });
      this.percentProgress = 0;
      this.lessonTitle = this.lesson.name;
      this.lessonDescription = this.lesson.fullDescription;
      this.player.source = {
        type: "video",
        title: "",
        sources: [
          {
            src: `${this.$config.API_URL}/video/${this.videoKey}.mp4`,
            type: "video/mp4",
            size: 1080,
          },
        ],
        poster: `${this.$config.API_URL}/img/${this.lesson.logo}`
      };
    },
  },
  async mounted() {
    await this.$store.dispatch("lessons/getCourse");
    await this.$store.dispatch("lessons/getLessons");
    //получаем тизер первого урока
    await this.$store.dispatch("lessons/getVideoKey", {
      typeVideo: 4,
      elementId: this.lessons[0].id,
    });

    //получить описание и название первого урока
    this.lessonTitle = this.lessons[0].name;
    this.lessonDescription = this.lessons[0].fullDescription;

    //получаем экземпляр плеера и ставим видео из 1го урока
    this.player = this.$refs.plyr.player;
    this.player.source = {
      type: "video",
      title: "",
      sources: [
        {
          src: `${this.$config.API_URL}/video/${this.videoKey}.mp4`,
          type: "video/mp4",
          size: 1080,
        },
      ],
      poster: `${this.$config.API_URL}/img/${this.lessons[0].logo}`
    };
    //слушаем загрузку мета видео и получаем продолжительность видео
    this.player.on("loadedmetadata", (event) => {
      const plyr = event.detail.plyr;
      let time = plyr.duration;
      let h = Math.floor(time / 60 / 60);
      let m = Math.floor(time / 60) - h * 60;
      let s = Math.floor(time % 60);
      this.lessonDuration = [
        m.toString().padStart(2, "0"),
        s.toString().padStart(2, "0"),
      ].join(":");
    });

    //слушаем обновление времени показываем прогресс
    this.player.on("timeupdate", (event) => {
      const plyr = event.detail.plyr;
      this.percentProgress =
        parseInt((plyr.currentTime / plyr.media.duration) * 100) || 0;
    });
  },
};
</script>

<style scoped>
</style>