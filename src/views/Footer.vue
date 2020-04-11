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
          <v-card-text>
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

          <!-- Text -->
          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }}
            <p>Desenvolvido por <a href="">Jade Ferreira</a> </p>
          </v-card-text>
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
