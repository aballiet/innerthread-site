<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section class="mobile-vision">
	<div class="container">
		<div class="section-header" use:inview>
			<p class="section-tag reveal">Coming soon</p>
			<h2 class="reveal reveal-delay-1">Your context layer, <span class="highlight">anywhere.</span></h2>
			<p class="intro reveal reveal-delay-2">
				The phone is not where you manage data. It is where Retrace sends you
				something prepared, and you respond to it. Fully offline. No server needed.
			</p>
		</div>

		<div class="vision-grid" use:inview>
			<div class="vision-card reveal reveal-delay-1">
				<div class="card-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
						<circle cx="12" cy="12" r="10" stroke="var(--color-accent)" stroke-width="1.5"/>
						<path d="M12 8v4l3 3" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
				<h3>Checkup</h3>
				<p>
					Contextualized prompts that know your life. Not "how are you feeling?" but
					"you told ChatGPT you were burned out, told Sarah you are fine, and your
					journal says nothing. What is actually going on?"
				</p>
			</div>

			<div class="vision-card reveal reveal-delay-2">
				<div class="card-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
						<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<h3>Digest</h3>
				<p>
					Your week, pre-written. Activity by platform, topic trends, relationship
					activity, emotional arc, key facts. The weekly review that writes itself.
				</p>
			</div>

			<div class="vision-card reveal reveal-delay-3">
				<div class="card-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
						<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="var(--color-accent-light)" stroke-width="1.5"/>
						<circle cx="12" cy="12" r="3" stroke="var(--color-accent-light)" stroke-width="1.5"/>
					</svg>
				</div>
				<h3>Rediscovery</h3>
				<p>
					Forgotten stories from your own life, surfaced with evidence. Dropped threads,
					decisions you forgot making, patterns you lived through but never named.
				</p>
			</div>

			<div class="vision-card reveal reveal-delay-4">
				<div class="card-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
						<circle cx="11" cy="11" r="8" stroke="var(--color-teal)" stroke-width="1.5"/>
						<path d="M21 21l-4.35-4.35" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
				<h3>Search</h3>
				<p>
					Your memory, queryable offline. Find that restaurant recommendation, that
					decision rationale, that thing someone said three weeks ago.
				</p>
			</div>
		</div>

		<p class="arch-note" use:inview>
			<span class="reveal">
				Desktop generates everything. Google Drive syncs it. Phone reads offline.
				No custom server. No accounts.
			</span>
		</p>
	</div>
</section>

<style>
	.mobile-vision {
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.section-header {
		text-align: center;
		max-width: 640px;
		margin: 0 auto var(--space-4xl);
	}

	.section-tag {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-accent-light);
		margin-bottom: var(--space-lg);
	}

	h2 {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.2;
		margin-bottom: var(--space-lg);
	}

	.highlight {
		color: var(--color-accent);
	}

	.intro {
		color: var(--color-text-muted);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.vision-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-xl);
		max-width: 800px;
		margin: 0 auto;
	}

	.vision-card {
		padding: var(--space-2xl);
		background: var(--color-surface);
		border: 1px dashed var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-normal) ease;
	}

	.vision-card:hover {
		border-color: var(--color-border-light);
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
	}

	.card-icon {
		margin-bottom: var(--space-lg);
	}

	h3 {
		font-size: 1.15rem;
		font-weight: 650;
		letter-spacing: -0.01em;
		margin-bottom: var(--space-md);
	}

	.vision-card p {
		color: var(--color-text-muted);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	.arch-note {
		text-align: center;
		margin-top: var(--space-2xl);
		font-size: 0.9rem;
		color: var(--color-text-faint);
		font-style: italic;
	}

	@media (max-width: 700px) {
		.vision-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
