<template>
  <div class="landing-page-view-container">

    <!-- Parallax -->
    <v-parallax
      dark
      height="600"
      src="../assets/img/bg.jpeg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12" id="parallax-text">
          <h1 class="display-4 font-weight-regular mb-4">Projeto Lucro Máximo</h1>
          <h4 class="subheading mt-4">Consultoria agropecuária</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Sobre Nós -->
    <section id="sobre-nos">
      <v-row class="text-center my-4 mx-10">
        <!-- Text -->
        <v-col>
          <h1 class="mb-2">Sobre Nós</h1>
          <p>
            O Projeto Lucro Máximo surgiu em 2010, com o intuito de difundir a tecnologia no campo, levando mais
            conhecimento e tecnologia ao produtor.
          </p>
          <p>
            O projeto é dirigido por Adilson Esquerdo Ferreira, zootecnista, formado pela Universidade Federal Rural do
            Rio de Janeiro em 2007,
            além de contar com o auxílio de outros profissionais da área agrícola (Médico Veterinário, Agrônomo, Técnico
            Agrícola e Administrador de empresas).
          </p>
        </v-col>
        <!-- Image -->
        <v-img
          src="../assets/img/sobreNos.jpeg"
        ></v-img>
      </v-row>
    </section>

    <!-- Serviços -->
    <section id="servicos">
      <!-- Card -->
      <ServiceCard
        v-for="(obj, key) in services" :key="key"
        :background="color(obj.color)"
        :title="obj.title"
        :img="img(key)"
        :text="obj.text"
      />
    </section>

    <!-- Depoimentos -->
    <section id="depoimentos">
      <v-row class="text-center my-4 mx-10">
        <v-col>
          <!-- Title -->
          <h1 class="mb-2">Depoimentos</h1>

          <!-- Carousel -->
          <v-carousel
            light
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(obj, key) in testimonials" :key="key"
            >
              <Testimonial
                :text="obj.text"
                :img="obj.img"
                :name="obj.name"
              />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'

export default {
  name: 'LandingPage',
  components: {
    Testimonial,
    ServiceCard
  },
  data () {
    return {
      services: [
        {
          title: 'Assistência Técnica Mensal',
          text: 'Consultorias semanais ou quinzenais na área da pecuária de leite e/ou pecuária de corte',
          color: 'maroon'
        },
        {
          title: 'Projeto de Pastejo',
          text: 'Utilização de dejetos do curral nas pastagens via motobomba ou gravidade, \n' +
              'visando o aumento da fertilidade do solo e da produtividade da forrageira escolhida',
          color: 'green'
        },
        {
          title: 'Projeto de Crédito Rural',
          text: 'Projetos para o produtor na Caixa Econômica Federal, Banco do Brasil ou Sicoob',
          color: 'maroon'
        },
        {
          title: 'Curso Online',
          text: 'Oferecemos conhecimento técnico aos produtores e trabalhadores rurais e capacitação dos técnicos ligados ao meio rural,  \n' +
              'com o intuito de levar mais tecnologia e conhecimento ao campo.\n',
          color: 'green'
        }
      ],
      testimonials: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, reprehenderit, vero! Corporis ipsam laborum modi omnis pariatur possimus ut voluptatem. ',
          img: 'https://cdn.vuetifyjs.com/images/john.jpg',
          name: 'John Doe'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, reprehenderit, vero! Corporis ipsam laborum modi omnis pariatur possimus ut voluptatem. ',
          img: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          name: 'Mary'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, reprehenderit, vero! Corporis ipsam laborum modi omnis pariatur possimus ut voluptatem. ',
          img: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          name: 'Joseph'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, reprehenderit, vero! Corporis ipsam laborum modi omnis pariatur possimus ut voluptatem. ',
          img: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          name: 'James'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, reprehenderit, vero! Corporis ipsam laborum modi omnis pariatur possimus ut voluptatem. ',
          img: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          name: 'Peter'
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'imgs'
    ])
  },
  mounted () {
  },
  methods: {
    img (key) {
      let img = ''
      for (let i = 0; i < this.imgs.length; i++) {
        img = this.imgs[i]
        if (key === i) {
          return img
        }
      }
    },
    color (obj) {
      let color = ''
      console.log(obj)

      if (obj.includes('maroon')) {
        color = '#715f58'
      } else {
        color = '#004d40'
      }
      return color
    }
  }
}
</script>

<style lang="scss" scoped>
  .landing-page-view-container {

    .v-parallax {
      opacity: 0.8;
      filter: brightness(85%);

      #parallax-text {
        opacity: 1;

        h1 {
          color: white;
          filter: initial;
        }
      }
    }

    #sobre-nos {
      .v-image {
        border-radius: 7px;
      }
    }

    #servicos {
      background-color: white;

      .card-container {

        .card-heading {
          text-align: center;
        }
      }
    }
  }
</style>
