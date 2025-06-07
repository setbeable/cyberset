	// news.js

		async function loadNews() {
	  const feedUrls = [
		"https://www.acn.gov.it/feed",
		"https://www.redhotcyber.com/feed/",
		"https://www.cybersecurity360.it/feed/",
		"https://thehackernews.com/feeds/posts/default?alt=rss",
		"https://feeds.feedburner.com/KrebsOnSecurity",
		"https://www.bleepingcomputer.com/feed/"
	  ];
	  const proxy = "https://api.allorigins.win/get?url=";
	  const newsList = document.getElementById("newsList");
	  newsList.innerHTML = ""; // svuota per evitare duplicazioni
	  for (let url of feedUrls) {
		try {
		  const res = await fetch(proxy + encodeURIComponent(url));
		  const rss = new window.DOMParser().parseFromString(JSON.parse(await res.text()).contents, "text/xml");
		  const items = rss.querySelectorAll("item");
		  for (let i = 0; i < Math.min(2, items.length); i++) {
			const title = items[i].querySelector("title").textContent;
			const link = items[i].querySelector("link").textContent;
			const li = document.createElement("li");
			li.innerHTML = `<a href="${link}" target="_blank">🟢 ${title}</a>`;
			newsList.appendChild(li);
		  }
		} catch (e) {
		  console.warn("Errore caricamento feed", url);
		}
	  }
	}
	setInterval(loadNews, 600000); // ogni 10 minuti
