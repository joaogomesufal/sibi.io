<template>
  <div id="sibi-numeros-menu">
    <v-toolbar clipped-left class="elevation-0" color="green" dark>
      <v-toolbar-items id="menu-itens">
          <v-btn flat :to="item.route" v-smooth-scroll  v-for="item in menuItems" :key="item.title">
            <v-icon left>{{ item.icon }}</v-icon> <span>{{ item.title }}</span>
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'trending_up', title: 'Relatorios', route: '/sibi_numeros/relatorios'},
          {icon: 'assignment', title: 'Cadastro', route: '/sibi_numeros/cadastro'},
          {icon: 'home', title: 'Início', route: '/sibi_numeros'},
        ],
      }
    },
  }
</script>

<style scoped lang="scss">
  #sibi-numeros-menu {
    .v-toolbar theme--light {
      border: 0px;
      box-shadow: 0px;
    }
  }
</style>
