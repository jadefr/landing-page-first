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
        <v-col class="text-center" cols="12">
          <h1 class="display-4 font-weight-regular mb-4">Projeto Lucro Máximo</h1>
          <h4 class="subheading mt-4">Consultoria agropecuária</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- Serviços -->
    <section id="servicos">
      <!-- Title -->
      <v-row class="text-center">
        <v-col class="mb-4 mt-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Serviços
          </h1>
        </v-col>
      </v-row>
      <!-- Card -->
      <ServiceCard
        v-for="(obj, key) in items" :key="key"
        :background="color(obj.color)"
        :title="obj.title"
        :img="img(key)"
        :text="obj.text"
      />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ServiceCard from '../components/ServiceCard'

export default {
  name: 'LandingPage',
  components: {
    ServiceCard
  },
  data () {
    return {
      items: [
        {
          title: 'Assistência Técnica Mensal',
          text: 'Consultorias semanais ou quinzenais na área da pecuária de leite e/ou pecuária de corte',
          color: 'blue'
        },
        {
          title: 'Projetos pontuais de Pastejo Rotacionado Fertirrigado',
          text: 'Utilização de dejetos do curral nas pastagens via motobomba ou gravidade, \n' +
            'visando o aumento da fertilidade do solo e da produtividade da forrageira escolhida',
          color: 'red'
        },
        {
          title: 'Projetos de Crédito Rural',
          text: 'Projetos para o produtor na Caixa Econômica Federal, Banco do Brasil ou Sicoob',
          color: 'yellow'
        },
        {
          title: 'Cursos Online',
          text: 'Oferecemos conhecimento técnico aos produtores e trabalhadores rurais e capacitação dos técnicos ligados ao meio rural,  \n' +
            'com o intuito de levar mais tecnologia e conhecimento ao campo.\n',
          color: 'orange'
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

      if (obj.includes('blue')) {
        color = 'blue'
      } else if (obj.includes('red')) {
        color = 'red'
      } else if (obj.includes('yellow')){
        color = 'yellow'
      } else {
        color = 'orange'
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

      h1 {
        color: white;
        opacity: 1;
        filter: initial;
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

    .blue {
      background-color: blue;
    }

    .red {
      background-color: red;
    }

    .yellow {
      background-color: yellow;
    }

    .orange {
      background-color: orange;
    }
  }
</style>
