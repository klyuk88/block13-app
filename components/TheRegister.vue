<template>
  <!-- REGISTER-FORM -->
  <div id="register-form" class="register-form active">
    <div id="register-form__overlay"></div>
    <div id="register-form__window">

     <SaccessMessage
      v-if="saccessMessage"
      :message="saccessMessage"
      @closeSaccessAlert="closeRegister"
      />

      <div class="register-form__content"
       v-if="!saccessMessage"
      >
        <div class="register-form__title-inner">
          <div class="register-form__title">Регистрация</div>
          <!-- <p class="send_mail_alert" v-if="errorMessage">
            {{ errorMessage }}
          </p> -->
          <button id="register-form__btn-close" @click="closeRegister"></button>
        </div>
        <ErrorNotification />
        <form
          v-if="!saccessMessage"
          class="js-form form-register-form"
          id="form-register-form"
          novalidate="true"
          @submit.prevent="sendForm"
        >
          <FormInput
            :type="'email'"
            :placeHolder="'E-mail'"
            v-model="inputs.email"
          />
          <FormInput
            :type="'tel'"
            :placeHolder="'Телефон'"
            v-model="inputs.phone"
          />
          <FormInput
            :type="'password'"
            :placeHolder="'Пароль'"
            v-model="inputs.password"
          />

          <button class="register-form__btn btn">
            <span>Зарегистрироваться</span>
          </button>
          <div class="register-form__account-have">
            <span>Есть аккаунт? </span>
            <a href="#login" @click="openLogin">Войти</a>
          </div>
          <div class="register-form__personal">
            <span>Входя в систему вы соглашаесть с нашими условиями</span>
            <a href="/Политика_конфендициальности_block13_ru.pdf" target="_blank">Политика конфиденциальности</a>
            <span>и</span>
            <a href="/Пользовательское_соглашение_block13_ru.pdf" target="_blank">Условия использования</a>
          </div>
        </form>

      <!-- подтверждение регистрации -->
        <!-- <form
          v-if="sendFormOk"
          class="js-form form-register-form"
          id="form-register-form"
          @submit.prevent="acceptRegister"
        >
          <FormInput
            :type="'email'"
            :placeHolder="'E-mail'"
            v-model="inputs.email"
          />
          <FormInput
            :type="'text'"
            :placeHolder="'Введите код из письма'"
            v-model="code"
          />
          <button class="register-form__btn btn">
            <span>Зарегистрироваться</span>
          </button>

          <div class="register-form__personal">
            <span>Входя в систему вы соглашаесть с нашими условиями</span>
            <a href="/Политика_конфендициальности_block13_ru.pdf" target="_blank">Политика конфиденциальности</a>
            <span>и</span>
            <a href="/Пользовательское_соглашение_block13_ru.pdf" target="_blank">Условия использования</a>
          </div>
        </form> -->
      </div>
    </div>
  </div>
  <!-- //register-form -->
</template>

<script>
import SaccessMessage from './SaccessMessage.vue';
export default {
  components: { SaccessMessage },
  data() {
    return {
      saccessMessage: null,
      // sendFormOk: false,
      code: null,
      inputs: {
        email: null,
        phone: null,
        password: null,
        news: true,
      },
    };
  },
  computed: {
    error() {
      return this.$store.getters['login/getError'];
    },
  },
  methods: {
    closeRegister() {
      this.$store.commit("closeRegister");
      this.$router.push("");
      this.$store.commit('login/clearErrors')
    },
    async sendForm() {
      await this.$store.dispatch("login/register", this.inputs)
      if (!this.error) {
        this.saccessMessage = `Ваш аккаунт успешно зарегестрирован`
      } else {
        return;
      }
    },
    // async acceptRegister() {
    //   await this.$store.dispatch("login/acceptRegister", {
    //     code: this.code,
    //     email: this.inputs.email,
    //   })
    //   if(!this.error) {
    //     this.saccessMessage = `Ваш аккаунт успешно зарегестрирован`
    //   } else {
    //     return;
    //   }
    // },
    openLogin() {
      this.$store.commit("openLogin");
      this.$store.commit("closeRegister");
    },
  },
};
</script>


<style lang="sass" scoped>
.send_mail_alert
  text-transform: uppercase
  font-weight: 600
  color: #FF4B4B

</style>
