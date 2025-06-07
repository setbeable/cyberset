	export const data = {
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

	export function loadLinks() {
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
