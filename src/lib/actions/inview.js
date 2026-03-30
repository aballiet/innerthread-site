/**
 * Svelte action that adds a 'visible' class when the element enters the viewport.
 * Usage: <div use:inview>...</div>
 */
export function inview(node, params = {}) {
	const { threshold = 0.15, once = true } = params;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('visible');
					if (once) {
						observer.unobserve(node);
					}
				} else if (!once) {
					node.classList.remove('visible');
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
