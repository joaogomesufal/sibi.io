<template>
	<div id="app">
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
import MenuNav from './components/Menu.vue';
import Servidores from './components/Equipe.vue';
import Utilitarios from './components/Utilitarios.vue';
import Contatos from './components/Contatos.vue';
import Servicos from './components/Servicos.vue';
import Sobre from './components/Sobre.vue';
import Destaques from './components/Destaques.vue';

export default {
	components: {
		'menu-nav': MenuNav,
		'servidores': Servidores,
		'utilitarios': Utilitarios,
		'contatos': Contatos,
		'servicos': Servicos,
		'sobre': Sobre,
		'destaques': Destaques,
	},
}
</script>
