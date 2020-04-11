<template>
  <div class="service-card-container">
    <!-- Card -->
    <v-row class="text-center white--text"
           :style="{'background-color':background}"
    >
      <v-col cols="12">
        <div class="card-container ma-1">
          <div class="card-heading mx-1">
            <h2>{{ title }}</h2>
          </div>
          <div class="card-img my-3 mx-3">
            <v-img
              max-height="240"
              :src="img"
            ></v-img>
          </div>
          <div class="card-text mx-8">
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
  // data: () => ({
  //   isActive: false
  // })
}
</script>

<style lang="scss" scoped>
  .v-image {
    border-radius: 7px;
  }
</style>
