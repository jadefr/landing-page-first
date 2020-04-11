<template>
    <div class="footer-view-container">
      <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          class="white--text text-center"
        >
          <v-row
            justify="center"
            no-gutters
          >
          <v-card-text>

            <!-- Text -->
            <div class="footer-text">
              <!-- Mapa do Site -->
              <div id="mapa-do-site" class="white--text pt-0">
                <v-card-title class="align-center">
                  <p>Mapa do Site</p>
                </v-card-title>
                <v-card-text>
                  <p>Sobre Nós</p>
                  <p>Serviços</p>
                  <p>Depoimentos</p>
                </v-card-text>
              </div>
              <!-- Contato -->
              <div id="contato" class="white--text pt-0">
                <v-card-title class="align-center">
                  <p>Mapa do Site</p>
                </v-card-title>
                <v-card-text>
                  <p>Sobre Nós</p>
                  <p>Serviços</p>
                  <p>Depoimentos</p>
                </v-card-text>
              </div>
            </div>

            <!-- Icon Box -->
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              icon
            >
              <!-- Icons -->
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }}
            <p>Desenvolvido por <a href="">Jade Ferreira</a> </p>
          </v-card-text>
          </v-row>
        </v-card>
      </v-footer>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-instagram',
      'fab fa-linkedin',
      'fab fa-whatsapp'
    ],
    links: [
      {
        icon: 'fab fa-facebook',
        link: 'https://www.facebook.com/LucroMaximo/'
      },
      {
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/projetolucromaximo/'
      },
      {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/adilson-esquerdo-ferreira-4b1431163/'
      },
      {
        icon: 'fab fa-whatsapp',
        link: 'https://wa.me/553298009178'
      }
    ]
  })
}
</script>

<style scoped>

</style>
