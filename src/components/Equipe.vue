<template>
	<div id="employees" class="section">
		<v-container>
			<v-layout row wrap>
				<v-flex md12 class="section-title">
					<h3><v-icon>assignment_ind</v-icon> Servidores</h3>
				</v-flex>
			</v-layout>

			<v-layout row wrap v-for="libary in libraries" v-bind:key="libary.name" >
				<div class="title-libary">
					<div class="action">
						<v-btn icon flat @click="libary.expand = !libary.expand">
							<v-icon v-if="!libary.expand">arrow_downward</v-icon>
							<v-icon v-else>arrow_upward</v-icon>
						</v-btn>
					</div>
					<div class="text">
						<h3>{{ libary.name }}</h3>
					</div>
				</div>
				
				<v-flex md12>
					<v-alert v-show="libary.employees.length == 0 && libary.expand" color="grey" type="info">
						Opps! Os funcionários ainda não foram cadastrados.
					</v-alert>
				</v-flex>
				<servidor v-if="libary.expand" :data="employee" v-for="employee in libary.employees" :key="employee.name"></servidor>
			</v-layout>

		</v-container>
	</div>
</template>

<script>
	import Servidor from './Servidor.vue';
	export default {

		data () {
			return {
				libraries: [
					{ name: "Arapiraca",  expand: true, employees: [
						{
							name: "Adriana Nogueira de Magalhães",
							photo: require("../assets/images/servidores/arapiraca/adriana.png"),
							role: "Auxiliar de Biblioteca ",
							libary: "Empréstimo",
							information: [
								"Licenciada em Letras (Português/Inglês);",
								"Especialização em TICs para Educadores pela UFAL.",
							],
							expand: false,
						},
						{
							name: "Cleia Maria de Oliveira Brito",
							photo: require("../assets/images/servidores/arapiraca/cleia.png"),
							role: "Auxiliar Administrativo",
							libary: "Empréstimo",
							information: [
									"Graduação em Serviço Social pela UFAL;",
									"Especialização em Recursos Humanos e Desenvolvimento Universitário pela UFAL",
									"Atualmente Cursa Pedagogia pela UNOPAR.",
							],
							expand: false,
						},
						{
							name: "Débora da Silva Cerqueira de Menezes",
							photo: require("../assets/images/servidores/arapiraca/debora.png"),
							role: "Assistente em Administração ",
							libary: "Empréstimo",
							information: [
								"Graduação em Direito pela UNEAL",
								"Tecnólogo em Secretariado pela Uninter.",
							],
							expand: false,
						},
						{
							name: "Erijane da Silva Virtuoso",
							photo: require("../assets/images/servidores/arapiraca/erijane.png"),
							role: "Auxiliar em Administração ",
							libary: "Empréstimo",
							information: [
								"Especialização em Gestão Pública pela UFAL;",
								"Graduação em Química – Licenciatura pela UNEAL;",
								"Experiência na área de Química, com ênfase em Química Verde;",
								"Experiência na área de Políticas Públicas, com ênfase administrativa em Assistência Social e Secretariado Executivo de Conselho;",
								"Atualmente cursa Graduação em Letras/Português pelo IFAL.",
							],
							expand: false,
						},
						{
							name: "Everaldo Bezerra de Albuquerque",
							photo: require("../assets/images/servidores/arapiraca/everaldo.png"),
							role: "Secretário Executivo ",
							libary: "Empréstimo",
							information: [
								"Licenciado em Letras, com habilitação em Português/Inglês pela FUNESA;",
								"Especialização em Gestão Escolar pela UCB do Rio de Janeiro;",
								"Mestrado em Letras e Linguística, área de concentração Estudos Literários, linha de pesquisa Literatura, Cultura e Sociedade, pelo Programa de Pós-graduação em Letras e Linguística da UFAL;",
								"Atualmente cursa Doutorado em Literatura pela Universidade Católica Portuguesa – Centro Regional de Braga (Portugal).",
							],
							expand: false,
						},
						{
							name: "Gerlane Costa Silva de Farias",
							photo: require("../assets/images/servidores/arapiraca/gerlane.png"),
							role: "Bibliotecária / Documentalista ",
							libary: "Divisão de Tratamento Técnico (DTT) ",
							information: [
								"Graduação em Biblioteconomia e Documentação pela Universidade Federal da Bahia (UFBA);",
								"Especialização em Biblioteconomia pela Faculdades Integradas de Jacarepaguá (FIJ);",
								"Atualmente cursando a Licenciatura em Letras – Português pela Universidade Estadual de Alagoas.",
							],
							expand: false,
						},
						{
							name: "Jakeline Vieira Barbosa",
							photo: require("../assets/images/servidores/arapiraca/jakeline.png"),
							role: "Auxiliar de Biblioteca ",
							libary: "Empréstimo",
							information: [
								"Graduação em Pedagogia pela Universidade Estadual de Alagoas (UNEAL);",
								"Especialização em Gestão Escolar pela Universidade Estadual de Alagoas (UNEAL).",
							],
							expand: false,
						},
						{
							name: "Márcio Thiago dos Santos Albuquerque",
							photo: require("../assets/images/servidores/arapiraca/marcio.png"),
							role: "Bibliotecário / Documentalista ",
							libary: "Divisão de Tratamento Técnico (DTT) e Empréstimo ",
							information: [
								"Graduação em Biblioteconomia pela Universidade Federal de Alagoas (UFAL);",
								"Licenciatura em Matemática pela Universidade Estadual de Alagoas (UNEAL);",
								"Especialização em Educação Matemática pela Universidade Estadual de Alagoas (UNEAL).",
							],
							expand: false,
						},
						{
							name: "Nestor Antonio Alves Junior",
							photo: require("../assets/images/servidores/arapiraca/nestor.png"),
							role: "Bibliotecário / Documentalista ",
							libary: "Divisão de Tratamento Técnico (DTT) e Empréstimo ",
							information: [
								"Graduação em Biblioteconomia pela Universidade Federal de Alagoas (UFAL);",
								"Bacharelado em Turismo e Lazer pelo Instituto Federal de Alagoas (IF – AL);",
								"Especialização em Formação de Leitores pelas Faculdades Integradas de Jacarepaguá – FIJ.",
								"Responde como Coordenador das Bibliotecas – Campus de Arapiraca;",
								"Atualmente cursa Mestrado em Ciências da Educação pela Universidade Autónoma de Assunção (Paraguai).",
							],
							expand: false,
						}
					]},
					{ name: "Penedo", expand: true, employees: [
						{
							name: "Edjames Alves Santos",
							photo: require("../assets/images/servidores/penedo/edjames.png"),
							role: "Assistente Administrativo ",
							libary: "Empréstimo",
							information: [
								"Licenciatura em Química ",
								"Atualmente cursando Especialização em Ensino de Ciências e da Matemática pelo Instituto Federal de Alagoas (IFAL).",
							],
							expand: false,
						},
						{
							name: "Eliúde Maria da Silva",
							photo: require("../assets/images/servidores/penedo/eliude.png"),
							role: "Bibliotecária / Documentalista",
							libary: "Divisão de Tratamento Técnico (DTT) e Empréstimo",
							information: [
								"Graduação em Biblioteconomia e Documentação pela Universidade Federal de Alagoas (UFAL);",
								"Especialização em Comunicação e Mídias Digitais pela Faculdade Estácio de Sá.",
							],
							expand: false,
						},
						{
							name: "Tereza Cristina do Nascimento Andrade",
							photo: require("../assets/images/servidores/penedo/tereza.png"),
							role: "Recepcionista ",
							libary: "Empréstimo",
							information: [
								"Possui Ensino Médio Completo.",
							],
							expand: false,
						},
					]},
					{ name: "Palmeira dos Indios", expand: true, employees: [
						{
							name: " Kassandra Kallyna Nunes de Souza",
							photo: require("../assets/images/servidores/palmeira_dos_indios/kassandra.png"),
							role: "Bibliotecária / Documentalista",
							information: [
								"Graduada em Biblioteconomia pela Universidade Federal de Pernambuco (UFPE);",
								"Especialista em Biblioteconomia pela Faculdade Internacional Signorelli (FIS); ",
								"Mestranda em Ciência da Educação pela Universidade Autónoma de Assunção (Paraguai)."
							],
							expand: false,
						},
					]},
					{ name: "Viçosa", expand: true, employees: [
						{
							name: "Edvânia Cosmo da S. Gonçalves",
							photo: require("../assets/images/servidores/vicosa/edvania.jpg"),
							role: "Bibliotecário / Documentalista ",
							information: [
								"Graduação em Biblioteconomia pela Universidade Federal de Pernambuco (UFPE);",
								"Atualmente cursando Especialização em Mídias Digitais."
							],
							expand: false,
						},

						{
							name: "Marcio Andrade dos Reis da Silva",
							photo: require("../assets/images/servidores/vicosa/marcio.jpg"),
							role: "Recepcionista ",
							information: [
								"Atualmente cursando Graduação em Gestão de T.I."
							],
							expand: false,
						},
					]},
				]
			}
		},
		components: {
			Servidor
		}
	}
</script>

<style lang="scss" scoped>
	.title-libary {
		min-height: 60px;
		display: block;
		width: 100%;

		.action {
			display: inline-block;
			min-width: 40px;
			button {
				margin-top:-4px;
			}
			i {
				font-size: 26px;
			}
		}

		.text {
			display: inline-block;

			h3 {
				line-height: 60px;
				font-size: 22px;
			}
		}
	}
</style>
