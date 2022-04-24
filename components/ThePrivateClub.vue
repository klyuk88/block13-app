<template>
  <div class="private-club-tab">
    <div class="profile-card-mob">
      <ChanelCard/>
    </div>

    <img
      src="~/assets/img/profile/arrow.svg"
      alt=""
      class="profile_course_block_arrow"
    />
    <div class="live_trading_grid">
      <h6 class="live_trading__title">Private club</h6>
      <p class="live_trading__about">
        Экосистема быстрого роста для трейдеров и инвесторов с крупными депозитами. Клуб дает полный доступ к академии и лайв-трейдингу, а также предоставляет эксклюзивную премиальную аналитику с долгосрочными и высокодоходными инвестидеями. Сюда включается поиск перспективных проектов на ранних стадиях, пресейлы, сферы GameFi и DeFi, а также поддержка и курирование торговли.
      </p>
      <p class="live_trading__current">
        Один сезон длится: <span>90 дней</span>
      </p>
      <!-- добавить active  -->
      <div class="live_trading_link_wrap">
        <input
          v-if="user.tgChannel"
          class="live_trading__link"
          type="text"
          placeholder="Здесь будет ваша ссылка в секретный чат"
          v-model="user.tgChannel"
          readonly
        />
        <input
          v-else
          class="live_trading__link"
          type="text"
          placeholder="Здесь будет ваша ссылка"
          readonly
        />
        <div class="live_trading_link__btn" v-clipboard:copy="user.tgChannel">
          Копировать
        </div>
      </div>
      <nuxt-link to="/private-club">
        <button class="profile-live-trading-btn">
          <span>Больше информации о Private club</span>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // privateLink: this.$store.state.login.user['tgChannel']
    };
  },
  computed: {
    user() {
      return this.$store.getters['login/getUser']
    }
  }

};
</script>
<style lang="sass" scoped>
</style>
