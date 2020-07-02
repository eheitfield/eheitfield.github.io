
// setup observers
window.onload = adjustPageLayout;
window.onresize = adjustPageLayout;
window.onclick = hideDropdowns;
if (document.getElementById("page-title")) {
	document.getElementById("page-title").onclick = homeSelected;
}
document.getElementById("item-home").onclick = homeSelected;
document.getElementById("apps-dropdown-title").onclick = appDropdownSelected;
document.getElementById("contact-dropdown-title").onclick = contactSelected;
document.getElementById("covid-dropdown-title").onclick = covidSelected;

document.querySelectorAll(".app-box").forEach(function(element) {
	element.onclick = appSelected;
});
document.querySelectorAll(".dropdown-item").forEach(function(element) {
	element.onclick = appSelected;
});

function adjustPageLayout() {
	var header = document.getElementsByTagName("header")[0];
	var mainBody = document.getElementsByTagName("main")[0];
	mainBody.style.marginTop = header.offsetHeight + 'px';	
}

function appSelected(event) {
	var id = event.currentTarget.id;
	if (id == "item-tex-anywhere" || id == "box-tex-anywhere") {
		window.location.href = "./tex-anywhere.html"
	} else if (id == "item-our-congress" || id == "box-our-congress") {
		window.location.href = "./our-congress.html"
	} else if (id == "item-visual-task-timer" || id == "box-visual-task-timer") {
		window.location.href = "./visual-task-timer.html"
	} else if (id == "item-doppler-ball" || id == "box-doppler-ball") {
		window.location.href = "./doppler-ball.html"
	} else if (id == "item-placemark-plus" || id == "box-placemark-plus") {
		window.location.href = "./placemark.html"
	} else if (id == "item-radix" || id == "box-radix") {
		window.location.href = "./radix.html"
	} else if (id == "item-magic-castle" || id == "box-magic-castle") {
		window.location.href = "./magic-castle.html"
	} else {
		alert(id)
	}
}

function homeSelected(event) {
	window.location.href = "./index.html"
}

function contactSelected(event) {
	window.location.href = "#contact-pterosaur"
}

function covidSelected(event) {
	window.location.href = "./covid.html"
}

function appDropdownSelected(event) {
	document.getElementById("apps-dropdown-content").classList.toggle("show-dropdown");
}

function hideDropdowns(event) {
	var id = event.target.id;
	if (id != "apps-dropdown-title") {
		var dropdownContent = document.getElementById("apps-dropdown-content");
		if (dropdownContent.classList.contains("show-dropdown")) {
			dropdownContent.classList.remove("show-dropdown");
		}
	}
}

