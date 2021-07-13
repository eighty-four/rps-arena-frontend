import type { RouteInfo } from './interface';

/**
 * Routes config
 */
const routes = <Record<string, RouteInfo>> {
	'/': {
		component: () => import('../../pages/index.svelte').then((module) => module.default),
		path: '/',
		title: 'RPS Arena',
	},
};

export default routes;

/**
 * The default route of the app
 */
export const defaultRoute = <RouteInfo>routes['/'];
