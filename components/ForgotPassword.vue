<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">
      <SaccessMessage
        v-if="sacessMessage"
        :message="sacessMessage"
        @closeSaccessAlert="closePop"
      />

      <div v-if="!sacessMessage" class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</div>
          <p class="send_mail_alert" v-if="sendFormOk">
            Мы отправили вам электронное письмо с кодом для восстановления
            пароля
          </p>
          <button id="register-form__btn-close" @click="closePop"></button>
        </div>
        <!-- запрос на восстановлнеие пароля -->
        <ErrorNotification />
        <form
          v-if="!sendFormOk"
          class="js-form form-register-form"
          id="form-register-form"
          novalidate="true"
          @submit.prevent="sendForm"
        >
          <FormInput
            :type="'email'"
            :placeHolder="'E-mail'"
            v-model="emailInput"
          />

          <button class="register-form__btn btn">
            <span>Восстановить</span>
          </button>
          <div class="register-form__account-have">
            <span>вспомнили свой пароль?</span>
            <a href="#login" @click="openLogin">Войти</a>
          </div>
        </form>

        <!-- восстановлнеие пароля  -->
        <form
          v-if="sendFormOk"
          class="js-form form-register-form"
          id="form-register-form"
          novalidate
          @submit.prevent="acceptSendForm"
        >
          <FormInput
            :type="'password'"
            :placeHolder="'Придумайте новый пароль'"
            v-model="password"
          />

          <FormInput
            :type="'text'"
            :placeHolder="'Введите код из письма'"
            v-model="code"
          />

          <button class="register-form__btn btn">
            <span>Сохранить</span>
          </button>
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
      emailInput: null,
      code: null,
      sendFormOk: false,
      password: null,
      sacessMessage: null,
    };
  },
  computed: {
    error() {
      return this.$store.getters["login/getError"];
    },
  },
  methods: {
    //подтверждение смены пароля
    async acceptSendForm() {
      await this.$store.dispatch("login/acceptRestorePassword", {
        email: this.emailInput,
        password: this.password,
        code: this.code,
      });
      if (!this.error) {
        this.sacessMessage = `Ваш пароль успешно изменён`;
      } else {
        return;
      }
    },
    //запрос на смену пароля
    async sendForm() {
      await this.$store.dispatch("login/restorePassword", this.emailInput);
      if (!this.error) {
        this.sendFormOk = true;
      } else {
        return;
      }
    },
    closePop() {
      this.$store.commit("closeForgotPassword");
      this.$store.commit("login/clearErrors");
    },
    openLogin() {
      this.$store.commit("openLogin");
      this.$store.commit("closeForgotPassword");
    },
  },
};
</script>


