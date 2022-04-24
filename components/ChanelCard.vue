<template>
  <div class="profile_course_block">
    <h3 class="profile_course_block__title">private club</h3>
    <div class="profile_course_block_count">
      <client-only>
        <vue-countdown-timer
          @start_callback="startCallBack('event started')"
          @end_callback="endCallBack('event ended')"
          label-position="begin"
          :start-time="'2022-04-23 00:00:00'"
          :end-time="'2022-07-23 00:00:00'"
          :interval="1000"
          :end-text="'Период завершён'"
          :day-txt="'дней'"
          :hour-txt="'часов'"
          :minutes-txt="'мин'"
          :seconds-txt="'сек'"
        >
          <template slot="countdown" slot-scope="scope">
            <div class="profile_course_block_count_days">
              <h4>{{ scope.props.days }}</h4>
              <span></span>
              <h6>{{ scope.props.dayTxt }}</h6>
            </div>
            <div class="profile_course_block_count_time">
              <div class="profile_course_block_count_time__timer">
                <span class="minute">{{ scope.props.hours }}</span
                >:<span class="second">{{ scope.props.minutes }}</span>
              </div>
              <div class="line"></div>
              <h6>Часов</h6>
            </div>
          </template>
        </vue-countdown-timer>
      </client-only>
    </div>
    <div class="profile_course_block_about">
      <p class="profile_course_block_about__text">
        <del v-if="chanel.discountPercent">$ {{chanel.price / 100}}</del> {{ chanel.discountPrice / 100 }} $ за сезон
      </p>
      <p class="profile_course_block_about__price">
        Каждый период длится 90 дней
      </p>
    </div>
    <button class="btn profile_course_block__btn" @click="buyChanel" :disabled="user.tgChannel ? true : false">
      <img
        v-if="user.tgChannel"
        src="~/assets/img/ci_check.svg"
        alt=""
        class="btn_buy_check"
      />
      <span v-else>Приобрести</span>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    startCallBack: function (x) {
    //   console.log(x);
    },
    endCallBack: function (x) {
    //   console.log(x);
    },
    buyChanel() {
      this.$store.commit("popup/setBuyData", {
        title: "Купить канал",
        subtitle: "Каждый период длится 90 дней.",
        price: this.chanel.discountPrice,
        type: 3,
      });
      this.$store.commit("popup/openBuy");
    },
  },
  computed: {
    user() {
      return this.$store.getters['login/getUser']
    },
    chanel() {
      return this.$store.getters['lessons/getChanel']
    }
  },
  async mounted() {
    await this.$store.dispatch("lessons/getTelegramProduct");
    await this.$store.dispatch('login/user')
  },
};
</script>
<style lang="">
</style>
