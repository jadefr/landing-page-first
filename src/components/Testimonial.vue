<template>
  <div class="testimonial-container">
    <!-- Card -->
    <v-card
      class="mx-auto"
      outlined
    >
      <v-card-title>{{ text }}</v-card-title>
      <v-avatar
        size="120"
      >
        <img
          :src="img"
        >
      </v-avatar>
      <v-card-text>{{ name }}</v-card-text>
    </v-card>
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
  .v-card {
    padding-right: 20%;
    padding-left: 20%;
  }
}
</style>
