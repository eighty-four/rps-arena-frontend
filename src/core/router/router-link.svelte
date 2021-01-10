<script>
	/**
	 * @type {string}
	 */
	export let href;
</script>

{#if href.startsWith('/')}
	<a href={href} data-router-link={href}><slot/></a>
{:else}
	<a href={href}><slot/></a>
{/if}
