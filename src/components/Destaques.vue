<template>
	<div id="strikings" class="section">
		<v-container>
			<v-layout row wrap>
				<v-flex md12 class="section-title">
					<h3><v-icon>public</v-icon> Destaques</h3>
				</v-flex>
			</v-layout>

			<v-layout row wrap>

				<!-- Destaques da Esquerda -->
				<v-flex md7 sm12 >
					<v-layout row wrap>
						<v-flex md6 sm6 xs12 pr-2 pb-2 v-for="striking in strikings.column1" v-bind:key="striking.link">
								<v-card v-bind:key="striking.title">
									<v-img :src="striking.img" height="248px">
										<v-container fill-height fluid pa-2>
											<v-layout fill-height>
												<v-flex xs12 align-end flexbox>
													<div class="striking-title">
														<a v-if="striking.link != 'dialog-multas'" :href="striking.link" slot="activator">{{ striking.title }}</a>
														<a v-else slot="activator" @click="dialog = !dialog">{{ striking.title }}</a>
													</div>
												</v-flex>
											</v-layout>
										</v-container>
									</v-img>
								</v-card>
						</v-flex>
					</v-layout>
				</v-flex>

				<!-- Destaques da Direita -->
				<v-flex md5>
					<v-toolbar color="blue darken-3" dark>
						<v-toolbar-title class="text-xs-center">Links úteis</v-toolbar-title>
						<v-spacer></v-spacer>
					</v-toolbar>
					
					<v-card>
						<v-list two-line subheader>
							<v-list-tile
								v-for="striking in strikings.column2"
								:key="striking.link"
								avatar
							>
								<v-list-tile-avatar>
									<img :src="striking.img">
								</v-list-tile-avatar>

								<v-list-tile-content>	
									<a :href="striking.link" class="non-style">
										<v-list-tile-title>{{ striking.title }}</v-list-tile-title>
										<v-list-tile-sub-title>{{ striking.striking }}</v-list-tile-sub-title>
									</a>
								</v-list-tile-content>
							</v-list-tile>
						</v-list>
					</v-card>
				</v-flex>
				<!-- <v-flex md5  class="striking-section">
					<div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
						<v-layout row wrap>
							<v-flex md6 sm6 v-for="striking in strikings.column2" v-bind:key="striking.link">
								<v-layout row>
									<v-flex md4 mr-2 mb-2 d-block>
										<v-img :src="striking.img" width="100" aspect-ratio="1" contain></v-img>
									</v-flex>
									<v-flex md6 d-block class="striking-right-title">
										<v-tooltip top max-width="200px">
											<a :href="striking.link" slot="activator">{{ striking.title }}</a>
											<span>{{ striking.description}}</span>
										</v-tooltip>
									</v-flex>
								</v-layout>

							</v-flex>
						</v-layout>
					</div>
				</v-flex> -->

			</v-layout>
		</v-container>

		<v-dialog
	    v-model="dialog"
	    transition="dialog-bottom-transition"
	    scrollable
		fullscreen
	  	>
	    <v-card>
	      <v-toolbar card dark color="blue darken-3">
	        <v-icon @click="dialog = !dialog">close</v-icon>
	      </v-toolbar>
	    	<v-card-text>
			  	<v-container style="padding-bottom: 80px;">
						<v-layout row>
							<v-flex md6 pr-4>
								<h2>Pagamento de Multas</h2>
								<v-alert type="info" color="red" v-show="true">Prezado usuário,
								Não serão aceitos pagamentos diretamente no balcão das bibliotecas. Todos os valores arrecadados
								deverão ser recolhidos à conta única da Universidade Federal de Alagoas, através de emissão de
								guia de recolhimento da união (GRU).</v-alert>
								
								<h3>Informações importantes:</h3>
								<p>O usuário poderá acumular até R$10,00 de multa sem impedimento de realizar novos empréstimos;</p>
								<ul>
									<li> A guia de recolhimento da união (GRU) deverá ser paga no banco do Brasil;</li>

									<li> Tirar cópia do comprovante de pagamento e entregar no setor de empréstimo;</li>

									<li> Não serão aceitos comprovantes de pagamentos agendados; </li>

									<li> Não poderão ser realizados pagamentos de usuários diferentes em uma mesma operação;</li>

									<li class="red--text" style="font-weight: bold;">Qualquer reclamação quanto à devolução e renovação de livros, só será aceita com a apresentação da cópia do e-mail enviado pelo sistema.</li>

									<li class="red--text" style="font-weight: bold;">A Biblioteca Central informa que o prazo para avaliação de livros dos usuários que tenham pendências com o setor de empréstimo é de 72 horas, a partir da entrega dos mesmos.
									Para mais esclarecimentos entre em contato com sua biblioteca.</li>
								</ul>

							</v-flex>

							<v-flex md6>
								<h2>Instruções para o pagamento de multas</h2>
								<h3>Para quitar seu bébito com a biblioteca você deverá realizar os procedimentos abaixo.</h3><br>
								<ol>
									<li>Confirmar o valor a ser pago, após devolução do material em atraso;</li>
									<li>Ir até o site do <a href="Https://consulta.Tesouro.Fazenda.Gov.Br/gru/gru_simples.Asp">Tesoura da Fazenda</a> </li>
									<li>
										Preencher a guia de recolhimento da união com os seguintes códigos:
										<ul>
											<li><strong>Unidade gestora (ug):</strong> 153037</li>
											<li><strong>Gestão:</strong> 15222</li>
											<li><strong>Nome da unidade:</strong> universidade federal de alagoas (carregamento automático)</li>
											<li><strong>Código de recolhimento:</strong> escolher a opção: 28886-1 outras receitas próprias – clicar em avançar (abrem-se novas opções para preenchimento)</li>
											<li><strong>Número de referência:</strong> 1530371522210296</li>
											<li><strong>Competência:</strong> mês e ano</li>
											<li><strong>Vencimento:</strong> dia/mês/ ano que a multa será paga. </li>
											<li><strong>CPF / CNPJ do contribuinte:</strong> cpf do usuário em débito</li>
											<li><strong>Nome do contribuinte / recolhedor:</strong> nome do usuário em débito</li>
											<li><strong>valor principal:</strong> total do valor da multa a ser paga</li>
											<li><strong>Descontos e abatimentos:</strong> não preencher</li>
											<li><strong>Outras deduções:</strong> não preencher</li>
											<li><strong>Juros /encargos:</strong> não preencher</li>
											<li><strong>Outros acréscimos:</strong> não preencher</li>
											<li><strong>Valor total:</strong> repetir o valor do campo valor principal</li>
										</ul>
									</li>
									<li>Selecionar uma opção de geração: escolher a opção geração em pdf e clicar ememitir gru;</li>
									<li>Imprimir pagar e após o pagamento entregar no balcaão de empréstimo da biblioteca para dar baixa no sistema.</li>
								</ol><br>
								<v-alert
									 type="success"
								 >
									 Para maiores esclarecimentos entre em contato com sua biblioteca.
								 </v-alert>

							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
	    </v-card>
	  </v-dialog>

	</div>
</template>

<script>
	export default {
		data () {
			return {
				dialog: false,
				strikings: {

					column1: [
					{
						title: "Renovação",
						link: "http://www.sibi.ufal.br/pergamum/mobile/index.php",
						img: require('../assets/images/destaques/1.jpg')
					},
					{
						title: "Repositório Institucional Campus Arapiraca",
						link: "https://ud.arapiraca.ufal.br/?db=ud#page=0&limit=&view_type=list&model=ud.biblioteca.publicacao&menu_id=171&action=166",
						img: require('../assets/images/destaques/2.jpg'),
					},
					{
						title: "Pagamento de multas",
						link: "dialog-multas",
						img: require('../assets/images/destaques/3.jpg')
					},
					{
						title: "Sibi em números Campus Arapiraca",
						link: "http://www.sibi.ufal.br/",
						img: require('../assets/images/destaques/4.jpg')
					},
					],

					column2: [

					{
						title: "Consultar histórico",
						link: "http://www.sibi.ufal.br/pergamum/biblioteca_s/php/login_usu.php?flag=index.php",
						img: require('../assets/images/consulta.gif')
					},
					
					{
						title: "Repositório Institucional",
						link: "http://www.repositorio.ufal.br/",
						description: 'Reúne a produção científica e acadêmica gerada pela Ufal. Visando a preservação, disseminação.',
						img: require('../assets/images/repositorio.jpg')
					},
					{
						title: "Doações",
						link: "http://www.sibi.ufal.br/doacao.html",
						description: 'Para realizar e ou receber doações de livros e outros materiais, siga as instruções.',
						img: require('../assets/images/doacoes.gif')
					},
					{
						title: "Solicitação de livros",
						link: "http://www.sibi.ufal.br/pedidos/validar.php",
						description: 'Prezados coordenadores de curso. Para sugestões de títulos, durante o período de solicitações,',
						img: require('../assets/images/solicitar.gif')
					},
					{
						title: "Padrão UFAL de Normatização",
						link: "http://www.sibi.ufal.br/Padrao_Ufal_de_Normatizacao.pdf",
						description: 'Guia baseado nas diretrizes da ABNT, para normalização dos trabalhos acadêmicos.',
						img: require('../assets/images/normas.gif')
					},
					{
						title: "Normas para depósito de TCC",
						link: "http://www.ufal.edu.br/arapiraca/institucional/biblioteca/orientacao-normativa-001-de-14-de-abril-de-2016/view",
						description: 'Guia baseado nas diretrizes da ABNT, para normalização dos trabalhos acadêmicos.',
						img: require('../assets/images/tcc.jpg')
					},
					{
						title: "Guia do usuário",
						link: "http://www.sibi.ufal.br/normas.html",
						img: require('../assets/images/guia.png')
					},
					]
				}
			}
		}
	}
</script>
<style lang="scss" scoped>


</style>
