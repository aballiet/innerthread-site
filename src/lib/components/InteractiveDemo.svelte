<script>
	import { inview } from '$lib/actions/inview.js';

	let loaded = $state(false);
	let failed = $state(false);
	let visible = $state(false);

	function onIframeLoad() {
		loaded = true;
	}

	function onVisible() {
		if (visible) return;
		visible = true;
		setTimeout(() => {
			if (!loaded) loaded = true;
		}, 8000);
	}

	function onError() {
		failed = true;
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
		<div class="demo-frame reveal reveal-delay-2" use:inview={{ threshold: 0.05, once: true, callback: onVisible }}>
			<div class="demo-frame__titlebar">
				<span class="demo-frame__dot demo-frame__dot--red"></span>
				<span class="demo-frame__dot demo-frame__dot--yellow"></span>
				<span class="demo-frame__dot demo-frame__dot--green"></span>
				<span class="demo-frame__titlebar-text">Retrace</span>
			</div>
			<div class="demo-frame__content">
				{#if !loaded && !failed}
					<div class="demo-frame__loading">
						<div class="demo-frame__spinner"></div>
						<span>Loading demo...</span>
					</div>
				{/if}
				{#if failed}
					<div class="demo-frame__error">
						<p>Demo failed to load.</p>
						<a href="/demo/" target="_blank" rel="noopener" class="error-link">Open in a new tab &rarr;</a>
					</div>
				{:else if visible}
					<iframe
						src="/demo/"
						title="Retrace interactive demo"
						onload={onIframeLoad}
						onerror={onError}
						class:loaded
					></iframe>
				{/if}
			</div>
		</div>

		<!-- Mobile: fallback -->
		<div class="demo-mobile reveal reveal-delay-2" use:inview>
			<div class="demo-mobile__icon">
				<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
					<rect x="5" y="2" width="14" height="20" rx="2" stroke="var(--color-accent)" stroke-width="1.5"/>
					<path d="M12 18h.01" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round"/>
				</svg>
			</div>
			<p>The full interactive demo is designed for larger screens.</p>
			<p class="demo-mobile__hint">Try it on your laptop or open it in landscape for a quick look.</p>
			<a href="/demo/" target="_blank" rel="noopener" class="btn btn-primary-mobile">
				Open demo
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="15 3 21 3 21 9" />
					<line x1="10" y1="14" x2="21" y2="3" />
				</svg>
			</a>
		</div>

		<div class="demo-cta reveal reveal-delay-3" use:inview>
			<p class="demo-cta__text">Free, open source, your data stays on your Mac.</p>
			<div class="demo-cta__buttons">
				<a href="https://github.com/aballiet/retrace" target="_blank" rel="noopener" class="btn btn-secondary">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
					</svg>
					View on GitHub
				</a>
				<a href="/demo/" target="_blank" rel="noopener" class="btn btn-secondary">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
						<path d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" />
					</svg>
					Open demo in new tab
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.section-header { text-align: center; margin-bottom: var(--space-3xl); }

	h2 {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-md);
	}

	.highlight { color: var(--color-accent); }

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

	.demo-frame__dot { width: 12px; height: 12px; border-radius: 50%; }
	.demo-frame__dot--red { background: #ff5f57; }
	.demo-frame__dot--yellow { background: #febc2e; }
	.demo-frame__dot--green { background: #28c840; }

	.demo-frame__titlebar-text {
		margin-left: var(--space-sm);
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--color-text-faint);
	}

	.demo-frame__content { position: relative; aspect-ratio: 16 / 10; }

	.demo-frame__content iframe {
		width: 100%; height: 100%; border: none;
		opacity: 0; transition: opacity 0.4s ease;
	}

	.demo-frame__content iframe.loaded { opacity: 1; }

	.demo-frame__loading, .demo-frame__error {
		position: absolute; inset: 0;
		display: flex; flex-direction: column; align-items: center; justify-content: center;
		gap: var(--space-md); color: var(--color-text-faint); font-size: 0.9rem;
	}

	.demo-frame__spinner {
		width: 24px; height: 24px;
		border: 2px solid var(--color-border);
		border-top-color: var(--color-accent);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin { to { transform: rotate(360deg); } }

	.error-link { color: var(--color-accent); font-weight: 500; }

	/* CTA below demo */
	.demo-cta { text-align: center; margin-top: var(--space-2xl); }

	.demo-cta__text {
		color: var(--color-text-muted);
		font-size: 1.05rem;
		margin-bottom: var(--space-lg);
	}

	.demo-cta__buttons {
		display: flex; justify-content: center;
		gap: var(--space-md); flex-wrap: wrap;
	}

	.demo-cta .btn {
		display: inline-flex; align-items: center; gap: var(--space-sm);
		padding: 0.8rem 1.5rem; border-radius: var(--radius-full);
		font-weight: 600; font-size: 0.9rem;
		transition: all var(--duration-fast) ease;
		text-decoration: none; white-space: nowrap;
	}

	.demo-cta .btn-secondary {
		background: var(--color-surface); color: var(--color-text);
		border: 1px solid var(--color-border);
	}

	.demo-cta .btn-secondary:hover {
		background: var(--color-surface-hover); border-color: var(--color-border-light);
		transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
	}

	/* Mobile fallback */
	.demo-mobile {
		display: none; text-align: center; padding: var(--space-2xl);
		background: var(--color-surface); border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
	}

	.demo-mobile__icon { margin-bottom: var(--space-md); }

	.demo-mobile p { color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: var(--space-sm); }

	.demo-mobile__hint {
		font-size: 0.85rem !important; color: var(--color-text-faint) !important;
		margin-bottom: var(--space-xl) !important;
	}

	.btn-primary-mobile {
		display: inline-flex; align-items: center; gap: var(--space-sm);
		padding: 0.85rem 1.75rem; border-radius: var(--radius-full);
		font-weight: 600; font-size: 0.95rem;
		background: var(--color-primary); color: var(--color-bg);
		transition: all var(--duration-fast) ease;
		text-decoration: none; min-height: 44px;
	}

	.btn-primary-mobile:hover { background: var(--color-text-muted); color: var(--color-bg); }

	@media (max-width: 768px) {
		.demo-frame { display: none; }
		.demo-mobile { display: block; }
	}
</style>
