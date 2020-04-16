<template>
    <div class="footer-info-container">
      <v-row
        justify="center"
        tile
      >
        <h3 class="headline font-weight-regular">
         {{ title }}
        </h3>
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
  .footer-info-container {
    @import '../assets/sass/base/_variables.scss';
    h3 {
    font-family: $ubuntu;
    }

    p {
      font-family: $serif;
      &:hover{
        cursor: pointer;
        color: #715f58;
      }
  }
 }
</style>
