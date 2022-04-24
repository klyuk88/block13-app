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
          <!-- <p class="balance-top-subtitle">
            1$ = 1 монете внутреннего кошелька
          </p> -->
          <button id="register-form__btn-close" @click="closePop"></button>
        </div>
        <ErrorNotification />
        <form
          class="js-form form-register-form"
          id="form-register-form"
          @submit.prevent="sendForm"
        >
          <FormInput
            :placeHolder="'Укажите нужную сумму — $'"
            :type="'text'"
            v-model="balance"
          />
          <button class="register-form__btn btn"><span>Пополнить</span></button>
           
        </form>
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
        saccessMessage: null
    };
  },
  methods: {
    async sendForm() {
      const windowReference = window.open();
      await this.$store.dispatch('login/payBalance', {
        // type: 'courses_free',
        type: 'freecassa',
        count: this.balance * 100
      })
     
      if(!this.error) {
         windowReference.location = this.payData.url;
        this.closePop()
      } else {
        return;
      }
    },
    closePop() {
      this.$store.commit("closeBalance");
    },
  },
  computed: {
    error() {
      return this.$store.getters['login/getError']
    },
    payData() {
      return this.$store.state.login.payData
    }
  },
};
</script>


<style lang="sass" scoped>
.balance-top-subtitle
    font-size: 15px
    margin-top: 25px
</style>
