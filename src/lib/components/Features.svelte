<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section id="features" class="features">
	<div class="container">
		<div class="section-header" use:inview>
			<h2 class="reveal">Explore, rediscover, <span class="highlight">reflect.</span></h2>
			<p class="reveal reveal-delay-1">
				Browse old conversations. Find forgotten moments. See patterns across platforms. Reflect when you're ready.
			</p>
		</div>

		<div class="feature-grid" use:inview>
			<div class="feature reveal reveal-delay-1">
				<div class="feature-tag">Chat</div>
				<h3>Claude embedded in the app</h3>
				<p>
					Claude lives inside Retrace and sees only what you allow. Use labels to give it
					access to the topics that matter. Ask about patterns, reflect on relationships,
					explore decisions. Your existing subscription via the Agent SDK.
				</p>
			</div>

			<div class="feature reveal reveal-delay-2">
				<div class="feature-tag">Network</div>
				<h3>See your social graph</h3>
				<p>
					Force-directed visualization of your relationships. Tie-strength scoring
					reveals your inner circle. Timelapse shows connections forming over months.
				</p>
			</div>

			<div class="feature reveal reveal-delay-3">
				<div class="feature-tag">Search</div>
				<h3>Find anything you ever said</h3>
				<p>
					Search by meaning, not just keywords. "That restaurant someone recommended
					last summer" works. 384-dimensional embeddings across all platforms in one query.
				</p>
			</div>

			<div class="feature reveal reveal-delay-4">
				<div class="feature-tag">Capsules</div>
				<h3>This time last year</h3>
				<p>
					Rediscover what you were thinking, feeling, and doing a year ago. AI-powered
					then-and-now comparisons surface what's changed, what echoes, and what you
					forgot entirely.
				</p>
			</div>

			<div class="feature reveal reveal-delay-1">
				<div class="feature-tag">Rivers</div>
				<h3>Watch your life flow</h3>
				<p>
					Streamgraph visualization of conversations over time, colored by person or topic.
					See where your attention goes and how it shifts.
				</p>
			</div>

			<div class="feature reveal reveal-delay-2">
				<div class="feature-tag">Sync</div>
				<h3>Set and forget with Chrome</h3>
				<p>
					Background syncs ChatGPT and Claude. Scrapes profile pictures from Messenger,
					WhatsApp, Instagram. WhatsApp connects live via QR.
				</p>
			</div>

			<div class="feature reveal reveal-delay-3">
				<div class="feature-tag">Scope</div>
				<h3>Labels and permissions</h3>
				<p>
					Tag conversations with labels. Set allow/block rules per consumer. Your private
					conversations stay private, even from your own agents.
				</p>
			</div>

			<div class="feature reveal reveal-delay-4">
				<div class="feature-tag">Write-back</div>
				<h3>Enriches your existing tools</h3>
				<p>
					Reflections sync to Obsidian as structured callout blocks with source evidence.
					Retrace makes your vault smarter, never replaces it.
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
		grid-template-columns: repeat(4, 1fr);
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
		font-size: 1.15rem;
		font-weight: 650;
		letter-spacing: -0.01em;
		margin-bottom: var(--space-md);
	}

	.feature p {
		color: var(--color-text-muted);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	@media (max-width: 1100px) {
		.feature-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.feature-grid {
			grid-template-columns: 1fr;
		}

		.feature {
			padding: var(--space-xl);
		}
	}
</style>
