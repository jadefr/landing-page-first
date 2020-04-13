<template>
  <div class="footer-view-container">
    <v-card
      flat
      tile
      dark
      class="white--text text-center"
    >

      <div id="footer-container">
        <!-- Footer info -->
        <div id="footer-info">
          <!-- Text -->
          <div class="footer-text">

            <!-- Mapa do Site -->
            <div id="mapa-do-site">
              <v-row
                justify="center"
                tile
              >
                <v-card-title>
                  Mapa do Site
                </v-card-title>
              </v-row>
              <v-row
                justify="center"
                tile
              >
                <v-card-text>
                  <p>Sobre nós</p>
                  <p>Serviços</p>
                  <p>Depoimentos</p>
                </v-card-text>
              </v-row>
            </div>

            <!-- Contato -->
            <div id="contato">
              <v-row
                justify="center"
              >
                <v-card-title>
                  Contato
                </v-card-title>
              </v-row>
              <v-row
                justify="center"
              >
                <v-card-text>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor.</p>
                  <p>Lorem ipsum dolor sit.</p>
                </v-card-text>
              </v-row>
            </div>
          </div>
        </div>
        <!-- Footer Logo -->
        <div id="footer-logo">
            <v-img
              class="my-3"
              id="footer-logo-img"
              src="../assets/img/logo.png"
            ></v-img>
          </div>
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
      'fab fa-facebook',
      'fab fa-instagram',
      'fab fa-linkedin',
      'fab fa-whatsapp'
    ]
  })
}
</script>

<style lang="scss" scoped>
  .footer-view-container {

    #footer-container {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-areas: "footer-info footer-logo";

      #footer-logo {
        position: relative;
        top: 25%;
        right: 0;
        #footer-logo-img {
          width: 50%;
        }
      }
    }

    #credits{
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
