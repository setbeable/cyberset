	// script.js

	function decodeBase64(str) {
	  return atob(str);
	}

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
	  const encryptedPass = "MTIzNDU=";
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
	});

