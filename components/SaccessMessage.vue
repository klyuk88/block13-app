<template>
       <div class="saccess_alert_content">
        <img src="~/assets/img/check_send.svg" alt="check-icon" class="saccess_image"/>
        <div class="register-form__title">
          {{message}}
        </div>
        <button class="btn btn_saccess_alert" @click="$emit('closeSaccessAlert')">
          <span>Окей</span>
        </button>
      </div>
</template>


<script>
export default {
    emits: ['closeSaccessAlert'],
    props: {
        message: String
    }
}
</script>

<style lang="sass" scoped>

    
</style>