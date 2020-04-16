<template>
  <div class="testimonial-container">
    <!-- Card -->
    <div id="testimonial-card"
         class="ma-auto"
    >
      <p
        :class="[$vuetify.breakpoint.mdAndUp ? 'title font-weight-light' : 'subtitle-1 font-weight-light']"
        v-html="text"
        id="testimonial-text"
      >
      </p>
      <v-avatar
        class="mt-5"
        size="120"
      >
        <img
          :src="img"
        >
      </v-avatar>
<!--      <p v-html="name + position" class="body-1 font-weight-light"></p>-->
      <div class="text-box mt-3">
        <span v-html="name" class="body-1 font-weight-light" id="testimonial-author"></span>
        <span v-html="position" class="body-1 font-weight-light" id="testimonial-position"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    text: String,
    img: String,
    name: String,
    position: String
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/libraries/mixins";
  @import '../assets/sass/base/_variables.scss';

  .testimonial-container {

    #testimonial-card {
      padding-left: 10%;
      padding-right: 10%;

      p {
          font-family: $serif;
        }

      .text-box {
        display: block;
        span {
          font-family: $ubuntu;
          line-height: 0.7rem;
        }
      }

      @include sm {
        padding: 0;
        margin: 0;
      }
    }
  }
</style>
