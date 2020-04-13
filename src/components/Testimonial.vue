<template>
  <div class="testimonial-container">
    <!-- Card -->
    <div id="testimonial-card"
      class="mx-auto"
    >
<!--      <v-card-text class="title font-weight-light">{{ text }}</v-card-text>-->
      <v-card-text class="title font-weight-light" v-html="text"></v-card-text>
      <v-avatar
        size="120"
      >
        <img
          :src="img"
        >
      </v-avatar>
      <v-card-text>{{ name }}</v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    text: String,
    img: String,
    name: String
  }
}
</script>

<style lang="scss" scoped>
.testimonial-container {
  #testimonial-card {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
