<template>
  <div id="services" class="section">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 class="section-title">
          <h3><v-icon>assignment</v-icon> Serviços</h3>
        </v-flex>
      </v-layout>
      <lista-servicos></lista-servicos>
    </v-container>
</div>
</template>
<script>
import ListaServicos from './ListaServicos'
export default {
  data: () => ({
  }),
  components: {
    'lista-servicos': ListaServicos
  }
}
</script>
