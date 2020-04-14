<template>
  <div class="footer-view-container">
    <v-card
      flat
      tile
      dark
      class="white--text text-center"
    >

      <div id="footer-container">
        <v-col
          align="center"
          class="pt-6 pb-4"
        >
        <!-- Mapa do Site -->
        <div id="mapa-do-site">
          <v-row
            justify="center"
            tile
          >
            <v-card-title class="headline font-weight-regular">
              Mapa do Site
            </v-card-title>
          </v-row>
          <v-row
            justify="left"
            tile
          >
            <v-card-text class="subtitle-1 font-weight-light">
              <p>Sobre nós</p>
              <p>Serviços</p>
              <p>Depoimentos</p>
              <p>Política de Privacidade</p>
            </v-card-text>
          </v-row>
        </div>

        <!-- Contato -->
        <div id="contato">
          <v-row
            justify="center"
          >
            <v-card-title class="headline font-weight-regular">
              Contato
            </v-card-title>
          </v-row>
          <v-row
            justify="center"
          >
            <v-card-text class="subtitle-1 font-weight-light">
              <p>projetolucromaximo@gmail.com</p>
              <p>(32)998009178</p>
              <p>CNPJ: 11.808.611/0001-87</p>
            </v-card-text>
          </v-row>
        </div>

        <!-- Footer Logo -->
        <div id="footer-logo">
          <v-img
            class="my-3"
            id="footer-logo-img"
            src="../assets/img/logo.png"
          ></v-img>
        </div>
      </v-col>
      </div>

      <!-- Icons -->
      <div class="footer-icons">
        <v-card>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="ma-4"
            icon
          >
            <!-- Icons -->
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card>
      </div>

      <!-- Divider -->
      <v-divider></v-divider>

      <!-- Credits -->
      <v-card>
        <v-card-text class="white--text mt-1 font-weight-light" id="credits">
          <p>Desenvolvido por <a href="">Jade Ferreira</a></p>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      'fab fa-whatsapp',
      'fab fa-facebook',
      'fab fa-instagram',
      'fab fa-linkedin',
      'fab fa-youtube'
    ]
  })
}
</script>

<style lang="scss" scoped>
  .footer-view-container {
    #footer-container {
      #footer-logo-img {
        height: 240px;
        width: 240px;
      }
    }
    #credits {
      p {
        color: #715f58;

        a {
          text-decoration: none;
          color: inherit;

          &:hover {
            color: #3a4b40;
          }
        }
      }
    }
  }
</style>
