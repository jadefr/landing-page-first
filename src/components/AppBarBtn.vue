<template>
  <div class="app-bar-btn-container">
<!--    @click="$vuetify.goTo('this.$props.itemURL', linear, 900, -6)"-->
    <v-btn
      ref="button"
      target="_blank"
      text
      class="mr-2 d-none d-sm-flex"
      @click="$vuetify.goTo(itemURL, linear, 900, -6)"
    >
     <span>{{ itemText }}</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AppBarBtn',
  props: {
    itemURL: String,
    itemText: String
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/base/_variables.scss';
  span {
    font-family: $ubuntu;
  }
</style>
