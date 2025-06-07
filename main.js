	import { checkLogin, logout, toggleDarkMode, handleSearch, initSession } from './script.js';
	import { loadNews } from './news.js';
	import { loadLinks } from './data.js';

	window.checkLogin = checkLogin;
	window.logout = logout;

	document.getElementById("toggleDark").addEventListener("click", toggleDarkMode);
	document.getElementById("search").addEventListener("input", handleSearch);
	document.getElementById("loginBtn").addEventListener("click", checkLogin); // 👈 preferibile

	window.addEventListener("DOMContentLoaded", () => {
	  initSession(loadLinks, loadNews);
	  setInterval(loadNews, 600000);
	});
