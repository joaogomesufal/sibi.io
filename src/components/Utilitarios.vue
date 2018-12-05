<template>
	<div id="utilities" class="section" >
		<v-container>
			<v-layout row wrap>
				<v-flex md12 class="section-title">
					<h3> <v-icon>apps</v-icon> Utilitários</h3>
				</v-flex>
			</v-layout>

			<v-layout row wrap id="utilitarios-content">
				<v-flex md12>
					<v-layout row wrap>
						<v-flex md2 class="utility" v-for="utility in utilities" v-bind:key="utility.id" >
							
								<v-tooltip top max-width="250">
									<a slot="activator" :href="utility.link">
										<img :src="utility.image" :alt="utility.title">
									</a>
									<span>{{utility.title}}</span>
								</v-tooltip>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>


		</v-container>
	</div>
</template>

<script>
	export default {

		data () {
			return {
				utilities: [
						{
							id: 1,
							title: "Portal da pesquisa",
							image: require('../assets/images/logo_portaldepesquisa.gif'),
							link: "http://www.sibi.ufal.br/images/demo/worldmap.gif",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							
						},

						{
							id: 2,
							title: "Scielo",
							image: require('../assets/images/logo_scielo.jpg'),
							link: "http://www.scielo.org/",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							
						},

						{
							id: 3,
							title: "Portal SBE",
							image: require('../assets/images/logo-sbe-cor-beto.png'),
							link: "http://aplicacao.periodicos.saude.gov.br/",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							
						},

						{
							id: 4,
							title: "Periódicos",
							image: require('../assets/images/logo_periodicos.png'),
							link: "http://www.sibi.ufal.br/images/demo/worldmap.gif",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							
						},

						{
							id: 5,
							title: "FAPEAL",
							image: require('../assets/images/FAPEAL.png'),
							link: "#5",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							
						},
						{
							id: 6,
							title: "Biblioteca Digital de Teses e Dissertações",
							image: require('../assets/images/bdtd.jpg'),
							link: "http://bdtd.ibict.br/",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							
						},
						{
							id: 7,
							title: "dot.lib",
							image: require('../assets/images/logo_dotlib.png'),
							link: "http://www.dotlib.com.br/home?pais=bra",
							description: 'Lorem ipsum dolor sit ametsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
						},
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.utility {
		img {
			filter: opacity(0.8);
			max-height: 40px;
			max-width: 100%;
		}
	}
</style>
