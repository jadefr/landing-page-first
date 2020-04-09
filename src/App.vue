<template>
  <v-app>
    <!-- AppBar -->
    <v-app-bar
      app
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      color="teal darken-4"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <LandingPage/>
    </v-content>
  </v-app>
</template>

<script>
import LandingPage from './views/LandingPage'

export default {
  name: 'App',

  components: {
    LandingPage
  },

  data: () => ({
    //
  })
}
</script>
