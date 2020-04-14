<template>
<div class="app-bar-btn-container">
  <v-btn
    ref="button"
    target="_blank"
    text
    class="mr-2 d-none d-sm-flex"
    @click="$vuetify.goTo('this.$props.whereTo', linear, 900, -6)"
  >
    <span>{{ itemText }}</span>
  </v-btn>
</div>
</template>

<script>
export default {
  name: 'AppBarBtn',
  props: {
    itemURI: String,
    itemText: String
  }
}
</script>

<style scoped>

</style>
