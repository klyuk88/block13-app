<template>
  <div id="profile_page" v-if="user">
    <section class="beginner-header profile">
      <div class="container">
        <div class="profile-header-content">
          <h2 class="beginner-header__title profile">ЛИЧНЫЙ КАБИНЕТ</h2>
          <div class="profile-btns">
            <div class="balance">
              <span class="balance-title">Мой баланс:</span>
              <div class="balance-count" @click="topBalance">
                <span class="balance-num" v-if="user.balance !== null">$ {{ user.balance / 100 }}</span>
                <span class="topup">Пополнить</span>
              </div>
            </div>
            <a
              title="Обновить баланс"
              href="http://"
              class="restore-balance profile-icon"
              @click.prevent="refreshBalance"
            >
              <img src="~/assets/img/refresh-icon.svg" alt="refresh_icon" :class="{'refreshBalanceAnim': refreshBalanceAnim}" />
            </a>
            <a
              title="Настройки"
              href="!#"
              class="profile-settings profile-icon"
              @click.prevent="openSettings"
            >
              <img src="~/assets/img/profile/settings.svg" alt="settings_icon" />
            </a>
            <a
              title="Тех поддержка"
              href="https://t.me/block13help"
              class="profile-chat profile-icon"
              target="_blank"
            >
              <img src="~/assets/img/profile/chat.svg" alt="chat_icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="discont-message" v-if="user.discount">
      <div class="container">
        <div class="discont-message-wrap">
          <img src="~/assets/img/info.svg" alt="info_icon" class="discont-message-image">
          <p class="discont-message-text">Cкидка используется единоразово, только на один продукт</p>
        </div>
          
      </div>
    </section>


    <ProfileBlocks />

    <section id="profile_tabs_body">
      <div class="container">
        <div class="profile_tabs_header">
          <div class="profile_tabs_wrap">
            <div
              class="profile_tabs__tab"
              :class="{ active: index === currentIndex }"
              @click="changeTab(index)"
              v-for="(tab, index) in profileTabs"
              :key="index"
            >
              {{ tab }}
            </div>
          </div>
          <div class="profile_tabs_header__line">
            <div class="active_line" :class="lineActive"></div>
          </div>
        </div>
        <!-- <img src="~/assets/img/profile/arrow.svg" alt="" class="profile_course_block_arrow"> -->
        <div class="profile_tabs_body">
          <component :is="currentTabContent"></component>
        </div>
      </div>
      <!-- container -->
    </section>
    <img
      v-if="currentIndex === 1"
      src="~/assets/img/live-trade-lk.png"
      alt="live_trading"
      class="profile-tabs-bg"
    />
    <img
      v-if="currentIndex === 2"
      src="~/assets/img/profile/club-tab-bg.png"
      alt="private_club"
      class="profile-tabs-bg"
    />
  </div>
</template>

<script>
export default {
  middleware: "secretLock",
  data() {
    return {
      profileTabs: ["Academy", "LIVE TRADING", "PRIVATE CLUB"],
      currentTabContent: "the-academy",
      currentIndex: 0,
      lineActive: "left",
      balanceBtn: true,
      refreshBalanceAnim: false
    };
  },
  methods: {
    async refreshBalance() {
      this.refreshBalanceAnim = true
      await this.$store.dispatch("login/user");
      setTimeout(() => {
        this.refreshBalanceAnim = false
      }, 1000);
      
      
    },
    topBalance() {
      this.$store.commit("popup/openTopBalanceTg");
    },
    openSettings() {
      this.$store.commit("openSettings");
    },
    changeTab(index) {
      this.currentIndex = this.profileTabs.findIndex(
        (item, idx) => index === idx
      );
      if (this.currentIndex === 0) {
        this.currentTabContent = "the-academy";
        this.lineActive = "left";
      } else if (this.currentIndex === 1) {
        this.currentTabContent = "the-live-trading";
        this.lineActive = "center";
      } else if (this.currentIndex === 2) {
        this.currentTabContent = "the-private-club";
        this.lineActive = "right";
      }
    },
  },
  computed: {
    error() {
      return this.$store.getters["login/getError"];
    },
    user() {
      return this.$store.getters["login/getUser"];
    },
  },
  async mounted() {
    await this.$store.dispatch("login/user");
  },
};
</script>

<style lang="sass">
.balance-count
  position: relative
  cursor: pointer
  .balance-num
    transition: opacity .1s ease-out
    opacity: 1
  .topup
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    opacity: 0
    transition: opacity .1s ease

.balance-count:hover
  .balance-num
    opacity: 0
  .topup
    opacity: 1
</style>