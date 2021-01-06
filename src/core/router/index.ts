import IndexPage from '../../pages/index.svelte';
import UserPage from '../../pages/user.svelte';

import { activePageStore } from './store';
import type { ActivePage } from './interface';

export * from './store';
export * from './interface';

export default class Router {
	protected activePageStore: ActivePage | undefined;

	protected set activePage(value: ActivePage) {
		activePageStore.set(value);
	}

	protected get activePage(): ActivePage | undefined {
		return this.activePageStore;
	}

	/**
	 * Current pathname without trailing slash
	 */
	protected get pathname(): string {
		return globalThis.location.pathname.replace(/\/$/g, '');
	}

	constructor() {
		activePageStore.subscribe((value) => this.activePageStore = value);
	}

	init(): void {
		this.go(this.pathname);

		document.addEventListener<'click'>('click', (event: MouseEvent) => {
			const
				target = event.target as HTMLAnchorElement;

			if (target.nodeName === 'A' && target.dataset.routerLink != null) {
				event.preventDefault();
				this.go(target.dataset.routerLink);
			}
		});

		globalThis.addEventListener<'popstate'>('popstate', (event: PopStateEvent) => {
			const
				currentPath = this.pathname;

			if (currentPath === '/user') {
				this.activePage = {component: UserPage, path: currentPath, params: undefined};

			} else {
				this.activePage = {component: IndexPage, path: currentPath, params: undefined};
			}
		});
	}

	// forward??
	go(path: string): void {
		if (this.activePage?.path === path) {
			return;
		}

		if (path === '/user') {
			this.activePage = {component: UserPage, path, params: undefined};
			globalThis.history.pushState(null, null, '/user');

		} else {
			this.activePage = {component: IndexPage, path, params: undefined};
			globalThis.history.replaceState(null, null, '/index');
		}
	}
}
