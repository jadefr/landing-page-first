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
      <AppBarBtn
        v-for="(obj, key) in items" :key="key"
        :item-u-r-l="obj.itemURL"
        :item-text="obj.itemText"
      />
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
import AppBarBtn from './components/AppBarBtn'

export default {
  name: 'App',
  components: {
    AppBarBtn,
    Footer,
    LandingPage
  },
  data () {
    return {
      items: [
        {
          itemURL: '#sobre-nos',
          itemText: 'Sobre Nós'
        },
        {
          itemURL: '#servicos',
          itemText: 'Serviços'
        },
        {
          itemURL: '#depoimentos',
          itemText: 'Depoimentos'
        },
        {
          itemURL: '#contato',
          itemText: 'Contato'
        }
      ]
    }
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
    },
    appBarItem (obj) {

    }
  }
}
</script>
