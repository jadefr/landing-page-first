<template>
  <div class="landing-page-view-container">
    <!-- Header -->
    <section class="header">
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center px-4" id="header-text">
          <h1
            :class="[$vuetify.breakpoint.mdAndUp ? 'display-4 font-weight-medium mb-4' : 'display-3 font-weight-medium mb-4']"
          >
            Lorem Ipsum
          </h1>
          <h4
            :class="[$vuetify.breakpoint.mdAndUp ? 'display-1 font-regular mt-4' : 'headline font-regular mt-4']"
          >
            consectetur adipisicing elit

          </h4>
          <v-btn
            class="mt-5"
            outlined
            dark
            large
            @click="$vuetify.goTo('#sobre-nos', linear, 900, -6)"
          >
            Conheça
          </v-btn>
        </v-col>
      </v-row>
    </section>

    <!-- Sobre Nós -->
    <section id="sobre-nos">
      <v-row justify="center" class="text-center my-4 mx-3">
        <v-col class="col-sm-12 col-md-10">
          <!-- Title -->
          <h1
            :class="[$vuetify.breakpoint.mdAndUp ? 'display-1 font-weight-light mb-9' : 'headline font-weight-light mb-9']"
          >
            Sobre Nós
          </h1>
          <div class="sobre-nos-content">
            <!-- Text -->
            <p
              :class="[$vuetify.breakpoint.mdAndUp ? 'title font-weight-light' : 'subtitle-1 font-weight-light']"
            >
              Aut consequatur cumque deleniti, eligendi enim fugit in ipsum iusto laudantium, modi nam odio officia
              quibusdam ratione sit sunt vero? Ab accusantium asperiores assumenda, beatae, eius enim, est excepturi
              itaque nobis nulla omnis pariatur quo voluptatibus.
            </p>
            <p
              :class="[$vuetify.breakpoint.mdAndUp ? 'title font-weight-light' : 'subtitle-1 font-weight-light']"
            >
              Doloribus eum odio repellat? Amet asperiores deleniti hic laudantium rerum sequi ut voluptate? Animi
              asperiores, at culpa dignissimos exercitationem, inventore laborum maxime nam necessitatibus officia
              pariatur quos recusandae rerum sunt, veniam? Ad aliquid blanditiis deleniti dolor explicabo iusto,
              laboriosam non praesentium quas quis reiciendis rem voluptas voluptates.
            </p>
            <!-- Image -->
            <div id="footer-logo">
              <v-col
                align="center"
                class="py-4"
              >
                <v-img
                  class="my-3"
                  id="footer-logo-img"
                  src="../assets/img/logo.png"
                ></v-img>
              </v-col>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- Serviços -->
    <section id="servicos" class="mt-10">
      <!-- Card -->
<!--      <ServiceCard-->
<!--        v-for="(obj, key) in services" :key="key"-->
<!--        :background="color(obj.color)"-->
<!--        :title="obj.title"-->
<!--        :img="img(obj.img)"-->
<!--        :text="obj.text"-->
<!--        :font-color="fontColor"-->
<!--      />-->
      <ServiceCard
        :background="services[0].color"
        :title="services[0].title"
        :img="img(services[0].img)"
        :text="services[0].text"
        :font-color="services[0].fontColor"
      />
      <ServiceCard
        :background="services[1].color"
        :title="services[1].title"
        :img="img(services[1].img)"
        :text="services[1].text"
        :font-color="services[1].fontColor"
      />
      <ServiceCard
        :background="services[2].color"
        :title="services[2].title"
        :img="img(services[2].img)"
        :text="services[2].text"
        :font-color="services[2].fontColor"
      />
      <ServiceCard
        :background="services[3].color"
        :title="services[3].title"
        :img="img(services[3].img)"
        :text="services[3].text"
        :font-color="services[3].fontColor"
      />
    </section>

    <!-- Depoimentos -->
    <section id="depoimentos">
      <v-row class="text-center my-4 mx-10 " id="depoimentos-row">
        <v-col
          id="depoimentos-col"
        >
          <!-- Title -->
          <h1 class="display-1 font-weight-light my-9">Depoimentos</h1>

          <!-- Carousel -->
          <v-carousel
            :height="[$vuetify.breakpoint.mdAndUp ? '500' : 'this.$props.height']"
            cycle
            interval="10000"
            hide-delimiters
          >
            <v-carousel-item
              v-for="(obj, key) in testimonials" :key="key"
            >
              <Testimonial
                :text="obj.text"
                :img="img(obj.img)"
                :name="obj.name"
                :position="obj.position"
              />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </section>

    <!-- Parallax -->
    <v-parallax
      height="500"
      dark
      src="../assets/img/img-footer.jpg"
    >
    </v-parallax>
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
      isActive: false,
      services: [
        {
          title: 'Amet Enim et Iure',
          text: 'Placeat quo reiciendis, rem repellat sapiente sunt tempore tenetur totam voluptatum',
          color: '#62050b',
          img: 'assistencia',
          fontColor: 'white'
        },
        {
          title: 'Labore Neque Nobis',
          text: 'Perspiciatis quaerat quam quas quibusdam quos reiciendis repudiandae sed similique tempore velit vero',
          color: '#ffeccc',
          img: 'pastejo',
          fontColor: '#392f24'
        },
        {
          title: 'Nulla Provident',
          text: 'Facere iusto nesciunt nulla perferendis quisquam reprehenderit similique vel? Ab alias dolores eius eveniet labore laborum odio sint sit velit vero',
          color: '#62050b',
          img: 'credito',
          fontColor: 'white'
        },
        {
          title: 'Repellat Voluptate',
          text: 'Sed velit voluptatibus? Aliquam consectetur, consequatur culpa debitis eaque earum enim ipsa ipsum laudantium magnam',
          color: '#ffeccc',
          img: 'curso',
          fontColor: '#392f24'
        }
      ],
      testimonials: [
        {
          text: '<q> Aut consequatur cumque deleniti, eligendi enim fugit in ipsum iusto laudantium, modi nam odio officia quibusdam ratione sit sunt vero? Ab accusantium asperiores assumenda, beatae, eius enim, est excepturi itaque nobis nulla omnis pariatur quo voluptatibus.<br>Aliquid dolores dolorum, ex expedita facilis, ipsam ipsum magnam, maxime neque quam quisquam rerum? A alias aliquam, debitis dolore dolorem ducimus ea eaque earum esse expedita fugit itaque minima natus nemo odit quasi recusandae rem tempore ullam veniam\n</q>',
          img: 'rodrigo-lima-granato',
          name: '<strong>Antoninus Pius</strong>',
          position: '<br>Eligendi enim fugit in ipsum iusto'
        },
        {
          text: '<q> Accusamus alias cum cumque inventore ipsam itaque labore magni, provident sequi similique temporibus, velit voluptate voluptates. <br> Aliquid dolores dolorum, ex expedita facilis, ipsam ipsum magnam, maxime neque quam quisquam rerum? A alias aliquam, debitis dolore dolorem ducimus ea eaque earum esse expedita fugit itaque minima natus nemo odit quasi recusandae rem tempore ullam veniam<br> Alias consectetur cum cupiditate ducimus illum impedit, laboriosam, minima minus non, nulla odio pariatur sit Amet, aut culpa dignissimos dolor eos et hic iure labore laudantium nam natus obcaecati officiis pariatur perferendis quae quia, quis quod, recusandae sint suscipit tempore ullam unde vel velit veniam</q>',
          img: 'jose-manuel-tiago',
          name: '<strong>Lucius Verus</strong>',
          position: '<br>Amet asperiores deleniti hic laudantium rerum'
        },
        {
          text: '<q>Doloribus eum odio repellat? Amet asperiores deleniti hic laudantium rerum sequi ut voluptate? Animi asperiores, at culpa dignissimos exercitationem, inventore laborum maxime nam necessitatibus officia pariatur quos recusandae rerum sunt, veniam? Ad aliquid blanditiis deleniti dolor explicabo iusto, laboriosam non praesentium quas quis reiciendis rem voluptas voluptates Assumenda autem deserunt quia quidem rem\n' +
            '<br> Aliquid dolores dolorum, ex expedita facilis, ipsam ipsum magnam, maxime neque quam quisquam rerum? A alias aliquam, debitis dolore dolorem ducimus ea eaque earum esse expedita fugit itaque minima natus nemo odit quasi recusandae rem tempore ullam veniam\n <br> Accusamus alias cum cumque inventore ipsam itaque labore magni, provident sequi similique temporibus, velit voluptate voluptates</q>',
          img: 'carlos-joel',
          name: '<strong>Marcus Aurelius</strong>',
          position: '<br> Aut delectus ea error nisi'
        },
        {
          text: '<q>Accusamus alias cum cumque inventore ipsam itaque labore magni, provident sequi similique temporibus, velit voluptate voluptates. <br> Commodi cupiditate dolorem enim eos laudantium libero minima minus nobis numquam officiis omnis placeat quo reiciendis, rem repellat sapiente sunt tempore tenetur totam voluptatum</q>.',
          img: 'mauricio',
          name: '<strong>Magnus Maximus</strong>',
          position: '<br>quos reiciendis repudiandae sed similique tempore velit vero'
        }
      ],
      carousel: [
        'carousel1', 'carousel2', 'carousel3', 'carousel4', 'carousel5', 'carousel6'
      ],
      height: '',
      breakpoint: '',
      fontColor: ''
    }
  },
  computed: {
    ...mapState([
      'imgs'
    ])
  },
  methods: {
    color (obj) {
      let color = ''
      if (obj.includes('green')) {
        color = '#62050b'
        this.fontColor = 'white'
      } else {
        color = '#ffeccc'
        this.fontColor = '#392f24'
      }
      return color
    },
    img (obj) {
      let img = ''
      this.height = ''
      for (let i = 0; i < this.imgs.length; i++) {
        img = this.imgs[i]
        if (img.toString().includes(obj)) {
          if (img.toString().includes('carlos-joel')) {
            this.height = 1000
          }
          return img
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/libraries/mixins";
  @import "../assets/sass/views/landingPage";

  body, html {
    font-family: 'Ubuntu', sans-serif !important;

    .header {
      background-image: url("../assets/img/bg.png");
    }
  }

</style>
