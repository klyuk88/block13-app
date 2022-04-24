<template>
  <div>
    <!-- HEADER -->
    <header class="header" id="header">
      <div class="container">
        <div class="header__inner">
          <nuxt-link to="/" class="header__logo-link">
            <!-- <img src="~/assets/img/bloсk13.png" alt="" /> -->
            <img src="~/assets/img/logo.png" alt="" />
          </nuxt-link>

          <!-- Navigation -->
          <div class="header-nav" id="overlaymenu">
            <nav class="header__nav overlay-menu" id="header__nav">
              <ul class="header__nav-list">
                <li class="header__nav-item">
                  <nuxt-link to="/">Главная</nuxt-link>
                </li>
                <li class="header__nav-item">
                  <nuxt-link to="/beginner" class="header__nav-link"
                    >Инструкция для новичка</nuxt-link>
                </li>
                <li class="header__nav-item">
                  <span>Разделы</span>
                  <ul class="header__nav-change-list">
                    <li class="header__nav-change-item">
                      <nuxt-link to="/academy">Academy</nuxt-link>
                    </li>
                    <li class="header__nav-change-item">
                      <nuxt-link
                        to="/live-trading"
                        class="header__nav-change-link"
                        >Live Trading</nuxt-link
                      >
                    </li>
                    <li class="header__nav-change-item">
                      <nuxt-link
                        to="/private-club"
                        class="header__nav-change-link"
                        >Private Club</nuxt-link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <!-- //Navigation -->
          </div>

          <ul class="mob-nav-item-wrap">
            <li class="mob-nav-item" @click="mobSubMenu = !mobSubMenu">
              <span class="mob-nav-item-title">
                Разделы
                <img
                  src="~/assets/img/header/arrow-header.svg"
                  alt=""
                  :class="{ active: mobSubMenu }"
                />
              </span>
              <ul class="mob-nav-submenu" :class="{ active: mobSubMenu }">
                <li>
                  <nuxt-link to="/academy">Academy</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/live-trading">Live Trading</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/private-club">Private Club</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>

          <!-- Burger -->
          <button class="menu" id="toggle" @click="mobMenuShow">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </button>

          <!-- MOBILE-MENU -->
          <div class="menu-mobile" :class="{ active: mobMenu }">
            <div class="mobile_menu_header">
              <img
                src="~/assets/img/logo.png"
                alt="block13"
                class="mobile_menu_header__logo"
              />
              <img
                src="~/assets/img/modal/btn-close.svg"
                alt=""
                @click="closeMobMenu"
              />
            </div>
            <div class="menu-mobile__wrapper">
              <ul class="menu-mobile__list">
                <li
                  class="menu-mobile__item"
                  v-for="(item, index) in menu"
                  :key="index"
                >
                  <nuxt-link :to="item.slug" class="menu-mobile__link"
                    >{{ item.title }}
                  </nuxt-link>
                </li>
                <li class="menu-mobile__item" v-if="!login">
                  <nuxt-link to="#login">Вход/Регистрация</nuxt-link>
                </li>
              </ul>
            </div>


            <div class="mob_account_wrap" v-if="login">
              <div class="mob_account_wrap_row">
                <span>$ {{ user.balance / 100}}</span>
                <span>|</span>
                <span><nuxt-link to="/profile">Личный кабинет</nuxt-link></span>
              </div>

              <div class="mob_account_wrap_row">
                <span
                  ><a href="!#" @click.prevent="openTopBalance"
                    >Пополнить</a
                  ></span
                >
                <span>|</span>
                <span
                  ><a href="!#" @click.prevent="openSettings"
                    >Настройки</a
                  ></span
                >
              </div>

              <div class="mob_account_wrap_row">
                <span><a target="_blank" href="https://t.me/RobertR13">Тех. поддержка</a></span>
                <span>|</span>
                <span
                  ><a href="!#" @click.prevent="logout" class="logout_link"
                    >ВЫЙТИ</a
                  ></span
                >
              </div>
            </div>
            <div class="menu-mobile__overlay"></div>
          </div>
          <!-- mobile menu -->
          <div class="header_login_info" v-if="login">
            <li class="header_login_account">
              <span class="header_login_account__title"
                >МОЙ АККАУНТ
                <img
                  src="~/assets/img/header/arrow.svg"
                  alt=""
                  class="header_login_account__arrow"
                />
              </span>
              <ul class="header_login_account_menu">
                <li class="header_login_account_item">
                  <nuxt-link to="/profile">Личный кабинет</nuxt-link>
                </li>
                <li class="header_login_account_item header_logout_account">
                  <a href="!#" class="logout_link" @click.prevent="logout"
                    >Выйти из аккаунта</a
                  >
                </li>
              </ul>
            </li>
          </div>

          <div class="header__registration registration" v-else>
            <a href="#login" class="registration__link" @click="popLoginShow"
              >ВОЙТИ / РЕГИСТРАЦИЯ</a
            >
          </div>
        </div>
        <!-- //Header__inner -->
      </div>
      <!-- //Container -->
    </header>
    <!-- //HEADER -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobSubMenu: false,
      mobMenu: false,
      menu: [
        {
          title: "Главная",
          slug: "/",
        },
        {
          title: "Инструкция для новичка",
          slug: "/beginner",
        },

      ],
    };
  },
  watch: {
    $route: function (newVal) {
      setTimeout(() => {
        this.closeMobMenu();
      }, 500);
    },
  },

  computed: {
    login() {
      return this.$store.getters["login/getToken"];
    },
    user() {
      return this.$store.getters["login/getUser"];
    },
  },

  methods: {
    openSettings() {
      this.$store.commit("openSettings");
    },
    openTopBalance() {
      this.$store.commit("openBalance");
    },
    logout() {
      this.$store.commit("login/removeToken");
      this.$router.push("/");
      if (this.mobMenu) {
        setTimeout(() => {
          this.closeMobMenu();
        }, 500);
      }
    },
    openPage() {
      setTimeout(() => {
        this.mobMenu = false;
      }, 500);
    },
    mobMenuShow() {
      this.mobMenu = true;
    },
    closeMobMenu() {
      this.mobMenu = false;
    },
    popLoginShow() {
      this.$store.commit("openLogin");
    },
  },
};
</script>

<style lang="sass" scoped>
.logout_link
  color: #FF4B4B

.mob_account_wrap
  max-width: 576px
  left: 50%
  transform: translateX(-50%)
</style>

