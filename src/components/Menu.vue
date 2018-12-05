<template>
  <div id="header-menu">
    <div id="header">
      <v-container>
        <v-layout row justify-center>
          <v-flex md12 id="header-logo" mb-4>
            <div data-aos="slide-down">
              <img src="../assets/images/bca-logo.svg">
            </div>
          </v-flex>
        </v-layout>
       
              
       
      </v-container>
    </div>

    <v-toolbar clipped-left id="menu" color="blue darken-3" dark>
      <v-toolbar-side-icon @click="lateral_status = !lateral_status"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items id="menu-itens">
          <v-btn flat slot="activator" :href="item.href" v-smooth-scroll  v-for="item in menuItems" :key="item.title">
            <v-icon left>{{ item.icon }}</v-icon> <span>{{ item.title }}</span>
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Menu lateral -->
    <v-navigation-drawer
    :mini-variant.sync="lateral_expand"
    v-model="lateral_status"
    fixed
    class="blue darken-4" dark>
  
     <v-toolbar flat color="blue darken-3">
      <v-list>
        <v-list-tile @click="lateral_status = !lateral_status">
             <v-icon >arrow_left</v-icon> Esconder
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>
    <v-list >
      
      <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :href="item.href" v-smooth-scroll
      >
        <v-list-tile-action >
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuItems: [
          {icon: 'home', title: 'Início', href: '#header'},
          {icon: 'public', title: 'Destaques', href: '#strikings'},
          {icon: 'assignment', title: 'Serviços', href: '#services'},
          {icon: 'assignment_ind', title: 'Servidores', href: '#employees'},
          {icon: 'apps', title: 'Utilitários', href: '#utilities'},
          {icon: 'phone', title: 'Contatos', href: '#contacts'},
          {icon: 'local_library', title: 'Sobre', href: '#about'},
          
        ],
        lateral_status: false,
        lateral_expand: false
      }
    },
  }
</script>

<style scoped>

</style>
