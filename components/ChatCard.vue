<template>
  <div class="profile_course_block">
    <h3 class="profile_course_block__title">LIVE TRADING</h3>
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
        <del v-if="chat.discountPercent">$ {{chat.price / 100}}</del> {{ chat.discountPrice / 100 }} $ за сезон
        </p>
      <p class="profile_course_block_about__price">
        Каждый период длится 90 дней
      </p>
    </div>
    <button
      class="btn profile_course_block__btn"
      @click="buyChat"
      :disabled="user.tgChat ? true : false"
    >
      <span v-if="!user.tgChat">Приобрести</span>
      <img
        v-else
        src="~/assets/img/ci_check.svg"
        alt="check_icon"
        class="btn_buy_check"
      />
    </button>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.getters["login/getUser"];
    },
    chat() {
      return this.$store.getters["lessons/getChat"];
    },
  },
  methods: {
    startCallBack: function (x) {
      //   console.log(x);
    },
    endCallBack: function (x) {
      //   console.log(x);
    },

    buyChat() {
      this.$store.commit("popup/setBuyData", {
        title: "Купить чат",
        subtitle: "Каждый период длится 90 дней.",
        price: this.chat.discountPrice,
        type: 4,
      });
      this.$store.commit("popup/openBuy");
    },
  },
  async mounted() {
    await this.$store.dispatch("lessons/getTelegramProduct");
    await this.$store.dispatch("login/user");
  },
};
</script>
