<script>
	import { inview } from '$lib/actions/inview.js';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import InteractiveDemo from '$lib/components/InteractiveDemo.svelte';
	import OpenSource from '$lib/components/OpenSource.svelte';
</script>

<div class="page-header" use:inview>
	<div class="container">
		<h1 class="reveal">Up and running in <span class="highlight">five minutes.</span></h1>
		<p class="reveal reveal-delay-1">
			Export your data from the platforms that hold it. Import it locally.
			Browse, explore, and reflect on your own terms.
		</p>
	</div>
</div>

<HowItWorks />
<InteractiveDemo />
<OpenSource />

<style>
	.page-header {
		padding-top: 140px;
		padding-bottom: var(--space-2xl);
		text-align: center;
	}

	@media (max-width: 640px) {
		.page-header {
			padding-top: 100px;
		}
	}

	h1 {
		font-size: clamp(2rem, 5vw, 3.25rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.15;
		margin-bottom: var(--space-lg);
	}

	.highlight {
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	p {
		color: var(--color-text-muted);
		font-size: 1.15rem;
		max-width: 540px;
		margin: 0 auto;
		line-height: 1.7;
	}
</style>
