<template>
  <div id="contacts" class="section">
    <v-container>
			<v-layout row wrap>
				<v-flex md12 class="section-title">
					<h3> <v-icon>phone</v-icon> Contatos</h3>
				</v-flex>
			</v-layout>

      <v-layout row wrap>
        <v-flex md12>
          <v-tabs color="blue darken-3" dark slider-color="blue">
            <v-tab  v-for="information in informations" :key="information.name" ripple >
              {{ information.name }}

            </v-tab>

            <v-tab-item v-for="information in informations" :key="information.name">
              <v-card flat style="min-height: 240px;">
                <v-card-text>

                  <div>
                    <v-chip color="grey lighten-4">
                      <v-avatar class="grey lighten-3"> <v-icon>location_on</v-icon> </v-avatar>
                      {{ information.address }}
                    </v-chip>
                  </div>
                  <div  v-if="information.phone">
                    <v-chip color="grey lighten-4">
                      <v-avatar class="grey lighten-3"> <v-icon>phone</v-icon> </v-avatar>
                      {{ information.phone }}
                    </v-chip>
                  </div>

                  <div  v-if="information.email">
                    <v-chip color="grey lighten-4">
                      <v-avatar class="grey lighten-3"> <v-icon>email</v-icon> </v-avatar>
                      {{ information.email }}
                    </v-chip>
                  </div>

                  <div v-if="information.facebook">
                    <v-chip color="grey lighten-4">
                      <v-avatar class="grey lighten-3"> <v-icon>public</v-icon> </v-avatar>
                      <strong>Facebook: </strong> &nbsp; {{ information.facebook }}
                    </v-chip>
                  </div>

                  <div v-if="information.instagram">
                    <v-chip color="grey lighten-4">
                      <v-avatar class="grey lighten-3"> <v-icon>public</v-icon> </v-avatar>
                      <strong>Instagram: </strong> &nbsp; {{ information.instagram }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>


		</v-container>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    informations: [
      {
        name: "Arapiraca",
        address: "Av. Manoel Severino Barbosa s/n. CEP 57309005. Bom Sucesso. Arapiraca.",
        phone: "(82) 3482-1837 - Central telefônica",
        email: "",
        facebook: "https://www.facebook.com/bca.bibliotecacampusdearapiraca",
        instagram: "@bibliotecacampusdearapiraca"
      },
      {

        name: "Palmeira dos Indios",
        address: "Rua Sonho Verde, s/n, Eucalipto, CEP: 57076-100. Palmeira dos Índios.",
        phone: "(82) 3420-1282 - Central telefônica",
        email: "",
        facebook: "https://www.facebook.com/biblioteca.palmeiradosindios"
      },
      {

        name: "Penedo",
        address: "Av. Beira Rio, s/n - Centro Histórico CEP: 57200-000. Penedo.",
        phone: "(82) 3551-2784/3707 - Central telefônica",
        email: "",
        facebook: ""
      },
      {

        name: "Viçosa",
        address: "Fazenda São Luiz, s/n. Viçosa.",
        phone: "(82) 9941-0150",
        email: "",
        facebook: ""
      },
    ]
  })
}
</script>
