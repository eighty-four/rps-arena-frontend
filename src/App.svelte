<script>
	import Router, { activePageStore } from './core/router';

	const
		router = new Router();

	router.init();
</script>

<svelte:component this={$activePageStore.component} params={$activePageStore.params}/>
