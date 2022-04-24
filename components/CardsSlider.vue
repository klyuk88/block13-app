<template>
  <client-only>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
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
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </client-only>
</template>

<script>
export default {
  props: {
    triggers: Array,
  },
  data() {
    return {
      swiperOptions: {
        loop: false,
        pagination: {
          el: ".swiper-pagination",
        },
        spaceBetween: 12,
        // breakpoints: {
        //   320: {
        //     slidesPerView: 1,
        //   },
        //   760: {
        //     slidesPerView: 2,
        //   },
        // },
      },
    };
  },
};
</script>