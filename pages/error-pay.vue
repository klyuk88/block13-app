<template>
  <div id="register-form" class="register-form active">
    <div class="pay-notification-overlay"></div>
    <div id="register-form__window">
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">К сожалению оплата не прошла :(</div>
        </div>
          <nuxt-link to="/profile"><button class="register-form__btn btn"><span>Перейти в личный кабинет</span></button></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("login/user");
  },
};
</script>
<style lang="sass">

</style>