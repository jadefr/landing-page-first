<template>
  <div class="service-card-container">
    <!-- Card -->
    <div class="card-style"
         :style="{'background-color':background, 'color':fontColor}"
    >
      <!-- Title -->
      <v-row
        align="center"
        justify="center"
        class="pt-6 pb-4"
        id="title-row"
      >
        <span
          :class="[$vuetify.breakpoint.mdAndUp ? 'display-1 font-weight-regular' : 'headline font-weight-regular']"
        >
          {{ title }}
        </span>
      </v-row>

      <div class="service-content">
        <v-row
          align="center"
          justify="center"
        >
          <!-- Image -->
          <div class="card-img col-sm-12 col-md-6 py-md-10" id="service-img">
            <v-img
              :aspect-ratio="16/9"
              :src="img"
              id="service-v-img"
            ></v-img>
          </div>
          <!-- Text -->
          <div class="card-text col-sm-12 col-md-6 pb-2" id="service-text">
            <span :class="[$vuetify.breakpoint.mdAndUp ? 'headline font-weight-light' : 'subtitle-2 font-weight-light']">
              {{ text }}
            </span>
          </div>
          <!-- Button -->
          <v-btn class="mt-3 mb-5" outlined color="white" dark large
                 v-if="isCursoOnline"
          >
            <a href="http://cursos.sgfaz.com/producao_milho/" target="_blank" style="text-decoration: none; color: white">
              Inscreva-se
            </a>
          </v-btn>
        </v-row>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: String,
    img: String,
    text: String,
    background: String,
    fontColor: String
  },
  data () {
    return {
      isCursoOnline: false
    }
  },
  created () {
    if (this.$props.title === 'Repellat Voluptate') {
      this.isCursoOnline = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/views/serviceCard";
</style>
