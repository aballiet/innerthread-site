<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section class="features">
	<div class="container">
		<div class="section-header" use:inview>
			<h2 class="reveal">What makes innerthread <span class="highlight">different.</span></h2>
			<p class="reveal reveal-delay-1">
				Existing AI journaling apps all start from a blank page.
				innerthread starts from what you already said.
			</p>
		</div>

		<div class="feature-grid" use:inview>
			<div class="feature reveal reveal-delay-1">
				<div class="feature-tag">Ingestion</div>
				<h3>Real conversation data</h3>
				<p>
					Not what you remember to journal — what you actually said.
					Import from ChatGPT, Claude, WhatsApp, Messenger.
					Auto-detect format from file contents.
				</p>
			</div>

			<div class="feature reveal reveal-delay-2">
				<div class="feature-tag">Reflection</div>
				<h3>AI-powered via MCP</h3>
				<p>
					Claude Desktop reads your data through a local MCP server.
					No API costs — uses your existing Claude Pro subscription.
					Guided sessions that surface patterns across your life.
				</p>
			</div>

			<div class="feature reveal reveal-delay-3">
				<div class="feature-tag">Integration</div>
				<h3>Obsidian write-back</h3>
				<p>
					Your thin notes get enriched with evidence from real conversations.
					Cross-reference vault notes with what you discussed across platforms.
					Always preview before any file changes.
				</p>
			</div>

			<div class="feature reveal reveal-delay-4">
				<div class="feature-tag">Tracking</div>
				<h3>Life dimension mapping</h3>
				<p>
					Track how your thinking evolves across career, relationships, health,
					creativity, and personal growth. Real evidence showing change over time,
					not just vibes.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.section-header {
		text-align: center;
		margin-bottom: var(--space-4xl);
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

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-xl);
	}

	.feature {
		padding: var(--space-2xl);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-normal) ease;
		position: relative;
		overflow: hidden;
	}

	.feature::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, var(--color-accent), var(--color-teal));
		opacity: 0;
		transition: opacity var(--duration-normal) ease;
	}

	.feature:hover {
		border-color: var(--color-border-light);
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
	}

	.feature:hover::before {
		opacity: 1;
	}

	.feature-tag {
		display: inline-block;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-teal);
		background: var(--color-teal-glow);
		padding: 0.25em 0.75em;
		border-radius: var(--radius-full);
		margin-bottom: var(--space-lg);
	}

	h3 {
		font-size: 1.2rem;
		font-weight: 650;
		letter-spacing: -0.01em;
		margin-bottom: var(--space-md);
	}

	.feature p {
		color: var(--color-text-muted);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	@media (max-width: 768px) {
		.feature-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
