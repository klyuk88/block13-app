<template>
    <div class="error-notification-wrap" v-if="errorValidate">
        <img src="~/assets/img/error.svg" class="error-notification-image"/>
        <p class="error-notification-text">{{errorValidate}}</p>
    </div>
</template>
<script>
export default {
    computed: {
        error() {
            return this.$store.getters['login/getError']
        },
        errorCode() {
            return this.$store.getters['login/getErrorCode']
        },
        errorValidate() {
            if(this.errorCode !== 2 && this.errorCode !== 3 && this.errorCode !== 22 && this.errorCode !== 23) {
                return this.error
            }
        }
    }
    
}
</script>
<style lang="sass">
.error-notification-wrap
    display: flex
    align-items: center
    border: 1px solid #FF4B4B
    padding: 21px
    margin-bottom: 27px

.error-notification-text
    font-size: 14px
    margin-left: 18px
    
</style>