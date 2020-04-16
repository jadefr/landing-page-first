<template>
  <div class="landing-page-view-container">

    <!-- Header -->
    <section class="header">
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" id="header-text">
          <h1 class="display-4 font-weight-medium mb-4">Projeto Lucro Máximo</h1>
          <h4 class="display-1 font-regular mt-4">Consultoria agropecuária</h4>
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
          <div id="footer-logo">
            <v-col
              align="center"
              class="pt-6 pb-4"
            >
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
            </v-col>
          </div>
          <!--            <v-row-->
          <!--              align="center"-->
          <!--              justify="center"-->
          <!--            >-->
          <!--              <v-col class="col-sm-12 col-md-8">-->
          <!--                <v-carousel :show-arrows="false"-->
          <!--                            cycle-->
          <!--                            hide-delimiters-->
          <!--                >-->
          <!--                  <v-carousel-item-->
          <!--                    v-for="(obj, key) in carousel" :key="key"-->
          <!--                    :src="img(obj)"-->
          <!--                  >-->
          <!--                  </v-carousel-item>-->
          <!--                </v-carousel>-->
          <!--              </v-col>-->
          <!--            </v-row>-->
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
      :img="img(obj.img)"
      :text="obj.text"
    />
  </section>

  <!-- Depoimentos -->
  <section id="depoimentos">
    <v-row class="text-center my-4 mx-10" id="depoimentos-row">
      <v-col
        id="depoimentos-col"
      >
        <!-- Title -->
        <h1 class="display-1 font-weight-light mb-9">Depoimentos</h1>

        <!-- Carousel -->
        <v-carousel
          :height="[$vuetify.breakpoint.mdAndUp ? '600' : 'this.$props.height']"
          cycle
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
          title: 'Projeto de Pastejo',
          text: 'Utilização de dejetos do curral nas pastagens via motobomba ou gravidade, \n' +
              'visando o aumento da fertilidade do solo e da produtividade da forrageira escolhida',
          color: 'maroon',
          img: 'img2'
        },
        {
          title: 'Assistência Técnica Mensal',
          text: 'Consultorias semanais ou quinzenais na área da pecuária de leite e/ou pecuária de corte',
          color: 'green',
          img: 'img1'
        },
        {
          title: 'Projeto de Crédito Rural',
          text: 'Projetos para o produtor na Caixa Econômica Federal, Banco do Brasil ou Sicoob',
          color: 'maroon',
          img: 'img3'
        },
        {
          title: 'Curso Online',
          text: 'Oferecemos conhecimento técnico aos produtores e trabalhadores rurais e capacitação dos técnicos ligados ao meio rural,  \n' +
              'com o intuito de levar mais tecnologia e conhecimento ao campo.\n',
          color: 'green',
          img: 'img4'
        }
      ],
      testimonials: [
        {
          text: 'Tive uma grande honra de poder estagiar com o Adilson; o principal aprendizado foi o amor e a determinação que ele tem pela profissão e pelo seu trabalho. <br/>Realmente é uma pessoa que respira a zootecnia.<br/> Ao longo desses anos sempre me inspirei muito nele.',
          img: 'rodrigo-lima-granato',
          name: '<strong>Rodrigo Lima Granato</strong>',
          position: '<br>Consultor técnico de bovinos de corte da Agroceres, em Barra do Garças - MT'
        },
        {
          text: 'Após um período da aplicação de seus sábios ensinamento na Fazenda Sucupira, hoje estamos colhendo frutos representados pelas arrobas de boi excessivas, em vista principalmente do resultado do capim que ao receber o devido tratamento traduziu-se no  hoje festejado resultado positivo da atividade. <br/> Sua assistência marcou um novo e promissor destino em nossas propriedades.',
          img: 'jose-manuel-tiago',
          name: '<strong>José Manoel Tiago Bittencourt</strong>',
          position: '<br>Advogado e pecuarista'
        },
        {
          text: 'Há 3 anos iniciamos um trabalho voltado na produção de leite, no qual iniciamos um parceira de sucesso junto a empresa  Lucro Máximo, no qual o Adilson nos orientou e vem nos dando total apoio não só para desenvolver o sistema, desde os cuidados  com rebanho e plantio, como todo o sistema geral da fazenda.<br/> Começamos com 100 litros dia até chegarmos a 1400 litros dia. <br/>Só tenho a agradecer a parceria da empresa Lucro Máximo e da pessoa maravilhosa que é Sr Adilson; total companheirismo e dedicação para que possamos alcançar nosso objetivo.<br/> Todas as tomadas de decisões ele sempre presente e nos orientando da melhor forma possível.<br/> Muito obrigado Lucro Máximo e ao Sr Adilson Ferreira',
          img: 'carlos-joel',
          name: '<strong>Carlos Joel</strong>',
          position: '<br>Sócio na fazenda Santa Edwiges, em Santos Dumont - MG'
        },
        {
          text: 'Ano passado [2019] fui informado que o Adilson estava desenvovendo projeto para credito rural.<br>Então fui até o sindicato de sapucaia estive com ele. Ele me orientou quais documentos eram necessários. <br>Na próxima semana voltei. E ele montou o projeto muito rapido, muito detalhado e com muita boa vontade. <br>Fui muito bem atendido. O banco aprovou o projeto na hoa. <br>Muito obrigado pelo teu serviço e tua boa vontade, Adilson',
          img: 'mauricio',
          name: '<strong>Maurício Assumpção Ribeiro</strong>',
          position: '<br>Agricultor, Sapucaia - RJ'
        }
      ],
      carousel: [
        'carousel1', 'carousel2', 'carousel3', 'carousel4', 'carousel5', 'carousel6'
      ],
      height: '',
      breakpoint: ''
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
      if (obj.includes('maroon')) {
        color = '#715f58'
      } else {
        color = '#004d40'
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
