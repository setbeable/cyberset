	// script.js

		export function decodeBase64(str) {
	  return atob(str);
	}

	export function setCookie(name, value) {
	  document.cookie = name + "=" + (value || "") + "; path=/; SameSite=Lax";
	}

	export function getCookie(name) {
	  const nameEQ = name + "=";
	  const ca = document.cookie.split(';');
	  for (let i = 0; i < ca.length; i++) {
		let c = ca[i].trim();
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
	  }
	  return null;
	}

	export function eraseCookie(name) {
	  document.cookie = name + '=; Max-Age=-99999999;';
	}

	export function checkLogin() {
	  const encryptedPass = "MTIzNDU=";
	  const input = document.getElementById("password").value.trim();
	  if (input === decodeBase64(encryptedPass)) {
		setCookie("session", "ok");
		document.getElementById("loginContainer").style.display = "none";
		document.getElementById("dashboard").style.display = "block";
		if (typeof window.loadLinks === "function") window.loadLinks();
		if (typeof window.loadNews === "function") window.loadNews();
	  } else {
		alert("Password errata");
	  }
	}


	export function logout() {
	  eraseCookie("session");
	  document.getElementById("dashboard").style.display = "none";
	  document.getElementById("loginContainer").style.display = "flex";
	  document.getElementById("password").value = "";
	}

	export function toggleDarkMode() {
	  document.body.classList.toggle("dark-mode");
	}

	export function handleSearch(e) {
	  const searchTerm = e.target.value.toLowerCase();
	  document.querySelectorAll(".category").forEach(cat => {
		cat.style.display = cat.innerText.toLowerCase().includes(searchTerm) ? "block" : "none";
	  });
	}

	export function initSession(loadLinks, loadNews) {
	  window.loadLinks = loadLinks;
	  window.loadNews = loadNews;

	  if (getCookie("session") === "ok") {
		document.getElementById("loginContainer").style.display = "none";
		document.getElementById("dashboard").style.display = "block";
		loadLinks();
		loadNews();
	  } else {
		document.getElementById("loginContainer").style.display = "flex";
		document.getElementById("dashboard").style.display = "none";
	  }
	}
