import routes, { defaultRoute } from './routes';
import { activeRouteStore } from './store';
import type { ActiveRouteInfo } from './interface';

export * from './routes';
export * from './store';
export * from './interface';

export default class Router {
	protected static _instance: Router;

	/**
	 * Internal field for storing the current active route
	 */
	protected activeRouteStore: ActiveRouteInfo | undefined;

	/**
	 * @see activeRouteStore
	 */
	protected set activeRoute(value: ActiveRouteInfo | undefined) {
		if (value?.title != null) {
			this.setTitle(value.title);
		}

		activeRouteStore.set(value);
	}

	/**
	 * @see activeRouteStore
	 */
	protected get activeRoute(): ActiveRouteInfo | undefined {
		return this.activeRouteStore;
	}

	/**
	 * Current pathname without trailing slash
	 */
	protected get pathname(): string {
		return globalThis.location.pathname.replace(/(.+)(\/)$/g, '$1');
	}

	constructor() {
		if (Router._instance == null) {
			activeRouteStore.subscribe((value) => this.activeRouteStore = value);
			Router._instance = this;
		}

		return Router._instance;
	}

	/**
	 * Initializes router.
	 * Sets first opened page by location and attaches event listeners.
	 */
	init(): void {
		this.replace(this.pathname);

		globalThis.document.addEventListener<'click'>('click', (event: MouseEvent) => {
			const
				target = event.target as HTMLAnchorElement;

			if (target.nodeName === 'A' && target.dataset.routerLink != null) {
				event.preventDefault();
				this.push(target.dataset.routerLink);
			}
		});

		globalThis.addEventListener<'popstate'>('popstate', () => {
			const
				currentPath = this.pathname,
				newRoute = routes[currentPath] ?? defaultRoute;

			this.activeRoute = newRoute;
		});
	}

	/**
	 * Pushes new entry to the browser history and sets new route in the app
	 * @param path {string}
	 */
	push(path: string): void {
		const
			newRoute = routes[path] ?? defaultRoute;

		if (this.activeRoute?.path === newRoute.path) {
			return;
		}

		this.activeRoute = newRoute;
		globalThis.history.pushState(null, newRoute.title, newRoute.path);
	}

	/**
	 * Replaces current entry in the browser history and sets corresponding route in the app
	 * @param path {string}
	 */
	replace(path: string): void {
		const
			newRoute = routes[path] ?? defaultRoute;

		if (this.activeRoute?.path === newRoute.path) {
			return;
		}

		this.activeRoute = newRoute;
		globalThis.history.replaceState(null, newRoute.title, newRoute.path);
	}

	/**
	 * Sets the title of the document
	 * @param title {string}
	 */
	setTitle(title: string): void {
		globalThis.document.title = title;
	}
}
