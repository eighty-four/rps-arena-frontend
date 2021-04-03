<script>
	import { createEventDispatcher } from 'svelte';

	export let
		secondary = false,
		disabled = false,
		loading = false;

	const
		dispatch = createEventDispatcher();

	function onClick() {
		if (!disabled && !loading) {
			dispatch('click');
		}
	}
</script>

<button class="button" class:secondary class:disabled class:loading on:click={onClick} type="button" {disabled}>
	<span class="content">
		<slot/>
	</span>

	<div class="loader-container">
		<svg class="loader" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<g>
				<path
					class="loader-ring-background"
					d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z"
				></path>

				<path
					class="loader-ring-foreground"
					d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z"
				></path>
			</g>
		</svg>
	</div>
</button>

<style>
	.button {
		--primary-background-color: #2475D1;
		--primary-text-color: rgb(255, 255, 255);
		--primary-hover-background-color: #1D5BA1;
		--primary-active-background-color: #14447A;

		--secondary-background-color: #F4F4F4;
		--secondary-text-color: rgb(0, 0, 0);
		--secondary-hover-background-color: #DBDBDB;
		--secondary-active-background-color: #BABABA;

		--disabled-background-color: #DDDDDD;
		--disabled-text-color: #999999;
	}

	.button {
		position: relative;

		cursor: pointer;
		user-select: none;

		border: none;
		outline: none;
		border-radius: 10px;
		padding: 8px 10px;

		background-color: var(--primary-background-color);
		color: var(--primary-text-color);

		font-size: 16px;
		line-height: 20px;

		transition: background-color 150ms linear, transform 100ms ease-out;
	}

	.button:hover {
		background-color: var(--primary-hover-background-color);
	}

	.button:active {
		background-color: var(--primary-active-background-color);
		transform: scale(0.97);
	}

	.secondary {
		background-color: var(--secondary-background-color);
		color: var(--secondary-text-color);
	}

	.secondary:hover {
		background-color: var(--secondary-hover-background-color);
	}

	.secondary:active {
		background-color: var(--secondary-active-background-color);
	}

	.disabled {
		cursor: not-allowed;
		background-color: var(--disabled-background-color);
		color: var(--disabled-text-color);
	}

	.disabled:hover,
	.disabled:active {
		background-color: var(--disabled-background-color);
		color: var(--disabled-text-color);
		transform: unset;
	}

	.loading:hover,
	.loading:active {
		cursor: not-allowed;
		transform: unset;
	}

	.loading > .content {
		visibility: hidden;
	}

	/*TODO: для primary кнопки белый цвет большой части спиннера*/
	.loader-container {
		position: absolute;
		display: none;

		height: 20px;
		width: 20px;

		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.loader {
		animation: rotate 1s infinite;
	}

	.loader-ring-background {
		fill: rgba(255, 255, 255, 0.2);
	}

	.secondary .loader-ring-background {
		fill: rgba(0, 0, 0, 0.2);
	}

	.loader-ring-foreground {
		fill: rgba(255, 255, 255, 1);
	}

	.secondary .loader-ring-foreground {
		fill: rgba(0, 0, 0, 1);
	}

	.loading > .loader-container {
		display: block;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
