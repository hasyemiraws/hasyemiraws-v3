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
	(adsbygoogle = window.adsbygoogle || []).push({
		google_ad_client: "ca-pub-9523208256804448",
		enable_page_level_ads: true
	});
});

window.onscroll = function() {myFunction()};

function myFunction() {
	if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
		headerEl.classList.add('scrolled');
	} else {
		headerEl.classList.remove('scrolled');
	}
}