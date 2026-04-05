<script>
	import { inview } from '$lib/actions/inview.js';

	let loaded = false;

	function onLoad() {
		loaded = true;
	}
</script>

<section id="demo" class="demo-section">
	<div class="container">
		<div class="section-header" use:inview>
			<h2 class="reveal">See it in <span class="highlight">action.</span></h2>
			<p class="reveal reveal-delay-1">
				Explore a fully interactive demo with fictional data. No download required.
			</p>
		</div>

		<!-- Desktop: embedded iframe -->
		<div class="demo-frame reveal reveal-delay-2" use:inview>
			<div class="demo-frame__titlebar">
				<span class="demo-frame__dot demo-frame__dot--red"></span>
				<span class="demo-frame__dot demo-frame__dot--yellow"></span>
				<span class="demo-frame__dot demo-frame__dot--green"></span>
				<span class="demo-frame__titlebar-text">Retrace</span>
			</div>
			<div class="demo-frame__content">
				{#if !loaded}
					<div class="demo-frame__loading">
						<div class="demo-frame__spinner"></div>
						<span>Loading demo...</span>
					</div>
				{/if}
				<iframe
					src="/demo/"
					title="Retrace interactive demo"
					loading="lazy"
					sandbox="allow-scripts allow-same-origin"
					on:load={onLoad}
					class:demo-frame__iframe--loaded={loaded}
				></iframe>
			</div>
		</div>

		<!-- Mobile: fallback -->
		<div class="demo-mobile reveal reveal-delay-2" use:inview>
			<p>The interactive demo works best on desktop.</p>
			<a href="/demo/" target="_blank" rel="noopener" class="btn btn-secondary">
				Open demo in new tab
			</a>
		</div>

		<div class="demo-cta reveal reveal-delay-3" use:inview>
			<p class="demo-cta__text">Free, open source, runs entirely on your Mac.</p>
			<div class="demo-cta__buttons">
				<a href="#download" class="btn btn-primary">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 4v4H8l4 4 4-4h-3V8h-2z"/>
					</svg>
					Download for macOS
				</a>
				<a href="/demo/" target="_blank" rel="noopener" class="btn btn-secondary">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
						<path d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" />
					</svg>
					Explore full demo
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.section-header {
		text-align: center;
		margin-bottom: var(--space-3xl);
	}

	h2 {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-md);
	}

	.highlight {
		color: var(--color-accent);
	}

	.section-header p {
		color: var(--color-text-muted);
		font-size: 1.1rem;
		max-width: 540px;
		margin: 0 auto;
	}

	.demo-frame {
		max-width: 1100px;
		margin: 0 auto;
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid var(--color-border);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05);
		background: var(--color-surface);
	}

	.demo-frame__titlebar {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: 12px 16px;
		background: var(--color-bg-alt);
		border-bottom: 1px solid var(--color-border);
	}

	.demo-frame__dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.demo-frame__dot--red { background: #ff5f57; }
	.demo-frame__dot--yellow { background: #febc2e; }
	.demo-frame__dot--green { background: #28c840; }

	.demo-frame__titlebar-text {
		margin-left: var(--space-sm);
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--color-text-faint);
		letter-spacing: 0.02em;
	}

	.demo-frame__content {
		position: relative;
		aspect-ratio: 16 / 10;
	}

	.demo-frame__content iframe {
		width: 100%;
		height: 100%;
		border: none;
		opacity: 0;
		transition: opacity var(--duration-normal) ease;
	}

	.demo-frame__content iframe.demo-frame__iframe--loaded {
		opacity: 1;
	}

	.demo-frame__loading {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-md);
		color: var(--color-text-faint);
		font-size: 0.9rem;
	}

	.demo-frame__spinner {
		width: 24px;
		height: 24px;
		border: 2px solid var(--color-border);
		border-top-color: var(--color-accent);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	.demo-caption {
		text-align: center;
		color: var(--color-text-faint);
		font-size: 0.85rem;
		margin-top: var(--space-lg);
	}

	/* CTA below demo */
	.demo-cta {
		text-align: center;
		margin-top: var(--space-2xl);
	}

	.demo-cta__text {
		color: var(--color-text-muted);
		font-size: 1.05rem;
		margin-bottom: var(--space-lg);
	}

	.demo-cta__buttons {
		display: flex;
		justify-content: center;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	.demo-cta .btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		padding: 0.8rem 1.5rem;
		border-radius: var(--radius-full);
		font-weight: 600;
		font-size: 0.9rem;
		transition: all var(--duration-fast) ease;
		text-decoration: none;
		white-space: nowrap;
	}

	.demo-cta .btn-primary {
		background: var(--color-primary);
		color: var(--color-bg);
	}

	.demo-cta .btn-primary:hover {
		background: var(--color-text-muted);
		color: var(--color-bg);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(45, 42, 38, 0.15);
	}

	.demo-cta .btn-secondary {
		background: var(--color-surface);
		color: var(--color-text);
		border: 1px solid var(--color-border);
	}

	.demo-cta .btn-secondary:hover {
		background: var(--color-surface-hover);
		border-color: var(--color-border-light);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
	}

	/* Mobile: hide iframe, show fallback */
	.demo-mobile {
		display: none;
		text-align: center;
		padding: var(--space-2xl);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
	}

	.demo-mobile p {
		color: var(--color-text-muted);
		margin-bottom: var(--space-lg);
	}

	.demo-mobile .btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		padding: 0.75rem 1.5rem;
		border-radius: var(--radius-full);
		font-weight: 600;
		font-size: 0.9rem;
		background: var(--color-surface);
		color: var(--color-text);
		border: 1px solid var(--color-border);
		transition: all var(--duration-fast) ease;
		text-decoration: none;
	}

	.demo-mobile .btn:hover {
		background: var(--color-surface-hover);
		border-color: var(--color-border-light);
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.demo-frame {
			display: none;
		}

		.demo-mobile {
			display: block;
		}
	}
</style>
