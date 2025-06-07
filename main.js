	import { loadNews } from './news.js';
	import { loadLinks } from './data.js';
	import {
	  checkLogin,
	  logout,
	  toggleDarkMode,
	  handleSearch,
	  initSession,
	} from './script.js';

	window.checkLogin = checkLogin;
	window.logout = logout;

	document.getElementById("loginBtn").addEventListener("click", checkLogin);
	document.getElementById("logoutButton").addEventListener("click", logout);
	document.getElementById("toggleDark").addEventListener("click", toggleDarkMode);
	document.getElementById("search").addEventListener("input", handleSearch);

	window.addEventListener("DOMContentLoaded", () => {
	  initSession(loadLinks, loadNews);
	  setInterval(loadNews, 600000); // ogni 10 minuti
	});
