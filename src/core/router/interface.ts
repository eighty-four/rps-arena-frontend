import type { SvelteComponent } from 'svelte';

/**
 * Description of a route
 */
export interface RouteInfo {
	/**
	 * Component that represents the page
	 */
	component: typeof SvelteComponent;

	/**
	 * Pathname of the url of the page
	 */
	path: string;

	/**
	 * Title of the page displayed in browser interface
	 */
	title: string;
}

/**
 * Description of the current active route
 */
export interface ActiveRouteInfo extends RouteInfo {
	/**
	 * Parameters (props) being passed to the page component
	 */
	params?: Record<string, unknown>;
}
