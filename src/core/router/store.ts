import { writable } from 'svelte/store';

import type { ActiveRouteInfo } from './interface';

export const
	/**
	 * Current active page of the app
	 */
	activeRouteStore = writable<ActiveRouteInfo | undefined>(undefined);
