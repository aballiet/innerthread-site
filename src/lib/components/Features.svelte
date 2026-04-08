<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section id="features" class="features">
	<div class="container">
		<div class="section-header" use:inview>
			<h2 class="reveal">Everything Retrace <span class="highlight">can do.</span></h2>
			<p class="reveal reveal-delay-1">
				Built for people who want to understand their own thinking across every platform they use.
			</p>
		</div>

		<div class="feature-grid" use:inview>
			<div class="feature reveal reveal-delay-1">
				<div class="feature-tag">Chat</div>
				<h3>Claude embedded in the app</h3>
				<p>
					Claude lives inside Retrace with full access to your conversations, topics, and people.
					Ask about patterns in your life, reflect on relationships, or explore decisions you made.
					Uses your existing Claude subscription via the Agent SDK.
				</p>
			</div>

			<div class="feature reveal reveal-delay-2">
				<div class="feature-tag">Network</div>
				<h3>See your social graph</h3>
				<p>
					An interactive force-directed graph visualizes your relationships with
					tie-strength scoring. Watch connections form over time with timelapse animation.
					Dunbar-inspired tiers from inner circle to periphery.
				</p>
			</div>

			<div class="feature reveal reveal-delay-3">
				<div class="feature-tag">Sync</div>
				<h3>Set and forget with Chrome</h3>
				<p>
					The browser extension syncs ChatGPT and Claude conversations in the background.
					It also scrapes profile pictures from Messenger, WhatsApp, and Instagram
					as you browse. WhatsApp connects live via QR code for real-time messages.
				</p>
			</div>

			<div class="feature reveal reveal-delay-4">
				<div class="feature-tag">Search</div>
				<h3>Semantic and keyword hybrid</h3>
				<p>
					Find conversations by meaning, not just keywords. Powered by sqlite-vec
					with 384-dimensional embeddings. Searches across all platforms in a single query.
				</p>
			</div>

			<div class="feature reveal reveal-delay-3">
				<div class="feature-tag">Reflect</div>
				<h3>Time Capsules and reflections</h3>
				<p>
					"This time last year" comparisons surface how your thinking evolved.
					Guided reflection sessions produce structured notes with source references.
					Reflections sync to Obsidian and build on each other over time.
				</p>
			</div>

			<div class="feature reveal reveal-delay-4">
				<div class="feature-tag">Scope</div>
				<h3>Labels and permissions</h3>
				<p>
					Tag conversations with labels (platform, topic, or custom). Set allow/block
					rules per consumer to control what the embedded chat or MCP server can access.
					Your private conversations stay private, even from your own agents.
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
		grid-template-columns: repeat(3, 1fr);
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

	@media (max-width: 900px) {
		.feature-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.feature-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
