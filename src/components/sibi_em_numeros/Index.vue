<template>
	<div id="sibi-em-numeros">
		<sibi-numeros-menu></sibi-numeros-menu>
		
		<v-container>
			<v-layout row wrap>
				<v-flex md12>
					<v-toolbar
				      color="green"
				      dark
				    >
				      <v-toolbar-title>Lista de Relatórios da Biblioteca</v-toolbar-title>
				    </v-toolbar>

					<v-card>
						<v-container>
							<v-data-table
								:headers="headers"
								:items="libary_reports.data"
								hide-actions
							>
							<template slot="items" slot-scope="props">
								<td>{{ props.item.id }}</td>
								<td>{{ props.item.libary }}</td>
								<td>{{ props.item.year }}</td>
								<td>{{ props.item.loans }}</td>
								<td>{{ props.item.returns }}</td>
								<td>{{ props.item.renovations }}</td>
								<td>{{ props.item.user_quantity }}</td>
								<td>{{ props.item.impressed_books }}</td>
								<td>{{ props.item.chapter_book }}</td>
								<td>{{ props.item.disks }}</td>
								<td>{{ props.item.tcc }}</td>
								<td>{{ props.item.periodics }}</td>
								<td class="justify-center layout px-0">
								  <v-icon
								    small
								    class="mr-4"
								    @click="editReport(props.item)"
								  >
								    edit
								  </v-icon>
								  <v-icon
								    small
									@click="removeReport(props.item)"
								  >
								    delete
								  </v-icon>
								</td>
							</template>
							</v-data-table>
						</v-container>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		
		<!-- Dialog Editar-->
		<v-dialog
		v-model="dialog"
		fullscreen
		hide-overlay
		transition="dialog-bottom-transition"
		scrollable
		>
			<v-card tile>
			  <v-toolbar card dark color="green">
			    <v-btn icon dark @click.native="dialog = false">
			      <v-icon>close</v-icon>
			    </v-btn>
			    <v-toolbar-title>Editar relatório</v-toolbar-title>
			   
			  </v-toolbar>

			  <v-card-text>
			   <v-container>
					<v-layout row wrap>
						<v-flex md4 pr-2>
				          <v-text-field label="Biblioteca" v-model="report_edit.libary" box></v-text-field>
				        </v-flex>
						<v-flex md2 pr-2>
				          <v-text-field label="Ano" v-model="report_edit.year" box></v-text-field>
				        </v-flex>
						<v-flex md2 pr-2>
				          <v-text-field label="Emprestimos" v-model="report_edit.loans" box></v-text-field>
				        </v-flex>
				        <v-flex md2 pr-2>
				          <v-text-field label="Devoluções" v-model="report_edit.returns" box></v-text-field>
				        </v-flex>
						<v-flex md2 pr-2>
				          <v-text-field label="Renovações" v-model="report_edit.renovations" box></v-text-field>
				        </v-flex>
				        <v-flex md2 pr-2>
				          <v-text-field label="Quantidade de Usuários" v-model="report_edit.user_quantity" box></v-text-field>
				        </v-flex>
						<v-flex md2 pr-2>
				          <v-text-field label="Livros Impressos" v-model="report_edit.impressed_books" box></v-text-field>
				        </v-flex>
				        <v-flex md2 pr-2>
				          <v-text-field label="Capítulos de Livros" v-model="report_edit.chapter_book" box></v-text-field>
				        </v-flex>
						<v-flex md2 pr-2>
				          <v-text-field label="Discos" v-model="report_edit.disks" box></v-text-field>
				        </v-flex>
				        <v-flex md2 pr-2>
				          <v-text-field label="TCC" v-model="report_edit.tcc" box></v-text-field>
				        </v-flex>
						<v-flex md2 pr-2>
				          <v-text-field label="Periódicos" v-model="report_edit.periodics" box></v-text-field>
				        </v-flex>

				        <v-flex md4>
				        	<v-btn block color="green" @click="updateReport" dark>
				        		<v-icon left>save</v-icon>
				        		Salvar
				        	</v-btn>
				        </v-flex>
					</v-layout>
				</v-container>
			    
			  </v-card-text>

			  
			</v-card>
		</v-dialog>
		<!-- Dialog Editar-->
	</div>

</template>
<script>

import Menu from './Menu'

export default {
	data () {
		return {
			dialog: false,
			report_edit: {},
			headers: [
	          { text: '#', value: 'id' },
	          { text: 'Ano', value: 'year', width: '10' },
	          { text: 'Biblioteca', value: 'libary', width: '10' },
	          { text: 'Emprestimos', value: 'loans' },
	          { text: 'Devoluções', value: 'returns' },
	          { text: 'Renovações', value: 'renovations' },
	          { text: 'Usuários', value: 'user_quantity' },
	          { text: 'Livros Impr.', value: 'impressed_books' },
	          { text: 'Cp. Livros', value: 'chapter_book' },
	          { text: 'CDs/DVDs', value: 'disks' },
	          { text: 'TCC', value: 'tcc' },
	          { text: 'Periódicos', value: 'periodics' },
	          { text: 'Ações', value: 'id', sortable: false }
	        ],


		}
	},
	
	created() {
		this.$store.dispatch('get-libary-reports')
	},

	components: {
		'sibi-numeros-menu': Menu
	},

	methods: {
		editReport(report) {
			this.report_edit = report
			this.dialog = true

		},

		updateReport() {
			this.$store.dispatch('update-libary-report', this.report_edit)
			this.report_edit = {}
			this.dialog = false
		},

		removeReport(report) {
			this.$store.dispatch('remove-libary-report', report.id)
		}

	},

	computed: {

		libary_reports() {
			return this.$store.state.reports.libary
		}
	}
}
</script>
