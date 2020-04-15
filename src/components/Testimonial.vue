<template>
  <div class="testimonial-container">
    <!-- Card -->
    <div id="testimonial-card"
         class="ma-auto"
    >
      <v-card-text
        :class="[$vuetify.breakpoint.mdAndUp ? 'title font-weight-light' : 'subtitle-1 font-weight-light']"
        v-html="text"
      >
      </v-card-text>
      <v-avatar
        class="mt-5"
        size="120"
      >
        <img
          :src="img"
        >
      </v-avatar>
      <v-card-text v-html="name + position" class="body-1 font-weight-light"></v-card-text>
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

  .testimonial-container {

    #testimonial-card {
      padding-left: 10%;
      padding-right: 10%;

      .v-card-text {
        background-color: black;
      }

      @include sm {
        padding: 0;
        margin: 0;
      }
    }
  }
</style>
