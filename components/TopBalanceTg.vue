<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
    
    <SaccessMessage
      v-if="saccessMessage"
      :message="saccessMessage"
      @closeSaccessAlert="closePop"
      />
      <div class="register-form__content"
      v-if="!saccessMessage"
      >
        <div class="register-form__title-inner">
          <div class="register-form__title">ПОПОЛНИТЬ КОШЕЛЕК</div>
          <p class="balance-top-subtitle">
            Для пополнения кошелька, скопируйте ваш ID
          </p>
          <div class="id-wrap"><h2 class="id-title" v-if="user">{{user.additionalId}}</h2><img src="~/assets/img/copy.svg" alt="copy_icon" v-clipboard:copy="user.additionalId" v-clipboard:success="clipboardSuccessHandler" :class="{'id-wrap-icon': true, copied: isCopied}"></div>
          
          <button id="register-form__btn-close" @click="closePop"></button>
        </div>
        <a href="https://t.me/Block13_pay_bot" target="_blank" rel="noopener noreferrer"><button class="register-form__btn btn"><span>Пополнить</span></button></a>
      </div>
    </div>
  </div>
  <!-- //register-form -->
</template>

<script>
export default {
  data() {
    return {
        balance: null,
        saccessMessage: null,
        isCopied: false
    };
  },
  methods: {
    closePop() {
      this.$store.commit("popup/closeBalanceTg");
      this.isCopied = false
    },
    clipboardSuccessHandler() {
      this.isCopied = true
    }
  },
  computed: {
    error() {
      return this.$store.getters['login/getError']
    },
    user() {
        return this.$store.getters['login/getUser']
    }
  },
};
</script>


<style lang="sass" scoped>
.balance-top-subtitle
    font-size: 15px
    margin-top: 25px
.id-title
  text-transform: none!important
</style>
