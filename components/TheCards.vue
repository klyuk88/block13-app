<template>
<div class="container">
<div class="advantages__cards">
    <div
      class="advantages__card"
      v-for="(item, index) in triggers"
      :key="index"
    >
      <div class="advantages__card-inner">
        <h3 class="advantages__card-title">{{ item.title }}</h3>
        <div class="trigger-line"></div>
        <p class="advantages__card-text">
          {{ item.about }}
        </p>
      </div>
    </div>
  </div>
  <div class="advantages-mob">
    <CardsSlider :triggers="triggers" />
  </div>
</div>
  
</template>

<script>
export default {
  props: {
    triggers: Array,
  },
};
</script>