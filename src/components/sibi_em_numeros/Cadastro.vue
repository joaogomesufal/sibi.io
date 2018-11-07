<template>
	<div id="sibi-numeros-cadastro">
		<sibi-numeros-menu></sibi-numeros-menu>
		<v-container>
			<v-layout row wrap>
				<v-flex md12>
					<v-toolbar
				      color="green"
				      dark
				    >
				      
				      <v-toolbar-title>Registro de Relatórios da Biblioteca</v-toolbar-title>
				      <v-spacer></v-spacer>
				      
				    </v-toolbar>
					<v-card>
						<v-container>
							<v-layout row wrap>
								<v-flex md4 pr-2>
						          <v-text-field label="Biblioteca" v-model="relatorio.libary" box></v-text-field>
						        </v-flex>
								<v-flex md2 pr-2>
						          <v-text-field label="Ano" v-model="relatorio.year" box></v-text-field>
						        </v-flex>
								<v-flex md2 pr-2>
						          <v-text-field label="Emprestimos" v-model="relatorio.loans" box></v-text-field>
						        </v-flex>
						        <v-flex md2 pr-2>
						          <v-text-field label="Devoluções" v-model="relatorio.returns" box></v-text-field>
						        </v-flex>
								<v-flex md2 pr-2>
						          <v-text-field label="Renovações" v-model="relatorio.renovations" box></v-text-field>
						        </v-flex>
						        <v-flex md2 pr-2>
						          <v-text-field label="Quantidade de Usuários" v-model="relatorio.user_quantity" box></v-text-field>
						        </v-flex>
								<v-flex md2 pr-2>
						          <v-text-field label="Livros Impressos" v-model="relatorio.impressed_books" box></v-text-field>
						        </v-flex>
						        <v-flex md2 pr-2>
						          <v-text-field label="Capítulos de Livros" v-model="relatorio.chapter_book" box></v-text-field>
						        </v-flex>
								<v-flex md2 pr-2>
						          <v-text-field label="Discos" v-model="relatorio.disks" box></v-text-field>
						        </v-flex>
						        <v-flex md2 pr-2>
						          <v-text-field label="TCC" v-model="relatorio.tcc" box></v-text-field>
						        </v-flex>
								<v-flex md2 pr-2>
						          <v-text-field label="Periódicos" v-model="relatorio.periodics" box></v-text-field>
						        </v-flex>

						        <v-flex md4>
						        	<v-btn block color="green" @click="salvar" dark>
						        		<v-icon left>save</v-icon>
						        		Salvar
						        	</v-btn>
						        </v-flex>
							</v-layout>
						</v-container>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	import axios from 'axios'
	import Menu from './Menu'
	export default {
		data() {
			return {
				relatorio: {
					libary: '',
			    	year: 0,
			    	loans: 0,
			    	returns: 0,
			    	renovations: 0,
			        user_quantity: 0,
			        impressed_books: 0,
			        chapter_book: 0,
			        disks: 0,
			        tcc: 0,
			        periodics: 0,
				}
			}
		},

		components: {
			'sibi-numeros-menu': Menu
		},

		methods: {
			salvar() {
				this.$store.dispatch('save-libary-report', this.relatorio)
			}
		}
	}
</script>