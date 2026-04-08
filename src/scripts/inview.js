/**
 * Intersection Observer for scroll-triggered animations.
 * Adds 'visible' class when elements with data-inview enter the viewport.
 */
function initInview() {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 }
	);

	document.querySelectorAll('[data-inview]').forEach((el) => {
		observer.observe(el);
	});
}

// Run on initial load
initInview();

// Re-run after Astro page transitions (if View Transitions are enabled)
document.addEventListener('astro:page-load', initInview);
