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
        <span class="display-1 font-weight-light">{{ title }}</span>
        <hr>
      </v-row>

      <div class="service-content">
        <v-row
          align="center"
          justify="center"
        >
          <!-- Image -->
          <div class="card-img col-sm-12 col-md-7 px-md-10 py-md-10" id="service-img">
            <v-img
              :src="img"
              id="service-v-img"
            ></v-img>
          </div>
          <!-- Text -->
          <div class="card-text col-sm-12 col-md-5" id="service-text">
            <p class="headline font-weight-regular">{{ text }}</p>
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

    .service-content {
      .v-image {
        border-radius: 7px;
      }

      @include md {
        #service-v-img {
          max-height: 400px;
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

    #test-container{
      @include md {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "service-v-img-test service-text-test" ;

        #service-v-img-test {
          /*width: 40%;*/
          max-width: 500px;
          max-height: 400px;
          padding: 5% 0;
          margin-left: 15%;
        }
      }
    }
  }
</style>
