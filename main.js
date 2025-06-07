	import { checkLogin, logout, toggleDarkMode, handleSearch, initSession } from './script.js';
	import { loadNews } from './news.js';
	import { loadLinks } from './data.js';

	document.getElementById("toggleDark").addEventListener("click", toggleDarkMode);
	document.getElementById("search").addEventListener("input", handleSearch);
	document.getElementById("loginBtn").addEventListener("click", checkLogin);
	document.getElementById("logoutButton").addEventListener("click", logout);

	window.addEventListener("DOMContentLoaded", () => {
	  initSession(loadLinks, loadNews);
	  setInterval(loadNews, 600000); // ogni 10 minuti
	});
