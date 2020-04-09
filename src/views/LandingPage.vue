<template>
  <div class="landing-page-view-container">

    <!-- Parallax -->
    <v-parallax
      dark
      height="600"
      src="../assets/img/img3.jpeg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-4 font-weight-regular mb-4">Projeto Lucro Máximo</h1>
          <h4 class="subheading mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
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
      <v-col cols="12">
        <div class="card-container ma-1">
          <div class="card-heading mx-1">
            <h2>Elaboração de Projetos</h2>
          </div>
          <div class="card-img">
            <v-img
              src="../assets/img/img5.jpeg"
            ></v-img>
          </div>
          <div class="card-text ma-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloribus hic incidunt sequi totam
              vel?</p>
          </div>
        </div>
      </v-col>
      <!-- v-for -->
      <ServiceCard
        v-for="(obj, key) in items" :key="key"
        :title="obj.title"
        :img="img(obj)"
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
          title: 'Projeto 1',
          img: '../assets/img/img5.jpeg',
          text: 'Texto do Projeto 1'
        },
        {
          title: 'Projeto 2',
          img: '../assets/img/img2.jpeg',
          text: 'Texto do Projeto 2'
        },
        {
          title: 'Projeto 3',
          img: '../assets/img/img3.jpeg',
          text: 'Texto do Projeto 3'
        },
        {
          title: 'Projeto 4',
          img: '../assets/img/img4.jpeg',
          text: 'Texto do Projeto 4'
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
    img (obj) {
      let img = ''
      for (let i = 0; i < this.imgs.length; i++) {
        img = this.imgs[i]
        if (img.toString().includes(i)) {
          return img
        }
      }
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

        .card-img {
          .v-image {
            border-radius: 10px;
          }
        }
      }
    }
  }
</style>
