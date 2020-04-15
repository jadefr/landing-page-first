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
          <FooterInfo
            :title="mapaDoSite"
            :items="mapaDoSiteArray"
          />

        <!-- Contato -->
          <FooterInfo
            :title="contato"
            :items="contatoArray"
            id="contato"
          />

        <!-- Footer Logo -->
        <div id="footer-logo">
          <v-lazy
            v-model="isActive"
            :options="{
          threshold: .5
        }"
            min-height="240"
            transition="fade-transition"
          >
            <a href="#">
              <v-img
                class="my-3"
                id="footer-logo-img"
                src="../assets/img/logo.png"
              ></v-img>
            </a>
          </v-lazy>
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
          <p><a href="https://jadeferreira.com.br/" target="_blank">Desenvolvido por Jade Ferreira</a></p>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import FooterInfo from '../components/FooterInfo'
export default {
  name: 'Footer',
  components: { FooterInfo },
  data: () => ({
    mapaDoSite: 'Mapa do Site',
    contato: 'Contato',
    icons: [
      'fab fa-whatsapp',
      'fab fa-facebook',
      'fab fa-instagram',
      'fab fa-linkedin',
      'fab fa-youtube'
    ],
    mapaDoSiteArray: [
      {
        text: 'Sobre nós',
        link: '#sobre-nos'
      },
      {
        text: 'Serviços',
        link: '#servicos'
      },
      {
        text: 'Depoimentos',
        link: '#depoimentos'
      },
      {
        text: 'Política de Privacidade',
        link: '/politica-de-privacidade'
      }
    ],
    contatoArray: [
      {
        text: 'projetolucromaximo@gmail.com',
        link: ''
      },
      {
        text: '(32)998009178',
        link: ''
      },
      {
        text: 'CNPJ: 11.808.611/0001-87',
        link: null
      }
    ],
    isActive: false
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
            /*color: #3a4b40;*/
            color: white;
          }
        }
      }
    }
  }
</style>
