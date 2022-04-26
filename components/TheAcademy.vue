<template>
  <div>
    <div class="profile-card-mob">
      <CourseCard/>
    </div>

    <img
      src="~/assets/img/profile/arrow.svg"
      alt=""
      class="profile_course_block_arrow"
    />
    <!-- profile_course_blocks -->
      <p class="live_trading__about">
        Обучающий видео-курс прибыльному профессиональному криптотрейдингу на основе институциональных методик. Академия Block 13 формирует полное понимание механики рынка и построена так, чтобы вы научились читать график цены как открытую книгу. Фундамент курса - это концепция "Умные деньги", свечной, объемный и кластерный анализы.
      </p>
    <div class="profile_video" id="video-block" v-if="lessons">
      <div class="profile_video_player">
        <client-only v-if="lessons">
          <vue-plyr ref="plyr">
            <video controls crossorigin playsinline>
              <source size="" src="" type="video/mp4" />
            </video>
          </vue-plyr>
        </client-only>
      </div>
    </div>
    <div class="lessons__left-bottom">
      <div class="lessons__desc profile">
        <div class="lessons__desc-title">{{ lessonTitle }}</div>
        <p class="lessons__desc-text">
          {{ lessonAbout }}
        </p>
        <div class="lessons__desc-parametres">
          <div class="lessons__desc-duration">
            <span class="lessons__desc-duration-name">
              Общее время курса:
            </span>
            <span class="lessons__desc-duration-sum">
              {{courseDuration}} </span>
          </div>
          <!-- <div class="lessons__desc-topic">
            <span class="lessons__desc-topic-name">Тема: </span>
            <div class="lessons__desc-topic-list">
              {{courseTheme}}
            </div>
          </div> -->
        </div>
      </div>
      <div class="lesson_btn" v-if="!course.bought" @click="openBuy">
        <span>КУПИТЬ ВЕСЬ КУРС - <del v-if="course.price.discountPercent">$ {{course.price.price / 100}}</del> $ {{ course.price.discountPrice / 100 }}</span>
      </div>
    </div>
    <!-- lessons__left-bottom -->
    <div class="profile_video_lessons">
      <h3 class="profile_video_lessons__title">
        ОБУЧАЮЩИЙ КУРС ПО ТРЕЙДИНГУ
        </h3>
      <div class="profile_video_lessons_grid">
        <!-- урок  -->
        <div
          class="profile_video_lessons_grid_item"
          v-for="(item, index) in lessons"
          @click="playLesson(item, index)"
          :key="index"
          :class="{
            blocked: item.bought === false && item.price.discountPrice > 0 ? true : false,
            active: activeIndex == index
          }"
        >
          <img
            :src="`${$config.API_URL}/img/${item.logo}`"
            alt=""
            class="profile_video_lessons_grid_item__image"
            v-scroll-to="'#video-block'"
          />
          <p class="profile_video_lessons_grid_item__title">
            {{ index + 1 }}. {{ item.name }}
          </p>
          <div class="blocked_overlay">
            <div class="blocked_overlay_content">
              <img
                :src="`${$config.API_URL}/img/${item.logo}`"
                alt=""
                class="blocked_overlay_content__bg"
              />
              <img
                src="~/assets/img/profile/lock.svg"
                alt=""
                class="block_content_icon"
              />
            </div>
          </div>
        </div>
        <!-- урок  -->
      </div>
    </div>
    <!-- profile_video_lessons -->
    <div class="profile_video_lessons_grid_mob">
      <div
        v-scroll-to="'#video-block'"
        class="profile_video_lessons_grid_mob_item"
        v-for="(item, index) in lessons"
        :key="index"
        :class="{ purchased: item.bought || item.price.price === 0 ? true : false }"
        @click="playLesson(item)"
      >
        <span>{{ index + 1 }}. {{ item.name }}</span>
        <img
          v-if="item.bought || item.price.price === 0"
          src="~/assets/img/profile/play-gold.svg"
          alt=""
          class="profile-video-item-mob-lock"
        />
        <img v-else src="~/assets/img/profile/lock.svg" alt="" />
      </div>
    </div>
    <div class="lesson_btn mob-btn-buy" v-if="!course.bought" @click="openBuy">
      <span>КУПИТЬ ВЕСЬ КУРС - {{ course.price.discountPrice / 100  }}$</span>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      player: "",
      lessonTitle: "",
      lessonAbout: "",
      activeIndex: 0,
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
      return this.$store.getters['lessons/getCourse']
    },
    courseDuration() {
      return this.$store.getters['lessons/getCourseDuration']
    },
  },
  methods: {
    openBuy() {
      this.$store.commit("popup/setBuyData", {
        title: "Купить весь курс",
        subtitle: "102 часа, 12 уроков",
        price: this.course.price.discountPrice,
        id: this.course.id,
        type: 1,
        course: {
          price: {}
        }
      });
      this.$store.commit("popup/openBuy");
    },
    async playLesson(item, index) {
      this.activeIndex = index
      if (item.bought || item.price.discountPrice === 0) {
        await this.$store.dispatch("lessons/getVideoKey", {
          typeVideo: 2,
          elementId: item.id,
        });

        this.lessonTitle = item.name;
        this.lessonAbout = item.fullDescription;
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
          poster: `${this.$config.API_URL}/img/${item.logo}`
        };
      } else {
        this.openBuy()
      }
    },
  },
  async mounted() {
    await this.$store.dispatch("lessons/getCourse");
    //получаем уроки c авторизацией
    await this.$store.dispatch("lessons/getLessons");

    //получаем видео первого урока
    await this.$store.dispatch("lessons/getVideoKey", {
      typeVideo: 2,
      elementId: this.lessons[0].id,
    });

    this.lessonTitle = this.lessons[0].name;
    this.lessonAbout = this.lessons[0].fullDescription;

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
  },
};
</script>

<style lang="sass" scoped>
</style>
