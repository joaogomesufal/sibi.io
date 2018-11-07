<template>
	<div id="home-page">
		<menu-nav></menu-nav>
		<destaques></destaques>
		<servicos></servicos>
		<servidores></servidores>
		<utilitarios></utilitarios>
		<contatos></contatos>
		<sobre></sobre>
	</div>
</template>

<script>
import MenuNav from './Menu.vue';
import Servidores from './Equipe.vue';
import Utilitarios from './Utilitarios.vue';
import Contatos from './Contatos.vue';
import Servicos from './Servicos.vue';
import Sobre from './Sobre.vue';
import Destaques from './Destaques.vue';

export default {

	data () {
		return {
			height: 0
		}
	},

	components: {
		'menu-nav': MenuNav,
		'servidores': Servidores,
		'utilitarios': Utilitarios,
		'contatos': Contatos,
		'servicos': Servicos,
		'sobre': Sobre,
		'destaques': Destaques,
	},

	created () {

	},

	methods: {
		descer() {
			alert('descer')
		}
	}
}
</script>
