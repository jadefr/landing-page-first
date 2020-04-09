<template>
  <div class="service-card-container">
    <!-- Card -->
    <v-row class="text-center"
           :style="{'background-color':background}"
    >
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
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: String,
    img: String,
    text: String,
    background: String
  }
}
</script>

<style lang="scss" scoped>
  .v-image {
    border-radius: 10px;
  }
</style>
