<template>
  <div class="landing-page-view-container">

    <!-- Header -->
    <div class="header h-100">
      <!-- Parallax -->
      <v-parallax
        dark
        src="../assets/img/bg.jpeg"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12" id="parallax-text">
            <h1 class="display-4 font-weight-medium mb-4">Projeto Lucro Máximo</h1>
            <h4 class="display-1 font-regular mt-4">Consultoria agropecuária</h4>
            <v-btn class="mt-5" outlined color="white" dark large>
              Conheça
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>
    </div>

    <!-- Sobre Nós -->
    <section id="sobre-nos">
      <v-row justify="center" class="text-center my-4 mx-3">
        <v-col class="col-sm-12 col-md-10">
          <!-- Title -->
          <h1 class="display-1 font-weight-light mb-9">Sobre Nós</h1>
          <div class="sobre-nos-content">
            <!-- Text -->
            <p class="sobre-nos-paragraph title font-weight-light" id="first-paragraph">
              O Projeto Lucro Máximo surgiu em 2010, com o intuito de difundir a tecnologia no campo, levando mais
              conhecimento e tecnologia ao produtor.
              O projeto é dirigido por Adilson Esquerdo Ferreira, zootecnista, formado pela Universidade Federal Rural
              do
              Rio de Janeiro em 2007,
              além de contar com o auxílio de outros profissionais da área agrícola (Médico Veterinário, Agrônomo,
              Técnico
              Agrícola e Administrador de empresas).
            </p>
            <!-- Image -->
            <v-row
              align="center"
              justify="center"
            >
              <v-col class="col-sm-12 col-md-8">
                <v-img
                  justify="center"
                  class="my-3"
                  id="sobre-nos-img"
                  src="../assets/img/sobreNos.jpeg"
                ></v-img>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- Serviços -->
    <section id="servicos" class="mt-10">
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
          <h1 class="display-1 font-weight-light mb-9">Depoimentos</h1>

          <!-- Carousel -->
<!--          <v-carousel-->
<!--            light-->
<!--            cycle-->
<!--            hide-delimiter-background-->
<!--            show-arrows-on-hover-->
<!--          >-->
          <v-carousel cycle hide-delimiters>
            <v-carousel-item
              v-for="(obj, key) in testimonials" :key="key"
            >
              <Testimonial
                :text="obj.text"
                :img="imgTestimonial(obj.img)"
                :name="obj.name"
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
      src="../assets/img/img12.jpeg"
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
          text: 'Tive uma grande honra de poder estagiar com o Adilson; o principal aprendizado foi o amor e a determinação que ele tem pela profissão e pelo seu trabalho. <br/>Realmente é uma pessoa que respira a zootecnia.<br/> Ao longo desses anos sempre me inspirei muito nele.',
          img: 'rodrigo-lima-granato',
          name: 'Rodrigo Lima Granato',
          position: 'Consultor técnico de bovinos de corte da Agroceres, em Barra do Garças - MT'
        },
        {
          text: 'Após um período da aplicação de seus sábios ensinamento na Fazenda Sucupira, hoje estamos colhendo frutos representados pelas arrobas de boi excessivas, em vista principalmente do resultado do capim que ao receber o devido tratamento traduziu-se no  hoje festejado resultado positivo da atividade. <br/> Sua assistência marcou um novo e promissor destino em nossas propriedades.',
          img: 'jose-manuel-tiago',
          name: 'José Manoel Tiago Bittencourt',
          position: 'Advogado e pecuarista'
        },
        {
          text: 'Há 3 anos iniciamos um trabalho voltado na produção de leite, no qual iniciamos um parceira de sucesso junto a empresa  Lucro Máximo, no qual o Adilson nos orientou e vem nos dando total apoio não só para desenvolver o sistema, desde os cuidados  com rebanho e plantio, como todo o sistema geral da fazenda.<br/> Começamos com 100 litros dia até chegarmos a 1400 litros dia. <br/>Só tenho a agradecer a parceria da empresa Lucro Máximo e da pessoa maravilhosa que é Sr Adilson; total companheirismo e dedicação para que possamos alcançar nosso objetivo.<br/> Todas as tomadas de decisões ele sempre presente e nos orientando da melhor forma possível.<br/> Muito obrigado Lucro Máximo e ao Sr Adilson Ferreira',
          img: 'carlos-joel',
          name: 'Carlos Joel',
          position: 'Sócio na fazenda Santa Edwiges, em Santos Dumont - MG'
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
      if (obj.includes('maroon')) {
        color = '#715f58'
      } else {
        color = '#004d40'
      }
      return color
    },
    imgTestimonial (obj) {
      let imgTestimonial = ''
      for (let i = 0; i < this.imgs.length; i++) {
        imgTestimonial = this.imgs[i]
        if (imgTestimonial.toString().includes(obj)) {
          console.log(imgTestimonial.toString())
          return imgTestimonial
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/libraries/mixins";

  .landing-page-view-container {

    .header {

      .v-parallax {
        opacity: 0.85;
        filter: brightness(85%);
        min-height: 100vh;

        #parallax-text {
          opacity: 1;

          h1 {
            filter: initial;
          }
          .v-btn {
            background-color: #004D4C;
            opacity: 0.7;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }

    #sobre-nos {
      .v-image {
        border-radius: 7px;
      }
    }

    #sobre-nos-test {
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
