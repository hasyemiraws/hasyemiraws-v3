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

(adsbygoogle = window.adsbygoogle || []).push({
	google_ad_client: "ca-pub-9523208256804448",
	enable_page_level_ads: true
});

window.addEventListener('load', (e) => {
	  let observer = new IntersectionObserver(handleIntersection, options);  
	  observer.observe(document.querySelector(".hero--intro .hero--label"));
	  observer.observe(document.querySelector(".article--post"));
});