import type { SvelteComponent } from 'svelte';

// TODO: этот интерфейс - описание страницы. Активная страница = этот же объект
// Что тогда делать с параметрами? (активная страница расширяет интерфейс обычного описания страницы и добавляет параметры)
export interface ActivePage {
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
	title?: string;

	/**
	 * Parameters (props) being passed to the page component
	 */
	params?: Record<string, unknown>;
}
