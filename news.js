	// news.js

	export async function loadNews() {
	  const feedUrls = [
		"https://www.acn.gov.it/feed",
		"https://www.redhotcyber.com/feed/",
		"https://www.cybersecurity360.it/feed/",
		"https://thehackernews.com/feeds/posts/default?alt=rss",
		"https://feeds.feedburner.com/KrebsOnSecurity",
		"https://www.bleepingcomputer.com/feed/"
	  ];

	export async function loadNews() {
	  const feedUrls = [/* ... */];
	  const proxy = "https://api.allorigins.win/get?url=";
	  const newsList = document.getElementById("newsList");
	  newsList.innerHTML = '';

	  for (let url of feedUrls) {
		try {
		  const response = await fetch(proxy + encodeURIComponent(url));
		  const json = await response.json();
		  const xml = new window.DOMParser().parseFromString(json.contents, "text/xml");
		  const items = xml.querySelectorAll("item");
		  const siteTitle = xml.querySelector("channel > title")?.textContent || "Sito";

		  for (let i = 0; i < Math.min(3, items.length); i++) {
			const item = items[i];
			const title = item.querySelector("title")?.textContent || "Senza titolo";
			const link = item.querySelector("link")?.textContent || "#";
			const pubDate = item.querySelector("pubDate")?.textContent;
			const date = pubDate ? new Date(pubDate).toLocaleDateString('it-IT') : "Data sconosciuta";

			const li = document.createElement("li");
			li.innerHTML = `
			  <p style="margin-bottom: 8px;">
				<strong>🟢 ${siteTitle}</strong><br>
				<a href="${link}" target="_blank" style="text-decoration: none; font-weight: bold;">
				  ${title}
				</a><br>
				<small style="color: gray;">📅 ${date}</small>
			  </p>`;
			newsList.appendChild(li);
		  }
		} catch (e) {
		  console.warn("Errore caricamento feed:", url, e);
		}
	  }
	}
