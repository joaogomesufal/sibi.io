<template>
  <div id="about" class="section">
    <v-container>
      <v-layout row wrap>
        <v-flex md12 class="section-title">
          <h3><v-icon>local_library</v-icon> Sobre</h3>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
       
        <v-flex md6 >
         
            <p>O sistema de bibliotecas da Universidade Federal de Alagoas (SIBI-UFAL) surgiu a partir da resolução nº 45/89 do Conselho Universitário, de 09 de novembro de 1989.
              <v-chip small color="blue darken-3" text-color="white" @click="dialog = true; info1 = true;">
                <v-icon left>library_books</v-icon>
                 Regimento
              </v-chip>
            </p>
            <p>Objetiva a integração das bibliotecas à política educacional, científica e administrativa da universidade, servindo de apoio aos programas de ensino, pesquisa e extensão.
              <v-chip small color="blue darken-3" text-color="white" @click="dialog = true; info2 = true;">
                <v-icon left>library_books</v-icon>
                 Regimento
              </v-chip>
            </p>
          
        </v-flex>

         <v-flex md4 offset-md2>
            <img src="../assets/images/organizacao.svg">
        </v-flex>
    </v-layout>

  </v-container>

  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar card dark color="grey darken-3">
        <v-btn icon dark @click.native="resetDialog()">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container>
      <v-flex md12>
        <div v-if="info1">
          <p>De acordo com o art. 4º do Regimento interno - o SIBI/UFAL terá a seguinte composição:</p>
          <ul>
            <li>ÓRGÃO COLEGIADO;</li>
            <li>BIBLIOTECA CENTRAL;</li>
            <li>BIBLIOTECAS SETORIAIS;</li>
            <li>ARQUIVO CENTRAL (desde 2012)</li>
          </ul>
        </div>

        <div v-if="info2">
          <p>De acordo com o art. 3º do Regimento Interno - o SIBI/UFAL tem as seguintes funções básicas:</p>
          <ul>
            <li>Assegurar o fluxo constante de informação atualizada relativa à produção nacional e/ou internacional, em ciência, tecnologia, literatura e artes, aos alunos, pesquisadores, professores e técnicos-administrativos da UFAL, como também a usuários de outras instituições públicas e privadas, inclusive no setor produtivo;</li>
            <li>Cooperar com outras redes e sistemas de informação para melhor aproveitamento e racionalização dos recursos disponíveis, integrando-se aos planos nacionais de bibliotecas universitárias e programas cooperativos;</li>
            <li>Contribuir para a padronização das atividades técnicas, através da adoção comum de normas catalográficas, de classificação, indexação, formatos, etc, e outras técnicas e metodologias;</li>
            <li>Coletar, processar, armazenar e difundir o conhecimento gerado e/ou editado, no âmbito da UFAL;</li>
            <li>Promover o aperfeiçoamento profissional de seu pessoal, através da promoção de eventos ou incentivos à participação em reuniões, congressos, seminários, cursos, etc;</li>
            <li>Introduzir, gradativamente, processos automatizados nos serviços, considerando o custo benefício e os problemas de compatibilidade.</li>
          </ul>
        </div>
      </v-flex>
    </v-container>
    </v-card>
  </v-dialog>

</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    dialog: false,
    info1: false,
    info2: false
  }),

  methods: {
    resetDialog() {
      this.dialog = false
      this.info1 = false
      this.info2 = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
