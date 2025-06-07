	// news.js

	export async function loadNews() {
	  const feedUrls = [
		{ url: "https://www.acn.gov.it/feed", site: "ACN" },
		{ url: "https://www.redhotcyber.com/feed/", site: "RedHotCyber" },
		{ url: "https://www.cybersecurity360.it/feed/", site: "CyberSecurity360" },
		{ url: "https://thehackernews.com/feeds/posts/default?alt=rss", site: "TheHackerNews" },
		{ url: "https://feeds.feedburner.com/KrebsOnSecurity", site: "KrebsOnSecurity" },
		{ url: "https://www.bleepingcomputer.com/feed/", site: "BleepingComputer" }
	  ];
	  const proxy = "https://api.allorigins.win/get?url=";
	  const newsList = document.getElementById("newsList");
	  newsList.innerHTML = "";

	  for (let feed of feedUrls) {
		try {
		  const res = await fetch(proxy + encodeURIComponent(feed.url));
		  const rssText = JSON.parse(await res.text()).contents;
		  const rss = new window.DOMParser().parseFromString(rssText, "text/xml");
		  const items = rss.querySelectorAll("item");

		  for (let i = 0; i < Math.min(3, items.length); i++) {
			const item = items[i];
			const title = item.querySelector("title")?.textContent || "Senza titolo";
			const link = item.querySelector("link")?.textContent || "#";
			const pubDate = new Date(item.querySelector("pubDate")?.textContent || "").toLocaleDateString("it-IT");
			let imageUrl = "";

			const media = item.querySelector("media\\:content, enclosure[url*='.jpg'], enclosure[url*='.png']");
			if (media) imageUrl = media.getAttribute("url");

			const li = document.createElement("li");
			li.innerHTML = `
			  <a href="${link}" target="_blank">
				${imageUrl ? `<img src="${imageUrl}" style="width:40px; vertical-align:middle; margin-right:10px;">` : ""}
				🟢 <strong>${feed.site}</strong> — ${title}<br>
				<small>🕒 ${pubDate}</small>
			  </a>
			`;
			newsList.appendChild(li);
		  }
		} catch (e) {
		  console.warn("Errore feed:", feed.url, e);
		}
	  }
	}
