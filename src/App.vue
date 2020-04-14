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
      <!-- Icon -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon
            id="nav-icon"
            class="d-sm-none"
            v-on="on"
          ></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(obj, key) in items" :key="key"
            @click="$vuetify.goTo(obj.itemURL, linear, 900, -6)"
          >
            <v-list-item-title>{{ obj.itemText }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <!-- Nav items -->
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
  }
}
</script>
