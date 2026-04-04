<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section class="problem">
	<div class="container">
		<div class="problem-content" use:inview>
			<h2 class="reveal">Your thinking is scattered<br /><span class="highlight">across platforms that don't talk.</span></h2>
			<p class="reveal reveal-delay-1">
				You work through a career decision in ChatGPT. You vent to a friend on WhatsApp.
				You map out a health goal with Claude. Each contains real insight. None of them connect.
			</p>
			<p class="reveal reveal-delay-2">
				Your calendar shows what you did. Your journal shows what you thought.
				Your messages show what you said. Your AI conversations show how you reasoned.
				No single app holds the full picture. Retrace <em>connects all of them.</em>
			</p>
		</div>

		<div class="platforms" use:inview>
			<div class="platform-group reveal reveal-delay-1">
				<div class="group-label">Browser extension</div>
				<div class="group-items">
					<div class="platform">
						<div class="platform-icon">
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
								<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<span>ChatGPT</span>
					</div>
					<div class="platform">
						<div class="platform-icon">
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<span>Claude</span>
					</div>
					<div class="platform">
						<div class="platform-icon">
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<span>Gemini</span>
					</div>
				</div>
			</div>

			<div class="platform-group reveal reveal-delay-2">
				<div class="group-label">Import</div>
				<div class="group-items">
					<div class="platform">
						<div class="platform-icon">
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
								<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<span>WhatsApp</span>
					</div>
					<div class="platform">
						<div class="platform-icon">
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
								<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<span>Keep</span>
					</div>
					<div class="platform">
						<div class="platform-icon">
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
								<rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>
								<path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
							</svg>
						</div>
						<span>Calendar</span>
					</div>
				</div>
				<div class="group-extra">+SMS, Instagram</div>
			</div>

			<div class="platform-group reveal reveal-delay-2">
				<div class="group-label">Filesystem</div>
				<div class="group-items">
					<div class="platform">
						<div class="platform-icon">
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
								<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<span>Obsidian</span>
					</div>
				</div>
			</div>

			<div class="connector reveal reveal-delay-3">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
					<path d="M8 20h24M24 12l8 8-8 8" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>

			<div class="platform platform-result reveal reveal-delay-3">
				<div class="platform-icon result-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
						<circle cx="12" cy="12" r="10" stroke="var(--color-accent)" stroke-width="1.5"/>
						<path d="M8 6c2 4 2 8 0 12" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
						<path d="M12 4v16" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
						<path d="M16 6c-2 4-2 8 0 12" stroke="var(--color-accent-light)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
				<span>Retrace</span>
			</div>
		</div>
	</div>
</section>

<style>
	.problem {
		background: var(--color-bg-alt);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.problem-content {
		text-align: center;
		max-width: 680px;
		margin: 0 auto var(--space-4xl);
	}

	h2 {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.2;
		margin-bottom: var(--space-xl);
	}

	.highlight {
		color: var(--color-accent);
	}

	.problem-content p {
		color: var(--color-text-muted);
		font-size: 1.1rem;
		margin-bottom: var(--space-md);
	}

	.problem-content em {
		color: var(--color-text);
		font-style: normal;
		font-weight: 500;
	}

	.platforms {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xl);
		flex-wrap: wrap;
	}

	.platform-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
	}

	.group-label {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	.group-extra {
		font-size: 0.75rem;
		color: var(--color-text-faint);
		font-weight: 450;
	}

	.group-items {
		display: flex;
		gap: var(--space-lg);
	}

	.platform {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
	}

	.platform-icon {
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		color: var(--color-text-muted);
		transition: all var(--duration-normal) ease;
	}

	.platform:hover .platform-icon {
		border-color: var(--color-border-light);
		transform: translateY(-2px);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
	}

	.platform span {
		font-size: 0.8rem;
		color: var(--color-text-faint);
		font-weight: 450;
	}

	.connector {
		display: flex;
		align-items: center;
		padding: 0 var(--space-sm);
	}

	.result-icon {
		border-color: var(--color-accent) !important;
		background: var(--color-accent-glow) !important;
	}

	.platform-result span {
		color: var(--color-accent) !important;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.platforms {
			gap: var(--space-lg);
		}

		.platform-icon {
			width: 52px;
			height: 52px;
		}

		.connector {
			width: 100%;
			justify-content: center;
			padding: var(--space-sm) 0;
		}

		.connector svg {
			transform: rotate(90deg);
		}
	}
</style>
