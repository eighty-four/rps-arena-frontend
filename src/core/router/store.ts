import { writable } from 'svelte/store';

import type { ActivePage } from './interface';

export const
	/**
	 * Current active page of the app
	 */
	activePageStore = writable<ActivePage>(undefined);
