<template>
  <v-app>
    <!-- AppBar -->
    <v-app-bar
      app
      dense
      dark
      color="teal darken-4"
      id="navbar"
    >
      <v-app-bar-nav-icon
        id="nav-icon"
        class="d-sm-none"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn
        ref="button"
        target="_blank"
        text
        class="mr-2 d-none d-sm-flex"
        @click="$vuetify.goTo('#sobre-nos', linear, 900, -6)"
      >
        <span>Sobre Nós</span>
      </v-btn>
      <v-btn
        ref="button"
        target="_blank"
        text
        class="mr-2 d-none d-sm-flex"
        @click="$vuetify.goTo('#servicos', linear, 900, -6)"
      >
        <span>Serviços</span>
      </v-btn>
      <v-btn
        ref="button"
        target="_blank"
        text
        class="mr-2 d-none d-sm-flex"
        @click="$vuetify.goTo('#depoimentos', linear, 900, -6)"
      >
        <span>Depoimentos</span>
      </v-btn>
      <v-btn
        ref="button"
        target="_blank"
        text
        class="mr-2 d-none d-sm-flex"
        @click="$vuetify.goTo('#contato', linear, 900, -6)"
      >
        <span>Contato</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <LandingPage/>
    </v-content>
    <!-- Footer -->
    <Footer/>
  </v-app>
</template>

<script>
import LandingPage from './views/LandingPage'
import Footer from './views/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    LandingPage
  },
  /* eslint-env jquery */
  methods: {
    myFunction () {
      var x = document.getElementById('nav-icon')
      if (x.className === 'nav-icon') {
        x.className += ' responsive'
      } else {
        x.className = 'nav-icon'
      }
    }
  }
}
</script>
