<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section class="compounding">
	<div class="container">
		<div class="section-header" use:inview>
			<p class="section-tag reveal">Why this is different</p>
			<h2 class="reveal reveal-delay-1">Value compounds <span class="highlight">over time.</span></h2>
			<p class="intro reveal reveal-delay-2">
				Most tools are as useful on day one as day 100. Retrace gets better the longer
				you use it. After six months, your context layer understands your life in ways
				no single app ever could.
			</p>
		</div>

		<div class="timeline" use:inview>
			<div class="timeline-card reveal reveal-delay-1">
				<div class="timeline-marker">
					<span class="timeline-dot"></span>
					<span class="timeline-label">Week 1</span>
				</div>
				<p>
					Your first conversations are segmented, summarized, and searchable. Topics and
					emotions are extracted. You can already ask Claude about what you discussed.
				</p>
			</div>

			<div class="timeline-card reveal reveal-delay-2">
				<div class="timeline-marker">
					<span class="timeline-dot dot-mid"></span>
					<span class="timeline-label">Month 3</span>
				</div>
				<p>
					Your topic registry spans hundreds of entries across platforms. Person timelines
					reveal how relationships evolve. Patterns emerge that you never noticed.
				</p>
			</div>

			<div class="timeline-card reveal reveal-delay-3">
				<div class="timeline-marker">
					<span class="timeline-dot dot-full"></span>
					<span class="timeline-label">Month 6+</span>
				</div>
				<p>
					Cross-platform links connect fragments you forgot about. Your embedding space
					captures the semantic shape of your life. Key facts form a searchable record
					of decisions, commitments, and turning points.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.compounding {
		background: var(--color-bg-alt);
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
		color: var(--color-teal);
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

	.timeline {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-xl);
		max-width: 900px;
		margin: 0 auto;
	}

	.timeline-card {
		padding: var(--space-2xl);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-normal) ease;
	}

	.timeline-card:hover {
		border-color: var(--color-border-light);
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
	}

	.timeline-marker {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		margin-bottom: var(--space-lg);
	}

	.timeline-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--color-accent);
		opacity: 0.4;
	}

	.dot-mid {
		opacity: 0.7;
	}

	.dot-full {
		opacity: 1;
	}

	.timeline-label {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--color-accent);
		letter-spacing: 0.04em;
	}

	.timeline-card p {
		color: var(--color-text-muted);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	@media (max-width: 900px) {
		.timeline {
			grid-template-columns: 1fr;
			max-width: 500px;
		}
	}
</style>
