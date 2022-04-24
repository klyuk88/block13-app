<template>
<div>
  <div class="input_wrapper">
    <!-- v-mask="type === 'tel' ? '' : ''" -->
    <input
      :class="{ 'error': !!errorValidate }"
      :type="typeInput"
      :placeholder="placeHolder"
      :value="value"
      :readonly="readOnly"
      @input="$emit('input', $event.target.value)"
    />
    <svg
      v-if="typePassword"
      class="password-icon"
      @click="passwordShow"
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14.0005 8.34057 13.943 8.67873 13.83 9L10 5.17C10.3213 5.05698 10.6594 4.99949 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.1839 10.0732 19.7969 11.8727 18 13.19L16.58 11.76C17.9629 10.8034 19.0782 9.50906 19.82 8C19.0116 6.34994 17.7564 4.95977 16.1973 3.9875C14.6381 3.01524 12.8375 2.49988 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C2.98844 9.65006 4.24357 11.0402 5.80273 12.0125C7.36189 12.9848 9.16254 13.5001 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C10.0242 10.9254 9.37482 10.6149 8.87997 10.12C8.38512 9.62518 8.07458 8.97584 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z"
        :fill="showPassword ? '#fff' : '#575759'"
      />
    </svg>
  </div>
  <span class="form-error" v-if="errorValidate">{{errorValidate}}</span>
</div>

</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeHolder: String,
    value: [String, Number],
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPassword: false,
      typePassword: false,
      typeInput: this.$props.type,
    };
  },
  watch: {
    type: function (newVal) {
      this.typeInput = newVal
      if (newVal === "password") {
      this.typePassword = true;
    } else {
      this.typePassword = false;
    }
    }
  },

  methods: {
    passwordShow() {
      this.showPassword = !this.showPassword;
      if (this.showPassword) {
        this.typeInput = "text";
      } else {
        this.typeInput = this.$props.type;
      }
    },
  },
  computed: {
    error() {
      return this.$store.getters['login/getError']
    },
    errorCode() {
      return this.$store.getters['login/getErrorCode']
    },
    errorValidate() {
      //E-mail не указан
      if(this.errorCode === 2 && this.typeInput === 'email') {
        return this.error
      }
      //Пароль не указан
      if(this.errorCode === 3 && this.typeInput === 'password') {
        return this.error
      }
      //Неверное значение e-mail
      if(this.errorCode === 22 && this.typeInput === 'email') {
        return this.error
      }
      //Неверное значение номера телефона
      if(this.errorCode === 23 && this.typeInput === 'tel') {
        return this.error
      }
    }

  },
  mounted() {
    if (this.$props.type === "password") {
      this.typePassword = true;
    } else {
      this.typePassword = false;
    }
  },
};
</script>
<style lang="sass">
.input_wrapper
  width: 100%
  position: relative
  margin-bottom: 25px
  input
    background: #2D2D2F
    border: 1px solid #8F8F8F
    border-radius: 18px
    padding: 20px
    color: #fff
    text-transform: uppercase
    font-size: 14px
    width: 100%
    transition: all .2s ease
    input::placeholder
      text-transform: uppercase
      font-size: 14px
    input:focus
      border-color: #fff

.input_wrapper
  input.error
    border: 1px solid #FF4B4B
    color: #FF4B4B
    margin-bottom: 0.5rem
    transition: all .2s ease

.password-icon
  position: absolute
  right: 15px
  cursor: pointer
  top: 50%
  transform: translateY(-50%)
</style>

