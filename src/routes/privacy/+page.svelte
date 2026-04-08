<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<div class="page-header" use:inview>
	<div class="container">
		<h1 class="reveal">Your data. Your machine. <span class="highlight">No exceptions.</span></h1>
		<p class="reveal reveal-delay-1">
			Retrace is built on a simple principle: your most personal conversations
			should never leave your computer.
		</p>
	</div>
</div>

<section class="pillars">
	<div class="container">
		<div class="pillars-grid" use:inview>
			<div class="pillar reveal reveal-delay-1">
				<div class="pillar-icon">
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M9 12l2 2 4-4" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<h2>Your data is stored locally. Always.</h2>
				<p>
					SQLite database in <code>~/.retrace/</code>. No accounts, no telemetry.
					Conversations, topics, embeddings, reflections are all on your laptop.
					When you use Claude or Gemini for reflection, you control exactly what
					they can access through labels and permissions.
				</p>
				<div class="pillar-detail">
					<code>~/.retrace/retrace.db</code>
					<span>One file. Your file. Copy it, back it up, delete it.</span>
				</div>
			</div>

			<div class="pillar reveal reveal-delay-2">
				<div class="pillar-icon">
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
						<rect x="3" y="3" width="18" height="14" rx="2" stroke="var(--color-teal)" stroke-width="1.5"/>
						<path d="M3 7h18" stroke="var(--color-teal)" stroke-width="1.5"/>
						<circle cx="6.5" cy="5" r="0.75" fill="var(--color-teal)"/>
						<circle cx="9" cy="5" r="0.75" fill="var(--color-teal)"/>
						<path d="M8 21h8M12 17v4" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
						<path d="M7 11h5M7 14h3" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
				<h2>Native macOS, not Electron.</h2>
				<p>
					Retrace is built with Tauri v2. It uses a fraction of the memory Electron apps
					consume, starts faster, and integrates properly with macOS. Standard .dmg install.
					Nothing unusual in your system.
				</p>
				<div class="pillar-detail">
					<span>Tauri v2 &middot; Rust &middot; SQLite &middot; sqlite-vec</span>
				</div>
			</div>

			<div class="pillar reveal reveal-delay-3">
				<div class="pillar-icon">
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
						<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="var(--color-accent-light)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<h2>Open source, forever.</h2>
				<p>
					MIT licensed. No VC funding. No growth targets. Read the code, audit the
					extension, fork it, build on it. Your reflection infrastructure should
					never be a black box.
				</p>
				<div class="pillar-detail">
					<span>MIT licensed &middot; No VC funding &middot; No growth targets</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="data-flow">
	<div class="container">
		<div class="flow-content" use:inview>
			<h2 class="reveal">The complete data path</h2>
			<div class="flow-steps reveal reveal-delay-1">
				<div class="flow-step">
					<div class="flow-label">Sources</div>
					<p>ChatGPT, Claude, WhatsApp, Messenger, Instagram, SMS, Obsidian, Calendar, Keep</p>
				</div>
				<div class="flow-arrow">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
						<path d="M8 20h24M24 12l8 8-8 8" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<div class="flow-step">
					<div class="flow-label">Import</div>
					<p>Extension, drag-and-drop, live sync. All local. No data sent anywhere.</p>
				</div>
				<div class="flow-arrow">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
						<path d="M8 20h24M24 12l8 8-8 8" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<div class="flow-step">
					<div class="flow-label">Process</div>
					<p>On-device LLM extracts topics, summaries, embeddings. Runs on your hardware.</p>
				</div>
				<div class="flow-arrow">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
						<path d="M8 20h24M24 12l8 8-8 8" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<div class="flow-step">
					<div class="flow-label">Store</div>
					<p><code>~/.retrace/retrace.db</code>. One SQLite file on your laptop. That's it.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="providers">
	<div class="container">
		<div class="providers-content" use:inview>
			<h2 class="reveal">When data leaves your machine</h2>
			<p class="providers-intro reveal reveal-delay-1">
				Most of Retrace works entirely offline: search, network graph, topic extraction,
				timeline browsing, Life Rivers, Time Capsules display. The only features that send
				data externally are <strong>AI reflection</strong> (embedded Claude chat, MCP server)
				and <strong>scheduled automations</strong>. This happens under the provider's privacy
				policy, and you control exactly what they can access.
			</p>

			<div class="provider-cards reveal reveal-delay-2">
				<div class="provider-card">
					<div class="provider-header">
						<span class="provider-name">Anthropic (Claude)</span>
						<span class="provider-badge provider-default">Default for reflection</span>
					</div>
					<p>
						Used for embedded chat and MCP server. Your existing Claude subscription
						(Pro/Max). Anthropic does not train on your data. Conversations are not
						stored beyond the session.
					</p>
					<a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener" class="provider-link">
						Anthropic Privacy Policy &rarr;
					</a>
				</div>

				<div class="provider-card">
					<div class="provider-header">
						<span class="provider-name">Google (Gemini)</span>
						<span class="provider-badge">Optional for automations</span>
					</div>
					<p>
						Used for scheduled reflections (weekly journal, project pulse). Free tier
						via AI Studio API key. Google does not use API data to train models.
						No account linking.
					</p>
					<a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener" class="provider-link">
						Gemini API Terms &rarr;
					</a>
				</div>

				<div class="provider-card provider-card--local">
					<div class="provider-header">
						<span class="provider-name">No provider</span>
						<span class="provider-badge provider-local">Fully offline</span>
					</div>
					<p>
						Without a Claude subscription or API key, reflection features are unavailable.
						Everything else works: browse conversations, semantic search, network graph,
						topic extraction, Life Rivers, Time Capsules, labels, and Obsidian sync.
						Retrace is still fully useful as a local archive and explorer.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="scope-control">
	<div class="container">
		<div class="scope-content" use:inview>
			<h2 class="reveal">You control what providers see</h2>
			<p class="scope-intro reveal reveal-delay-1">
				Retrace has a label-based permission system. Tag conversations with labels
				(platform, topic, or custom), then set allow/block rules per consumer. The
				embedded chat and MCP server only see what you explicitly permit.
			</p>
			<div class="scope-examples reveal reveal-delay-2">
				<div class="scope-example">
					<div class="scope-rule">
						<span class="scope-consumer">Embedded chat</span>
						<span class="scope-action scope-block">Block</span>
						<span class="scope-label">private</span>
						<span class="scope-label">family</span>
					</div>
					<p>Claude cannot access conversations tagged "private" or "family"</p>
				</div>
				<div class="scope-example">
					<div class="scope-rule">
						<span class="scope-consumer">MCP server</span>
						<span class="scope-action scope-allow">Allow</span>
						<span class="scope-label">chatgpt</span>
						<span class="scope-label">claude</span>
					</div>
					<p>Claude Desktop can only access your AI conversations, nothing else</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="tech-details">
	<div class="container">
		<div class="details-grid" use:inview>
			<h2 class="reveal">Technical details</h2>
			<div class="detail-items reveal reveal-delay-1">
				<div class="detail">
					<span class="detail-label">Database</span>
					<code>~/.retrace/retrace.db</code>
				</div>
				<div class="detail">
					<span class="detail-label">Raw payloads</span>
					<code>~/.retrace/raw/</code>
				</div>
				<div class="detail">
					<span class="detail-label">LLM models</span>
					<code>~/.retrace/models/</code>
				</div>
				<div class="detail">
					<span class="detail-label">Telemetry</span>
					<span class="detail-none">None. Zero. Nothing phones home.</span>
				</div>
				<div class="detail">
					<span class="detail-label">Analytics</span>
					<span class="detail-none">None. We don't know you exist.</span>
				</div>
				<div class="detail">
					<span class="detail-label">License</span>
					<a href="https://github.com/aballiet/retrace/blob/main/LICENSE" target="_blank" rel="noopener">MIT</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.page-header {
		padding-top: 140px;
		padding-bottom: var(--space-2xl);
		text-align: center;
	}

	.page-header h1 {
		font-size: clamp(2rem, 5vw, 3.25rem);
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.15;
		margin-bottom: var(--space-lg);
	}

	.highlight {
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.page-header p {
		color: var(--color-text-muted);
		font-size: 1.15rem;
		max-width: 560px;
		margin: 0 auto;
		line-height: 1.7;
	}

	/* Pillars */
	.pillars { padding: var(--space-4xl) 0; }

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-xl);
	}

	.pillar {
		padding: var(--space-2xl);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-normal) ease;
	}

	.pillar:hover {
		border-color: var(--color-border-light);
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
	}

	.pillar-icon { margin-bottom: var(--space-xl); }

	.pillar h2 {
		font-size: 1.25rem;
		font-weight: 650;
		letter-spacing: -0.01em;
		margin-bottom: var(--space-md);
	}

	.pillar p {
		color: var(--color-text-muted);
		font-size: 0.95rem;
		line-height: 1.7;
		margin-bottom: var(--space-xl);
	}

	.pillar-detail {
		padding-top: var(--space-lg);
		border-top: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.pillar-detail code {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--color-teal);
		background: var(--color-teal-glow);
		padding: 0.2em 0.5em;
		border-radius: var(--radius-sm);
		display: inline-block;
		width: fit-content;
	}

	.pillar-detail span {
		font-size: 0.85rem;
		color: var(--color-text-faint);
	}

	/* Data flow */
	.data-flow {
		background: var(--color-bg-alt);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		padding: var(--space-4xl) 0;
	}

	.flow-content h2 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		text-align: center;
		margin-bottom: var(--space-3xl);
	}

	.flow-steps {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	.flow-step {
		flex: 1;
		min-width: 140px;
		max-width: 200px;
		text-align: center;
	}

	.flow-label {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-accent);
		margin-bottom: var(--space-sm);
	}

	.flow-step p {
		font-size: 0.85rem;
		color: var(--color-text-muted);
		line-height: 1.5;
	}

	.flow-step code {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--color-teal);
	}

	.flow-arrow {
		flex-shrink: 0;
		opacity: 0.4;
	}

	/* Providers */
	.providers { padding: var(--space-4xl) 0; }

	.providers-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.providers-content h2 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-lg);
	}

	.providers-intro {
		color: var(--color-text-muted);
		font-size: 1.05rem;
		line-height: 1.7;
		margin-bottom: var(--space-2xl);
	}

	.providers-intro strong {
		color: var(--color-text);
		font-weight: 600;
	}

	.provider-cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-lg);
	}

	.provider-card {
		padding: var(--space-xl);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.provider-card--local {
		border-style: dashed;
	}

	.provider-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.provider-name {
		font-size: 1.05rem;
		font-weight: 650;
		letter-spacing: -0.01em;
	}

	.provider-badge {
		display: inline-block;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 0.2em 0.6em;
		border-radius: var(--radius-full);
		width: fit-content;
		color: var(--color-text-faint);
		background: var(--color-bg-alt);
		border: 1px solid var(--color-border);
	}

	.provider-default {
		color: var(--color-teal);
		background: var(--color-teal-glow);
		border-color: rgba(58, 143, 133, 0.2);
	}

	.provider-local {
		color: var(--color-accent);
		background: var(--color-accent-glow);
		border-color: rgba(200, 114, 58, 0.2);
	}

	.provider-card p {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.provider-link {
		color: var(--color-accent);
		font-size: 0.85rem;
		font-weight: 500;
		margin-top: auto;
	}

	/* Scope control */
	.scope-control {
		background: var(--color-bg-alt);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		padding: var(--space-4xl) 0;
	}

	.scope-content {
		max-width: 700px;
		margin: 0 auto;
	}

	.scope-content h2 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-md);
	}

	.scope-intro {
		color: var(--color-text-muted);
		font-size: 1.05rem;
		line-height: 1.7;
		margin-bottom: var(--space-2xl);
	}

	.scope-examples {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.scope-example {
		padding: var(--space-lg);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
	}

	.scope-rule {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		flex-wrap: wrap;
		margin-bottom: var(--space-sm);
	}

	.scope-consumer {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.scope-action {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 0.2em 0.5em;
		border-radius: var(--radius-sm);
	}

	.scope-block { color: #c0392b; background: rgba(192, 57, 43, 0.1); }
	.scope-allow { color: #5d8c6a; background: rgba(93, 140, 106, 0.1); }

	.scope-label {
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		padding: 0.25em 0.7em;
		border-radius: var(--radius-full);
		color: var(--color-text-muted);
		background: var(--color-bg-alt);
		border: 1px solid var(--color-border);
	}

	.scope-example p {
		font-size: 0.85rem;
		color: var(--color-text-faint);
	}

	/* Tech details */
	.tech-details {
		background: var(--color-bg-alt);
		border-top: 1px solid var(--color-border);
		padding: var(--space-4xl) 0;
	}

	.details-grid h2 {
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-2xl);
	}

	.detail-items {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-md);
		max-width: 600px;
	}

	.detail {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: var(--space-md) 0;
		border-bottom: 1px solid var(--color-border);
	}

	.detail-label {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--color-text-faint);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.detail code {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--color-teal);
	}

	.detail-none {
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	.detail a {
		font-size: 0.9rem;
		color: var(--color-accent);
	}

	@media (max-width: 900px) {
		.pillars-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
		.provider-cards { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
		.flow-arrow { display: none; }
		.flow-steps { flex-direction: column; }
		.flow-step { max-width: 100%; }
		.detail-items { grid-template-columns: 1fr; }
	}

	@media (max-width: 640px) {
		.page-header { padding-top: 100px; }
		.page-header h1 { font-size: clamp(1.75rem, 5vw, 2.5rem); }
		.pillar { padding: var(--space-xl); }
		.provider-card { padding: var(--space-lg); }
		.scope-example { padding: var(--space-md); }
		.scope-rule { gap: var(--space-xs); }
	}
</style>
