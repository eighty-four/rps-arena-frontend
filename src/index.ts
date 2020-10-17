import { person } from './profile';
import App from './App.svelte';

const
	name = 'Andrey';

new App({
	target: document.body,
	props: {
		name: person.name,
	},
});

console.log(`Hello from webpack, ${name} ${person.age}`);
