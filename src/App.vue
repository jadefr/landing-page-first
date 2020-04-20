<template>
  <div class="app">
  <v-app>
    <!-- AppBar -->
    <v-app-bar
      app
      dense
      dark
      color="#62050b"
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

    <!-- Router Link -->
    <router-link to="/"></router-link>
    <router-view />

    <!-- Footer -->
    <Footer/>
  </v-app>
  </div>
</template>

<script>
import Footer from './views/Footer'
import AppBarBtn from './components/AppBarBtn'

export default {
  name: 'App',
  components: {
    AppBarBtn,
    Footer
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

<style>

</style>
