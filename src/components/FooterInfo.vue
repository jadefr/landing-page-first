<template>
    <div class="footer-info-container">
      <v-row
        justify="center"
        tile
      >
        <v-card-title class="headline font-weight-regular">
         {{ title }}
        </v-card-title>
      </v-row>
      <v-row
        justify="left"
        tile
      >
        <v-card-text class="subtitle-1 font-weight-light">
          <p
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </p>
        </v-card-text>
      </v-row>
    </div>
</template>

<script>
export default {
  name: 'FooterInfo',
  props: {
    title: String,
    items: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
