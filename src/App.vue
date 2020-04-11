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
<!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

<!--      <v-toolbar-title>Title</v-toolbar-title>-->

      <v-spacer></v-spacer>
      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Sobre Nós</span>
      </v-btn>
      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Serviços</span>
      </v-btn>
      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Contato</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <LandingPage/>
    </v-content>
    <!-- Footer -->
<!--    <Footer/>-->
    <FooterTest/>
  </v-app>
</template>

<script>
import LandingPage from './views/LandingPage'
// import Footer from './views/Footer'
import FooterTest from './views/FooterTest'

export default {
  name: 'App',
  components: {
    FooterTest,
    // Footer,
    LandingPage
  }
}
</script>
