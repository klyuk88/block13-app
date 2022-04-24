<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">Оплата не прошла :(</div>
          <button id="register-form__btn-close" @click="closePop"></button>
        </div>
          <button class="register-form__btn btn" @click="closePop"><span>Спасибо</span></button>
      </div>
    </div>
  </div>
  <!-- //register-form -->
</template>

<script>
export default {
    methods: {
        closePop() {
            this.$store.commit('popup/closeErrorPay')
            this.$router.push("");
        }
    }

};
</script>
<style scoped>
</style>