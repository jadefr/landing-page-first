<template>
<div class="service-card-view-container">
  <!-- Card -->
  <v-col cols="12">
    <div class="card-container ma-1">
      <div class="card-heading mx-1">
        <h2>{{ title }}</h2>
      </div>
      <div class="card-img">
        <v-img
          :src="img"
        ></v-img>
      </div>
      <div class="card-text ma-1">
        <p>{{ text }}</p>
      </div>
    </div>
  </v-col>
</div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: String,
    img: String,
    text: String
  }
}
</script>

<style scoped>

</style>
