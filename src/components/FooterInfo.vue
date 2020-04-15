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
            ref="button"
            v-for="item in items" :key="item"
            @click="$vuetify.goTo(item.link, linear, 900, -6)"
          >
           {{ item.text }}
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
    items: {
      link: String,
      text: String
    }
  }
}
</script>

<style lang="scss" scoped>
 p {
    &:hover{
      cursor: pointer;
      color: #715f58;
    }
 }
</style>
