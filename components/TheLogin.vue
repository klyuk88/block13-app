<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <div class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">Вход в аккаунт</div>
          <button id="register-form__btn-close" @click="closeLogin"></button>
        </div>
        <ErrorNotification />
        <form
          class="js-form form-register-form"
          id="form-register-form"
          @submit.prevent="sendForm"
          novalidate="true"
        >
          <FormInput
            :placeHolder="'E-mail'"
            :type="'email'"
            v-model="inputs.email"
          />
          <FormInput
            :placeHolder="'Пароль'"
            :type="'password'"
            v-model="inputs.password"
          />
          
          <button class="register-form__btn btn"><span>Войти</span></button>
          <div class="register-form__account-have">
            <span>Нет аккаунта? </span
            ><a href="#register" @click="openRegister">Зарегистрироваться</a>
          </div>
          <a
            href="!#"
            class="register-form__pass-forget"
            @click.prevent="forgetPasswordShow"
            >Забыли пароль?</a
          >
          <div class="register-form__personal">
            <span>Входя в систему вы соглашаесть с нашими условиями</span>
            <a href="/Политика_конфендициальности_block13_ru.pdf" target="_blank">Политика конфиденциальности</a>
            <span>и</span>
            <a href="/Пользовательское_соглашение_block13_ru.pdf" target="_blank">Условия использования</a>
          </div>
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
      inputs: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    forgetPasswordShow() {
      this.$store.commit("closeLogin");
      this.$router.push("");
      this.$store.commit("openForgotPassword");
    },
    closeLogin() {
      this.$store.commit("closeLogin");
      this.$router.push("");
      this.$store.commit("login/clearErrors");
    },
    openRegister() {
      this.$store.commit("openRegister");
      this.$store.commit("closeLogin");
    },
    async sendForm() {
        // console.log(pwd);
        await this.$store.dispatch("login/login", this.inputs);
        if (!this.errorMessage) {
          this.inputs.email = null;
          this.inputs.password = null;
          this.$store.commit("login/clearErrors");
          this.closeLogin();
        } else {
          return;
        }
    },
  },
  computed: {
    errorMessage() {
      return this.$store.getters["login/getError"];
    },
  },
};
</script>
<style scoped>
</style>