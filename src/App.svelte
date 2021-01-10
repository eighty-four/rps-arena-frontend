<script>
	import Router, { activeRouteStore } from './core/router';

	const
		router = new Router();

	router.init();
</script>

<svelte:component this={$activeRouteStore?.component} params={$activeRouteStore?.params}/>
