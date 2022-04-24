<template>
  <div class="profile_course_block">
    <h3 class="profile_course_block__title">Academy</h3>
    <div class="profile_course_block_count">
      <h4 class="profile_course_block_count__num">20</h4>
      <h5 class="profile_course_block_count__about">уроков</h5>
    </div>
    <div class="profile_course_block_about">
      <p class="profile_course_block_about__text"><del v-if="course.price.discountPercent > 0">$ {{course.price.price / 100}}</del> $ {{ course.price.discountPrice / 100 }} за весь курс</p>
      <p class="profile_course_block_about__price">
        20 уроков с абсолютно новым подходом
      </p>
    </div>
    <button class="btn profile_course_block__btn" @click="buyCourse" :disabled="course.bought ? true : false">
      <span v-if="!course.bought">Купить весь курс</span>
      <img
        v-else
        src="~/assets/img/ci_check.svg"
        alt=""
        class="btn_buy_check"
      />
    </button>
  </div>
</template>
<script>
export default {

  methods: {
    buyCourse() {
      this.$store.commit("popup/setBuyData", {
        title: "Купить весь курс",
        subtitle: `${Math.floor(this.course.duration / 60 / 60)} часа, ${this.lessons.length} уроков`,
        price: this.course.price.discountPrice,
        id: this.course.id,
        type: 1,
      });
      this.$store.commit("popup/openBuy");
    },
  },
  computed: {
    course() {
      return this.$store.getters['lessons/getCourse']
    },
    lessons() {
      return this.$store.getters['lessons/getLessons']
    }


  },
  async mounted() {
    await this.$store.dispatch("lessons/getCourse");
    await this.$store.dispatch('lessons/getLessons')
  },
};
</script>
