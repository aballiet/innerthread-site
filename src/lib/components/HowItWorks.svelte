<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section id="how-it-works" class="how-it-works">
	<div class="container">
		<div class="section-header" use:inview>
			<h2 class="reveal">How it works</h2>
			<p class="reveal reveal-delay-1">Four steps from scattered conversations to structured self-knowledge.</p>
		</div>

		<div class="steps" use:inview>
			<div class="step reveal reveal-delay-1">
				<div class="step-number">01</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M7 10l5 5 5-5" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M12 15V3" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<h3>Import</h3>
				<p>Export your conversations from ChatGPT, Claude, WhatsApp, or Messenger. Drag and drop — innerthread auto-detects the format.</p>
			</div>

			<div class="step-connector" aria-hidden="true">
				<svg width="40" height="2" viewBox="0 0 40 2">
					<line x1="0" y1="1" x2="40" y2="1" stroke="var(--color-border-light)" stroke-width="1" stroke-dasharray="4 4"/>
				</svg>
			</div>

			<div class="step reveal reveal-delay-2">
				<div class="step-number">02</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<path d="M4 7V4a2 2 0 012-2h8.5L20 7.5V20a2 2 0 01-2 2H6a2 2 0 01-2-2v-3" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M14 2v6h6" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M2 13h10" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
						<path d="M2 17h7" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
						<path d="M2 9h5" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
				<h3>Store</h3>
				<p>Everything is normalized into a unified SQLite database on your machine. One schema across all platforms. Nothing leaves your device.</p>
			</div>

			<div class="step-connector" aria-hidden="true">
				<svg width="40" height="2" viewBox="0 0 40 2">
					<line x1="0" y1="1" x2="40" y2="1" stroke="var(--color-border-light)" stroke-width="1" stroke-dasharray="4 4"/>
				</svg>
			</div>

			<div class="step reveal reveal-delay-3">
				<div class="step-number">03</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<circle cx="12" cy="12" r="10" stroke="var(--color-accent)" stroke-width="1.5"/>
						<path d="M12 16v-4" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
						<path d="M12 8h.01" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
				<h3>Reflect</h3>
				<p>Open Claude Desktop and start a reflection session. innerthread exposes your data via MCP — using your existing Claude subscription. No API costs.</p>
			</div>

			<div class="step-connector" aria-hidden="true">
				<svg width="40" height="2" viewBox="0 0 40 2">
					<line x1="0" y1="1" x2="40" y2="1" stroke="var(--color-border-light)" stroke-width="1" stroke-dasharray="4 4"/>
				</svg>
			</div>

			<div class="step reveal reveal-delay-4">
				<div class="step-number">04</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<path d="M12 20h9" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<h3>Write Back</h3>
				<p>Reflections and insights are saved back to your Obsidian vault — enriching your notes with evidence from what you actually said.</p>
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

	.section-header p {
		color: var(--color-text-muted);
		font-size: 1.1rem;
	}

	.steps {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 0;
	}

	.step {
		flex: 1;
		max-width: 240px;
		text-align: center;
		padding: var(--space-xl);
	}

	.step-number {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-faint);
		letter-spacing: 0.1em;
		margin-bottom: var(--space-md);
		font-family: var(--font-mono);
	}

	.step-icon {
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto var(--space-lg);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-normal) ease;
	}

	.step:hover .step-icon {
		border-color: var(--color-border-light);
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
	}

	h3 {
		font-size: 1.15rem;
		font-weight: 600;
		margin-bottom: var(--space-sm);
		letter-spacing: -0.01em;
	}

	.step p {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.step-connector {
		display: flex;
		align-items: center;
		padding-top: 100px;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.steps {
			flex-direction: column;
			align-items: center;
		}

		.step {
			max-width: 400px;
		}

		.step-connector {
			padding-top: 0;
			transform: rotate(90deg);
			padding: var(--space-sm) 0;
		}
	}
</style>
