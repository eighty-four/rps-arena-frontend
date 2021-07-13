<script>
	import Router, { activeRouteStore } from './core/router';

	const
		router = new Router();

	router.init();
</script>

{#await $activeRouteStore.component() then component}
	<svelte:component this={component} params={$activeRouteStore?.params}/>
{/await}
