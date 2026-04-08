<script>
	import Hero from '$lib/components/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof.svelte';
	import InteractiveDemo from '$lib/components/InteractiveDemo.svelte';
	import Problem from '$lib/components/Problem.svelte';
	import Compounding from '$lib/components/Compounding.svelte';
	import OpenSource from '$lib/components/OpenSource.svelte';
	import { inview } from '$lib/actions/inview.js';
</script>

<Hero />
<SocialProof />

<!-- Feature showcase: embedded visual examples -->
<section class="showcase">
	<div class="container">
		<div class="section-header" use:inview>
			<h2 class="reveal">Explore, rediscover, <span class="highlight">reflect.</span></h2>
			<p class="reveal reveal-delay-1">
				Browse old conversations. Find forgotten moments. See patterns across platforms.
			</p>
		</div>

		<div class="showcase-grid" use:inview>
			<a href="/features#search" class="showcase-card showcase-search reveal reveal-delay-1">
				<span class="showcase-tag">Search</span>
				<h3>Find anything you ever said</h3>
				<p class="showcase-desc">Semantic search across every platform. Find conversations by meaning, not just keywords.</p>
				<div class="showcase-visual">
					<div class="mini-search">
						<div class="mini-bar">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
							restaurant recommendation
						</div>
						<div class="mini-result"><span class="mini-platform mp-wa">WhatsApp</span> "You have to try Maison Plisson"</div>
						<div class="mini-result"><span class="mini-platform mp-gpt">ChatGPT</span> "Based on your preferences..."</div>
						<div class="mini-result"><span class="mini-platform mp-msg">Messenger</span> "We ended up at that place"</div>
						<div class="mini-result"><span class="mini-platform mp-ig">Instagram</span> "Saved that reel with the menu"</div>
						<div class="mini-result"><span class="mini-platform mp-keep">Keep</span> "Paris food list: Maison Plisson, Le..."</div>
					</div>
				</div>
			</a>

			<a href="/features#network" class="showcase-card showcase-graph reveal reveal-delay-2">
				<span class="showcase-tag">Network</span>
				<h3>See your relationships evolve</h3>
				<p class="showcase-desc">Force-directed graph with tie-strength scoring and timelapse animation.</p>
				<div class="showcase-visual">
					<svg viewBox="30 35 240 170" class="mini-graph">
						<line x1="150" y1="110" x2="80" y2="60" stroke="var(--color-accent)" stroke-width="2" opacity="0.6"/>
						<line x1="150" y1="110" x2="220" y2="70" stroke="var(--color-accent)" stroke-width="1.5" opacity="0.4"/>
						<line x1="150" y1="110" x2="100" y2="170" stroke="var(--color-teal)" stroke-width="2.5" opacity="0.7"/>
						<line x1="150" y1="110" x2="230" y2="160" stroke="var(--color-accent-light)" stroke-width="1" opacity="0.3"/>
						<line x1="150" y1="110" x2="60" y2="130" stroke="var(--color-teal)" stroke-width="1.5" opacity="0.5"/>
						<line x1="80" y1="60" x2="60" y2="130" stroke="var(--color-border-light)" stroke-width="1" opacity="0.3"/>
						<line x1="220" y1="70" x2="230" y2="160" stroke="var(--color-border-light)" stroke-width="1" opacity="0.2"/>
						<circle cx="150" cy="110" r="14" fill="var(--color-accent)" opacity="0.9"/>
						<text x="150" y="114" text-anchor="middle" fill="white" font-size="8" font-weight="600">You</text>
						<circle cx="80" cy="60" r="10" fill="var(--color-teal)" opacity="0.8"/>
						<text x="80" y="44" text-anchor="middle" fill="var(--color-text-muted)" font-size="7.5">Sarah</text>
						<circle cx="100" cy="170" r="11" fill="var(--color-teal)" opacity="0.8"/>
						<text x="100" y="190" text-anchor="middle" fill="var(--color-text-muted)" font-size="7.5">Tom</text>
						<circle cx="220" cy="70" r="8" fill="var(--color-accent-light)" opacity="0.6"/>
						<text x="220" y="56" text-anchor="middle" fill="var(--color-text-faint)" font-size="7">Maya</text>
						<circle cx="60" cy="130" r="7" fill="var(--color-accent-light)" opacity="0.5"/>
						<text x="45" y="125" text-anchor="middle" fill="var(--color-text-faint)" font-size="7">Alex</text>
						<circle cx="230" cy="160" r="5" fill="var(--color-text-faint)" opacity="0.4"/>
						<text x="252" y="163" text-anchor="middle" fill="var(--color-text-faint)" font-size="6.5">Jules</text>
					</svg>
					<div class="mini-graph-legend">
						<span class="legend-item"><span class="legend-dot dot-inner"></span> Inner circle</span>
						<span class="legend-item"><span class="legend-dot dot-active"></span> Active</span>
						<span class="legend-item"><span class="legend-dot dot-extended"></span> Extended</span>
					</div>
				</div>
			</a>

			<a href="/features#capsules" class="showcase-card showcase-capsule reveal reveal-delay-3">
				<span class="showcase-tag">Capsules</span>
				<h3>This time last year</h3>
				<p class="showcase-desc">AI-powered then-and-now comparisons. See what changed and what you forgot.</p>
				<div class="showcase-visual">
					<div class="mini-capsule">
						<div class="capsule-column">
							<div class="capsule-date">Apr 2025</div>
							<div class="capsule-entry">
								<span class="capsule-source mp-gpt">ChatGPT</span>
								"Should I quit? I keep going back and forth"
							</div>
							<div class="capsule-entry">
								<span class="capsule-source mp-wa">WhatsApp</span>
								"I'm scared to leave my job honestly"
							</div>
						</div>
						<div class="capsule-arrow">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M5 12h14M13 6l6 6-6 6" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<div class="capsule-column">
							<div class="capsule-date capsule-date-now">Apr 2026</div>
							<div class="capsule-entry">
								<span class="capsule-source mp-msg">Messenger</span>
								"Six months in, the fear is completely gone"
							</div>
							<div class="capsule-entry">
								<span class="capsule-source mp-gpt">ChatGPT</span>
								"Help me plan my first hire"
							</div>
						</div>
					</div>
				</div>
			</a>

			<a href="/features#chat" class="showcase-card showcase-chat reveal reveal-delay-4">
				<span class="showcase-tag">Chat</span>
				<h3>Ask Claude about your life</h3>
				<p class="showcase-desc">Claude sees only what you allow. Explore your history or reflect on it.</p>
				<div class="showcase-visual">
					<div class="mini-chat">
						<div class="mini-user">What idea have I kept coming back to?</div>
						<div class="mini-claude">
							<div class="claude-text">One thread runs through 23 conversations across 8 months: building something of your own.</div>
							<div class="claude-sources">
								<span class="claude-source"><span class="mini-platform mp-gpt">ChatGPT</span> 12 conversations</span>
								<span class="claude-source"><span class="mini-platform mp-wa">WhatsApp</span> 8 messages</span>
								<span class="claude-source"><span class="mini-platform mp-msg">Messenger</span> 3 messages</span>
							</div>
						</div>
						<div class="mini-user">When did it start?</div>
						<div class="mini-claude">
							<div class="claude-text">The first mention was August 2025, right after your trip to Lisbon. You told Sarah "I think I want to build my own thing."</div>
						</div>
					</div>
				</div>
			</a>
		</div>

		<div class="showcase-cta" use:inview>
			<a href="/features" class="reveal">See all features &rarr;</a>
		</div>
	</div>
</section>

<InteractiveDemo />
<Compounding />
<Problem />

<!-- Privacy signal (lightweight) -->
<section class="privacy-signal">
	<div class="container">
		<div class="signal-content" use:inview>
			<h2 class="reveal">Your data. Your machine. <span class="highlight">No exceptions.</span></h2>
			<div class="signal-grid reveal reveal-delay-1">
				<div class="signal-item">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
					<span>Your data stored locally. Always.</span>
				</div>
				<div class="signal-item">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
					<span>Open source. MIT licensed.</span>
				</div>
				<div class="signal-item">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="var(--color-accent-light)" stroke-width="1.5"/>
						<line x1="1" y1="1" x2="23" y2="23" stroke="var(--color-accent-light)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
					<span>No telemetry. No tracking.</span>
				</div>
			</div>
			<a href="/privacy" class="signal-link reveal reveal-delay-2">Learn more about privacy &rarr;</a>
		</div>
	</div>
</section>

<OpenSource />

<style>
	/* Feature showcase */
	.showcase { padding: var(--space-4xl) 0; }

	.section-header { text-align: center; margin-bottom: var(--space-3xl); }

	.section-header h2 {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-md);
	}

	.highlight { color: var(--color-accent); }

	.section-header p {
		color: var(--color-text-muted);
		font-size: 1.1rem;
		max-width: 480px;
		margin: 0 auto;
	}

	.showcase-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-lg);
	}

	.showcase-card {
		padding: var(--space-lg);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-normal) ease;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		color: inherit;
		text-decoration: none;
	}

	.showcase-card:hover {
		border-color: var(--color-border-light);
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
		color: inherit;
	}

	.showcase-tag {
		display: inline-block;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-teal);
		background: var(--color-teal-glow);
		padding: 0.2em 0.6em;
		border-radius: var(--radius-full);
		width: fit-content;
	}

	.showcase-card h3 {
		font-size: 1.15rem;
		font-weight: 650;
		letter-spacing: -0.01em;
	}

	.showcase-desc {
		font-size: 0.88rem;
		color: var(--color-text-muted);
		line-height: 1.5;
	}

	.showcase-visual {
		padding: var(--space-md);
		background: var(--color-bg);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
	}

	/* Mini search */
	.mini-search { display: flex; flex-direction: column; gap: var(--space-sm); }
	.mini-bar {
		display: flex; align-items: center; gap: var(--space-xs);
		font-size: 0.75rem; color: var(--color-text-faint);
		padding: var(--space-xs) var(--space-sm);
		border: 1px solid var(--color-border); border-radius: var(--radius-full);
	}
	.mini-result {
		font-size: 0.72rem; color: var(--color-text-muted);
		padding: var(--space-xs) var(--space-sm);
		display: flex; align-items: center; gap: var(--space-sm);
	}
	.mini-platform {
		font-size: 0.6rem; font-weight: 700; letter-spacing: 0.04em;
		text-transform: uppercase; padding: 0.1em 0.4em; border-radius: 3px; flex-shrink: 0;
	}
	.mp-wa { color: #25D366; background: rgba(37, 211, 102, 0.1); }
	.mp-gpt { color: #10A37F; background: rgba(16, 163, 127, 0.1); }
	.mp-msg { color: #0084FF; background: rgba(0, 132, 255, 0.1); }
	.mp-ig { color: #E4405F; background: rgba(228, 64, 95, 0.1); }
	.mp-keep { color: #FBBC04; background: rgba(251, 188, 4, 0.15); }

	/* Mini graph */
	.mini-graph { width: 100%; max-width: 260px; height: auto; display: block; margin: 0 auto; }
	.mini-graph-legend {
		display: flex; gap: var(--space-md); justify-content: center;
		margin-top: var(--space-sm);
	}
	.legend-item {
		display: flex; align-items: center; gap: var(--space-xs);
		font-size: 0.7rem; color: var(--color-text-faint);
	}
	.legend-dot { width: 7px; height: 7px; border-radius: 50%; }
	.dot-inner { background: var(--color-teal); }
	.dot-active { background: var(--color-accent-light); }
	.dot-extended { background: var(--color-text-faint); opacity: 0.5; }

	/* Mini capsule */
	.mini-capsule { display: flex; align-items: center; gap: var(--space-sm); }
	.capsule-column { flex: 1; display: flex; flex-direction: column; gap: var(--space-sm); }
	.capsule-date {
		font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
		text-transform: uppercase; color: var(--color-text-faint);
	}
	.capsule-date-now { color: var(--color-accent); }
	.capsule-entry {
		font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.5;
		display: flex; flex-direction: column; gap: 2px;
	}
	.capsule-source {
		font-size: 0.6rem; font-weight: 700; letter-spacing: 0.04em;
		text-transform: uppercase; padding: 0.1em 0.4em; border-radius: 3px;
		width: fit-content;
	}
	.capsule-arrow { flex-shrink: 0; color: var(--color-text-faint); }

	/* Mini chat */
	.mini-chat { display: flex; flex-direction: column; gap: var(--space-sm); }
	.mini-user {
		font-size: 0.78rem; color: var(--color-text); font-weight: 500;
		padding: var(--space-xs) var(--space-sm);
		background: var(--color-accent-glow); border-radius: var(--radius-sm);
	}
	.mini-claude {
		font-size: 0.75rem; color: var(--color-text-muted); line-height: 1.5;
		padding-left: var(--space-sm); border-left: 2px solid var(--color-teal);
		display: flex; flex-direction: column; gap: var(--space-sm);
	}
	.claude-text { line-height: 1.5; }
	.claude-sources {
		display: flex; flex-wrap: wrap; gap: var(--space-xs);
	}
	.claude-source {
		display: flex; align-items: center; gap: 4px;
		font-size: 0.65rem; color: var(--color-text-faint);
	}

	.showcase-cta { text-align: center; margin-top: var(--space-2xl); }
	.showcase-cta a { color: var(--color-accent); font-weight: 500; font-size: 0.95rem; }

	/* Privacy signal */
	.privacy-signal { padding: var(--space-4xl) 0; text-align: center; }

	.privacy-signal h2 {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-2xl);
	}

	.signal-grid {
		display: flex;
		justify-content: center;
		gap: var(--space-3xl);
		flex-wrap: wrap;
		margin-bottom: var(--space-xl);
	}

	.signal-item {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: 0.95rem;
		color: var(--color-text-muted);
	}

	.signal-link { color: var(--color-accent); font-size: 0.9rem; font-weight: 500; }

	@media (max-width: 768px) {
		.showcase-grid { grid-template-columns: 1fr; }
		.signal-grid { flex-direction: column; align-items: center; gap: var(--space-lg); }
		.mini-capsule { flex-direction: column; }
		.capsule-arrow { transform: rotate(90deg); align-self: center; }
	}

	@media (max-width: 480px) {
		.showcase-card { padding: var(--space-lg); }
		.showcase-visual { padding: var(--space-sm); }
		.signal-item { font-size: 0.85rem; }
		.signal-item svg { flex-shrink: 0; }
	}
</style>
