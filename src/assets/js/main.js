const headerEl = document.querySelector("header");
const options = {
	root: null,
	rootMargin: '0px',
	treshold: 0
}

function handleIntersection(entries, observer) {
	entries.forEach(entry => {
		if (!entry.isIntersecting)	{
			headerEl.classList.add('scrolled');
		} else {
			headerEl.classList.remove('scrolled');
		}
	})
}

window.addEventListener('load', (e) => {
	  let observer = new IntersectionObserver(handleIntersection, options);  
	  observer.observe(document.querySelector(".hero--intro .hero--label"));
	  observer.observe(document.querySelector(".article--post"));
});