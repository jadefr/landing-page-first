<template>
  <div class="service-card-container">
    <!-- Card -->
    <div class="white--text"
         :style="{'background-color':background}"
    >
      <!-- Title -->
      <v-row
        align="center"
        justify="center"
        class="pt-6 pb-4"
      >
<!--        <span class="display-1 font-weight-light">{{ title }}</span>-->
        <span :class="[$vuetify.breakpoint.mdAndUp ? 'display-1 font-weight-light' : 'headline font-weight-light']">{{ title }}</span>
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
          <div class="card-text col-sm-12 col-md-6" id="service-text">
            <p class="headline font-weight-light">{{ text }}</p>
          </div>
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
    background: String
  }
  // data: () => ({
  //   isActive: false
  // })
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/libraries/mixins";
  .service-card-container {
    hr {
      color: white;
    }

    .v-image {
      border-radius: 7px;
    }

    .service-content {
      text-align: center;

      @include sm {
        #service-img {
          padding-left: 10%;
          padding-right: 10%;

          #service-v-img {
            max-height: 240px;
          }
        }
        #service-text {
          padding-right: 10%;
          padding-left: 10%;
        }
      }

      @include md {
        #service-v-img {
          margin-left: 20%;
        }

        #service-text {
          p {
            margin-left: 20%;
            padding-right: 20%;
          }
        }
      }
    }
  }
</style>
