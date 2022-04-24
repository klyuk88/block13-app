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


      <div
      v-if="!saccessMessage"
      class="register-form__content">
        <div class="register-form__title-inner">
          <div class="register-form__title">НАСТРОЙКИ</div>
          <p class="settings-subtitle">
            {{ notification }}
          </p>
          <button id="register-form__btn-close" @click="closePop"></button>
        </div>
        <ErrorNotification />

       <!-- форма настроек  -->
          <form
            v-if="!acceptEmailForm && !changePasswordForm"
            class="js-form form-register-form"
            id="form-register-form"
            novalidate
          >
            <FormInput
              :placeHolder="'E-mail'"
              :type="'email'"
              v-model="inputs.email"
            />
            <a
              class="saveSettings"
              v-if="saveEmail"
              @click.prevent="setEmail"
              href="#"
              >Изменить e-mail</a
            >
            <FormInput
              :placeHolder="'Телефон'"
              :type="'tel'"
              v-model="inputs.phone"
            />
            <a @click.prevent="changePhone" class="saveSettings" v-if="savePhone" href="#"
              >Изменить телефон</a
            >

            <FormInput
              :placeHolder="'***************'"
              :type="'text'"
              :readOnly="true"
            />
            <a class="saveSettings" href="#" @click.prevent="changePasswordForm = true">Изменить пароль</a>
          </form>

          <!-- подтверждение email  -->
          <form
            v-if="acceptEmailForm"
            class="js-form form-register-form"
            id="form-register-form"
            @submit.prevent="sendAcceptMail"
            novalidate
          >
            <FormInput
              :placeHolder="'E-mail'"
              :type="'email'"
              v-model="inputs.email"
            />

            <FormInput
              :placeHolder="'Введите код из письма'"
              :type="'text'"
              v-model="code"
            />

            <button class="register-form__btn btn">
              <span>Подтвердить</span>
            </button>
          </form>

          <!-- смена пароля -->
          <form
            v-if="changePasswordForm"
            class="js-form form-register-form"
            id="form-register-form"
            @submit.prevent="changePassword"
            novalidate
          >
            <FormInput
              :placeHolder="'Введите старый пароль'"
              :type="'password'"
              v-model="oldPassword"
            />
            <FormInput
              :placeHolder="'Введите новый пароль'"
              :type="'password'"
              v-model="newPassword"
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
import SaccessMessage from './SaccessMessage.vue';
export default {
  components: { SaccessMessage },
  data() {
    return {
      saccessMessage: null,
      notification: `Редактирование учетной записи. Нажмите на любой раздел, чтобы начать редактирование.`,
      saveEmail: false,
      savePhone: false,
      acceptEmailForm: false,
      password: null,
      code: null,
      oldPassword: null,
      newPassword: null,
      changePasswordForm: false,
      inputs: {
        email: this.$store.state.login.user.email,
        phone: this.$store.state.login.user.phone,
      },
    };
  },
  methods: {
    async changePassword() {
      await this.$store.dispatch('login/changePassword', {
        newPassword: this.newPassword,
        oldPassword: this.oldPassword
      })
      if(!this.error) {
        this.saccessMessage = `Ваш пароль успешно изменен`
        this.$store.dispatch('')
      } else {
        return;
      }
    },
    async changePhone() {
      await this.$store.dispatch('login/changePhone', {
        phone: this.inputs.phone
      })
      // await this.$store.dispatch('login/user', this.token)

      if(!this.error) {
        this.saccessMessage = `Ваш телефон успешно изменен`

      } else {
        return;
      }
    },
    async setEmail() {
      await this.$store.dispatch("login/setEmail", {
        email: this.inputs.email,
      });
      if (!this.error) {
        this.acceptEmailForm = true;
        this.notification = `Для подтверждения изменения электронного адреса, мы отправили код, на указанную вами электронную почту.`;
      } else {
        return;
      }
    },
    async sendAcceptMail() {
      await this.$store.dispatch("login/acceptMail", {
        email: this.inputs.email,
        code: this.code,
      });
      if (!this.error) {
        this.saccessMessage = `Эл. адрес успешно изменён`
      } else {
        return;
      }
    },

    closePop() {
      this.$store.commit("closeSettings");
      this.$store.commit('login/clearErrors')
    },
  },
  watch: {
    "inputs.email": function (newVal) {
      this.saveEmail = true;
    },
    "inputs.phone": function (newVal) {
      this.savePhone = true;
    },
  },
  computed: {
    user() {
      return this.$store.getters['login/getUser']
    },
    error() {
      return this.$store.getters['login/getError'];
    },
    token() {
      return this.$store.getters['login/getToken']
    }
  },
};
</script>


<style lang="sass" scoped>
.settings-subtitle
  font-size: 14px
  color: #C0C0C080
  margin-top: 20px
  line-height: 150%
  font-weight: 500

.settings-message
  font-size: 14px
  font-weight: 400
  margin-top: 20px
  line-height: 130%

.saveSettings
  transform: translateY(-15px)
  margin-bottom: 10px
  display: inline-block
  text-align: left
</style>
