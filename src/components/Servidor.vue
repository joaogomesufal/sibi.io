<template>
  <v-flex md4 sm6 md3 pr-1 pl-1 pb-1 pt-1>
    <div class="" data-aos="flip-left" data-aos-delay="200">
      <v-card color="blue darken-3" class="white--text">

        <v-layout row justify-center style="padding-top: 20px;">
          <v-avatar :size="128">
            <v-img :src="data.photo" :alt="data.name" style="border: 4px solid #fff;"></v-img>
          </v-avatar>
        </v-layout>

        <v-container>
          <v-layout row>
          <v-flex xs12 md12 sm12 class="server">
              <h3>{{ data.name }}</h3>
              <v-chip color="white" >
                <v-avatar transition="bounce">
                  <v-icon>account_circle</v-icon>
                </v-avatar>
                {{ data.role }}
              </v-chip>

              <ul class="informations" v-if="data.expand">
                <li v-for="(information, index) in data.information" v-bind:key="index"> {{ information }}</li>
              </ul>

              <div>
                <v-btn icon color="white"  @click="data.expand = !data.expand">
                  <v-icon v-if="data.expand">arrow_drop_up</v-icon>
                  <v-icon v-else>arrow_drop_down</v-icon>
                </v-btn>
              </div>

            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </v-flex>

</template>
<script>
  export default {
    name: "",
    props: ['data'],
    data: () => ({

    }),

  }
</script>
<style lang="scss" scoped>

  .server {
    text-align: center;
    h3 {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .informations {
      text-align: left;
      padding: 10px 10px;
      margin: 20px 0px;
      list-style: none;
      li {
        margin-bottom: 20px;
        font-weight: 400;
      }
    }

  }

</style>
