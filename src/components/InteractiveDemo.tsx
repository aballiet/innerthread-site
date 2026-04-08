import { useState, useEffect, useRef, useCallback } from 'react';
import './InteractiveDemo.css';

export default function InteractiveDemo() {
	const [loaded, setLoaded] = useState(false);
	const [failed, setFailed] = useState(false);
	const [visible, setVisible] = useState(false);

	const frameRef = useRef<HTMLDivElement>(null);

	// Observe the demo frame and trigger iframe load when it enters the viewport
	useEffect(() => {
		const el = frameRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.05 }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	// Fallback: force loaded state after 8 seconds once visible
	useEffect(() => {
		if (!visible) return;
		const timer = setTimeout(() => {
			setLoaded((prev) => {
				if (!prev) return true;
				return prev;
			});
		}, 8000);
		return () => clearTimeout(timer);
	}, [visible]);

	const onIframeLoad = useCallback(() => {
		setLoaded(true);
	}, []);

	const onError = useCallback(() => {
		setFailed(true);
	}, []);

	return (
		<section id="demo" className="demo-section">
			<div className="container">
				{/* Section header */}
				<div className="section-header" data-inview>
					<h2 className="reveal">
						See it in <span className="highlight">action.</span>
					</h2>
					<p className="reveal reveal-delay-1">
						Explore a fully interactive demo with fictional data. No download
						required.
					</p>
				</div>

				{/* Desktop: embedded iframe */}
				<div
					ref={frameRef}
					className="demo-frame reveal reveal-delay-2"
					data-inview
				>
					<div className="demo-frame__titlebar">
						<span className="demo-frame__dot demo-frame__dot--red" />
						<span className="demo-frame__dot demo-frame__dot--yellow" />
						<span className="demo-frame__dot demo-frame__dot--green" />
						<span className="demo-frame__titlebar-text">Retrace</span>
					</div>
					<div className="demo-frame__content">
						{!loaded && !failed && (
							<div className="demo-frame__loading">
								<div className="demo-frame__spinner" />
								<span>Loading demo...</span>
							</div>
						)}
						{failed ? (
							<div className="demo-frame__error">
								<p>Demo failed to load.</p>
								<a
									href="/demo/"
									target="_blank"
									rel="noopener"
									className="error-link"
								>
									Open in a new tab &rarr;
								</a>
							</div>
						) : (
							visible && (
								<iframe
									src="/demo/"
									title="Retrace interactive demo"
									onLoad={onIframeLoad}
									onError={onError}
									className={loaded ? 'loaded' : ''}
								/>
							)
						)}
					</div>
				</div>

				{/* Mobile: fallback */}
				<div className="demo-mobile reveal reveal-delay-2" data-inview>
					<div className="demo-mobile__icon">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
							<rect
								x="5"
								y="2"
								width="14"
								height="20"
								rx="2"
								stroke="var(--color-accent)"
								strokeWidth="1.5"
							/>
							<path
								d="M12 18h.01"
								stroke="var(--color-accent)"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</div>
					<p>
						The full interactive demo is designed for larger screens.
					</p>
					<p className="demo-mobile__hint">
						Try it on your laptop or open it in landscape for a quick look.
					</p>
					<a
						href="/demo/"
						target="_blank"
						rel="noopener"
						className="btn-primary-mobile"
					>
						Open demo
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="15 3 21 3 21 9" />
							<line x1="10" y1="14" x2="21" y2="3" />
						</svg>
					</a>
				</div>

				{/* CTA section */}
				<div className="demo-cta reveal reveal-delay-3" data-inview>
					<p className="demo-cta__text">
						Free, open source, your data stays on your Mac.
					</p>
					<div className="demo-cta__buttons">
						<a
							href="https://github.com/aballiet/retrace"
							target="_blank"
							rel="noopener"
							className="btn btn-secondary"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
							</svg>
							View on GitHub
						</a>
						<a
							href="/demo/"
							target="_blank"
							rel="noopener"
							className="btn btn-secondary"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
								<path d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" />
							</svg>
							Open demo in new tab
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
