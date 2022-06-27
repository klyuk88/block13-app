<template>
<section id="error-section">
    <div>

        <h1 v-if="error.statusCode === 404" class="error-title">
            404
        </h1>
        <span class="error-subtitle">not found</span>
        <p class="error-text">Что-то пошло не так! Страница, которую вы запрашиваете, не существует.
            Возможно, введен некорректный адрес или страница была удалена.</p>
    </div>
    <img src="~/assets/img/404.svg" alt="error_404_icon" class="error-image">

</section>

</template>
<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>
<style lang="sass" scoped>
#error-section
    padding: 350px 15px
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    background: linear-gradient(180deg, #181818 -6.87%, #1F1E21 100%)
    position: relative
    z-index: 10
    @media screen and (max-width: 767px)
        padding: 80px 15px

.error-title
    font-size: 180px
    font-weight: 700
    color: #575759
    position: relative
    z-index: 10
    @media screen and (max-width: 767px)
        font-size: 100px

.error-subtitle
    font-size: 36px
    font-weight: 800
    margin-top: 15px
    color: #575759

.error-text
    font-size: 18px
    font-weight: 600
    line-height: 150%
    color: #7C7C80
    width: 50%
    margin: 0 auto
    margin-top: 70px
    @media (max-width: 576px)
        width: 100%
        font-size: 14px
        font-weight: 400

.error-image
    position: absolute
    left: 0
    top: 0
    z-index: -1
    
</style>