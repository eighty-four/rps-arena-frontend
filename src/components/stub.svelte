<style>
	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;

		text-align: center;
		font-family: "Courier New", Courier, monospace;
	}

	.title {
		font-size: 3em;
		color: red;
	}

	.team {
		font-size: 2em;
		text-align: center;
		position: relative;
	}

	.team-new {
		animation-delay: 0.2s;
		animation: blink 0.7s steps(5, end) infinite;
	}

	.team-old {
		top: -1em;
		animation: blink 0.5s steps(5, start) infinite;
	}

	@keyframes blink {
  	50% {
    	opacity: 0;
  	}
	}
</style>

<div class="container">
	<h1 class="title">RPS Arena</h1>
	<h3 class="team team-new">84</h3>
	<h3 class="team team-old">42</h3>
</div>
