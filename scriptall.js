	// script.js

	const encryptedPass = "MTIzNDU=";

	function decodeBase64(str) { return atob(str); }
	function setCookie(name, value) {
	  document.cookie = name + "=" + (value || "") + "; path=/; SameSite=Lax";
	}
	function getCookie(name) {
	  const nameEQ = name + "=";
	  const ca = document.cookie.split(';');
	  for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	  }
	  return null;
	}
	function eraseCookie(name) {
	  document.cookie = name + '=; Max-Age=-99999999;';
	}

	function checkLogin() {
	  const input = document.getElementById("password").value.trim();
	  if (input === decodeBase64(encryptedPass)) {
		setCookie("session", "ok");
		document.getElementById("loginContainer").style.display = "none";
		document.getElementById("dashboard").style.display = "block";
		loadLinks();
		loadNews();
	  } else {
		alert("Password errata");
	  }
	}

	function logout() {
	  eraseCookie("session");
	  document.getElementById("dashboard").style.display = "none";
	  document.getElementById("loginContainer").style.display = "flex";
	  document.getElementById("password").value = "";
	}

	const data = {
	  "Reconnaissance & OSINT": [
		{ "name": "Shodan (manuale)", "url": "https://help.shodan.io/", "icon": "fa-search" },
		{ "name": "Censys Docs", "url": "https://censys.io/docs", "icon": "fa-globe" },
		{ "name": "theHarvester", "url": "https://github.com/laramies/theHarvester", "icon": "fa-users" }
	  ],
	  "Protocol Testing": [
		{ "name": "Hydra (SSH/POP3/FTP)", "url": "https://github.com/vanhauser-thc/thc-hydra", "icon": "fa-key" },
		{ "name": "Onesixtyone (SNMP)", "url": "https://github.com/trailofbits/onesixtyone", "icon": "fa-sitemap" },
		{ "name": "Nikto (HTTP)", "url": "https://cirt.net/Nikto2", "icon": "fa-globe" },
		{ "name": "Enum4linux (SMB)", "url": "https://tools.kali.org/information-gathering/enum4linux", "icon": "fa-server" },
		{ "name": "Medusa (IMAP)", "url": "https://github.com/jmk-foofus/medusa", "icon": "fa-envelope" }
	  ],
	  "OS Vulnerability Assessment": [
		{ "name": "Lynis (Linux)", "url": "https://cisofy.com/lynis/", "icon": "fa-linux" },
		{ "name": "Win Exploit Suggester", "url": "https://github.com/AonCyberLabs/Windows-Exploit-Suggester", "icon": "fa-windows" }
	  ],
	  "Penetration Testing Tools": [
		{ "name": "Metasploit Framework", "url": "https://www.metasploit.com", "icon": "fa-terminal" },
		{ "name": "MSFconsole Cheatsheet", "url": "https://www.rapid7.com/blog/post/2017/08/03/metasploit-cheat-sheet/", "icon": "fa-book" },
		{ "name": "Burp Suite", "url": "https://portswigger.net/burp", "icon": "fa-spider" }
	  ],
	  "Vulnerability Scanners": [
		{ "name": "OpenVAS (Greenbone)", "url": "https://www.greenbone.net/en/", "icon": "fa-lock" },
		{ "name": "Nessus", "url": "https://www.tenable.com/products/nessus", "icon": "fa-shield-alt" },
		{ "name": "Nmap Scripting Engine", "url": "https://nmap.org/book/nse.html", "icon": "fa-cogs" }
	  ],
	  "Reportistica e Metodologie": [
		{ "name": "Report PT Template", "url": "https://github.com/sample/pen-test-report-template", "icon": "fa-file-alt" },
		{ "name": "VA Report Template", "url": "https://github.com/sample/va-report-template", "icon": "fa-clipboard" },
		{ "name": "OWASP WSTG", "url": "https://owasp.org/www-project-web-security-testing-guide/", "icon": "fa-book" },
		{ "name": "CVSS Scoring", "url": "https://www.first.org/cvss", "icon": "fa-cogs" }
	  ],
	  "Social & Strumenti": [
		{ "name": "Exploit-DB", "url": "https://www.exploit-db.com", "icon": "fa-bug" },
		{ "name": "GTFOBins", "url": "https://gtfobins.github.io/", "icon": "fa-tools" },
		{ "name": "Reddit /r/netsec", "url": "https://www.reddit.com/r/netsec/", "icon": "fa-comments" }
	  ],
	  "Python & Manuali": [
		{ "name": "Python Pentest Cheatsheet", "url": "https://github.com/DanMcInerney/pentesters-py-recon", "icon": "fa-code" },
		{ "name": "Blue Team Handbook", "url": "https://www.blueteamhandbook.com", "icon": "fa-shield-alt" },
		{ "name": "Red Team Field Manual", "url": "https://github.com/mantvydasb/RedTeam-Tactics-and-Techniques", "icon": "fa-skull-crossbones" },
		{ "name": "Python Security Tools", "url": "https://github.com/topics/python-security", "icon": "fa-python" },
		{ "name": "Violent Python (Libro)", "url": "https://www.amazon.com/Violent-Python-Cookbook-Penetration-Engineers/dp/1597499579", "icon": "fa-book" }
	  ]
	};

	function loadLinks() {
	  const container = document.getElementById("categories");
	  container.innerHTML = "";
	  for (let category in data) {
		const catDiv = document.createElement("div");
		catDiv.className = "category";
		catDiv.innerHTML = `<h2>${category}</h2>`;
		const ul = document.createElement("ul");
		ul.className = "link-list";
		data[category].forEach(link => {
		  const li = document.createElement("li");
		  li.innerHTML = `<i class='fas ${link.icon}'></i> <a href='${link.url}' target='_blank'>${link.name}</a>`;
		  ul.appendChild(li);
		});
		catDiv.appendChild(ul);
		container.appendChild(catDiv);
	  }
	}

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
	  newsList.innerHTML = "";
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

	document.getElementById("search").addEventListener("input", function(e) {
	  const searchTerm = e.target.value.toLowerCase();
	  document.querySelectorAll(".category").forEach(cat => {
		cat.style.display = cat.innerText.toLowerCase().includes(searchTerm) ? "block" : "none";
	  });
	});

	document.getElementById("toggleDark").addEventListener("click", () => {
	  document.body.classList.toggle("dark-mode");
	});

	window.addEventListener("DOMContentLoaded", () => {
	  if (getCookie("session") === "ok") {
		document.getElementById("loginContainer").style.display = "none";
		document.getElementById("dashboard").style.display = "block";
		loadLinks();
		loadNews();
	  } else {
		document.getElementById("loginContainer").style.display = "flex";
		document.getElementById("dashboard").style.display = "none";
	  }
	  setInterval(loadNews, 600000); // ogni 10 minuti
	});
