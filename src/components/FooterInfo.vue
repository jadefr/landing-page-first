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
        <!-- Mapa do Site -->
        <v-card-text class="subtitle-1 font-weight-light"
          v-if="isMapaDoSite"
        >
          <p
            ref="button"
            v-for="item in items" :key="item"
            @click="$vuetify.goTo(item.link, linear, 900, -6)"
          >
            {{ item.text }}
          </p>
          <a href="/politica-de-privacidade" target="_blank" style="text-decoration: none; color: white"><p>Política de Privacidade</p></a>
        </v-card-text>

        <!-- Contato -->
        <v-card-text class="subtitle-1 font-weight-light"
                     v-if="isContato"
        >
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
  },
  data () {
    return {
      isPrivacyPolicy: false,
      isMapaDoSite: false,
      isContato: false
    }
  },
  created () {
    for (let i = 0; i < this.$props.items.length; i++) {
      if (this.$props.items[i].text === 'Política de Privacidade') {
        this.isPrivacyPolicy = true
      }
    }
    if (this.$props.title === 'Mapa do Site') {
      this.isMapaDoSite = true
    }
    if (this.$props.title === 'Contato') {
      this.isContato = true
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
