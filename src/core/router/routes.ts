import type { RouteInfo } from './interface';

import IndexPage from '../../pages/index.svelte';

/**
 * Routes config
 */
const routes = <Record<string, RouteInfo>> {
	'/': {
		component: IndexPage,
		path: '/',
		title: 'RPS Arena',
	},
};

export default routes;

/**
 * The default route of the app
 */
export const defaultRoute = routes['/'];
