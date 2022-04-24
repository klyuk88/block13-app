<template>
  <span class="form-error" v-if="error">{{error}}</span>
</template>
<script>
export default {
  props: {
    typeInput: String,
  },
  computed: {
    error() {
      return this.$store.getters['login/getError']
    }
  },
};
</script>
