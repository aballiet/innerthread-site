<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section id="get-started" class="open-source">
	<div class="container">
		<div class="cta-card" use:inview>
			<div class="cta-content reveal">
				<p class="cta-tag">Open Source</p>
				<h2>Built for people who own their tools.</h2>
				<p class="cta-desc">
					innerthread is free, open source, and runs entirely on your machine.
					Clone the repo, import your conversations, and start reflecting — in under five minutes.
				</p>
				<div class="cta-code">
					<code>
						<span class="code-comment"># Get started</span><br/>
						git clone https://github.com/aballiet/innerthread.git<br/>
						cd innerthread<br/>
						uv sync<br/>
						<span class="code-comment"># Import your first conversations</span><br/>
						uv run python -m innerthread ingest --source chatgpt --file export.json
					</code>
				</div>
				<div class="cta-actions">
					<a href="https://github.com/aballiet/innerthread" target="_blank" rel="noopener" class="btn btn-primary">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
						</svg>
						View on GitHub
					</a>
					<a href="https://github.com/aballiet/innerthread/blob/main/docs/roadmap.md" target="_blank" rel="noopener" class="btn btn-secondary">
						Read the Roadmap
					</a>
				</div>
			</div>
		</div>

		<div class="stats" use:inview>
			<div class="stat reveal reveal-delay-1">
				<span class="stat-value">MIT</span>
				<span class="stat-label">Licensed</span>
			</div>
			<div class="stat reveal reveal-delay-2">
				<span class="stat-value">100%</span>
				<span class="stat-label">Local</span>
			</div>
			<div class="stat reveal reveal-delay-3">
				<span class="stat-value">$0</span>
				<span class="stat-label">API costs</span>
			</div>
			<div class="stat reveal reveal-delay-4">
				<span class="stat-value">5+</span>
				<span class="stat-label">Platforms</span>
			</div>
		</div>
	</div>
</section>

<style>
	.open-source {
		padding-bottom: var(--space-4xl);
	}

	.cta-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		overflow: hidden;
	}

	.cta-content {
		padding: var(--space-4xl);
	}

	.cta-tag {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-accent);
		margin-bottom: var(--space-lg);
	}

	h2 {
		font-size: clamp(1.5rem, 3.5vw, 2.25rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-lg);
		max-width: 500px;
	}

	.cta-desc {
		color: var(--color-text-muted);
		font-size: 1.05rem;
		line-height: 1.7;
		max-width: 540px;
		margin-bottom: var(--space-2xl);
	}

	.cta-code {
		background: var(--color-bg-alt);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-xl);
		margin-bottom: var(--space-2xl);
		overflow-x: auto;
	}

	.cta-code code {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--color-text-muted);
		line-height: 1.8;
	}

	.code-comment {
		color: var(--color-text-faint);
	}

	.cta-actions {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		padding: 0.85rem 1.75rem;
		border-radius: var(--radius-full);
		font-weight: 600;
		font-size: 0.95rem;
		transition: all var(--duration-fast) ease;
		white-space: nowrap;
	}

	.btn-primary {
		background: var(--color-primary);
		color: var(--color-bg);
	}

	.btn-primary:hover {
		background: var(--color-text-muted);
		color: var(--color-bg);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(45, 42, 38, 0.15);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-text);
		border: 1px solid var(--color-border);
	}

	.btn-secondary:hover {
		background: var(--color-surface-hover);
		border-color: var(--color-border-light);
		transform: translateY(-2px);
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-xl);
		margin-top: var(--space-4xl);
		text-align: center;
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.stat-value {
		font-size: clamp(1.5rem, 3vw, 2.25rem);
		font-weight: 700;
		color: var(--color-accent);
		letter-spacing: -0.02em;
	}

	.stat-label {
		font-size: 0.85rem;
		color: var(--color-text-faint);
		font-weight: 450;
	}

	@media (max-width: 768px) {
		.cta-content {
			padding: var(--space-2xl);
		}

		.stats {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--space-xl) var(--space-md);
		}

		.cta-actions {
			flex-direction: column;
		}

		.btn {
			justify-content: center;
		}
	}
</style>
