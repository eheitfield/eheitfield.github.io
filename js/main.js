
// setup observers
window.onload = adjustPageLayout;
window.onresize = adjustPageLayout;
window.onclick = hideDropdowns;
document.getElementById("page-title").onclick = homeSelected;
document.getElementById("item-home").onclick = homeSelected;
document.getElementById("apps-dropdown-title").onclick = appDropdownSelected;
document.getElementById("contact-dropdown-title").onclick = contactDropdownSelected;
var appBoxes = document.getElementsByClassName("app-box");
for (box of appBoxes) {
	box.onclick = appSelected;
}
var navItems = document.getElementsByClassName("dropdown-item");
for (item of navItems) {
	item.onclick = appSelected;
}

function adjustPageLayout() {
	var header = document.getElementsByTagName("header")[0];
	var mainBody = document.getElementsByTagName("main")[0];
	mainBody.style.marginTop = header.offsetHeight + 'px';	
}

function appSelected(event) {
	var id = event.currentTarget.id;
	if (id == "item-our-congress" || id == "box-our-congress") {
		window.location.href = "./our-congress.html"
	} else if (id == "item-visual-task-timer" || id == "box-visual-task-timer") {
		window.location.href = "./visual-task-timer.html"
	} else if (id == "item-doppler-ball" || id == "box-doppler-ball") {
		window.location.href = "./doppler-ball.html"
	} else {
		alert(id)
	}
}

function homeSelected(event) {
	window.location.href = "./index.html"
}

function hideDropdowns(event) {
	var id = event.target.id;
	if (id != "apps-dropdown-title") {
		var dropdownContent = document.getElementById("apps-dropdown-content");
		if (dropdownContent.classList.contains("show-dropdown")) {
			dropdownContent.classList.remove("show-dropdown");
		}
	}
	if (id != "contact-dropdown-title") {
		var dropdownContent = document.getElementById("contact-dropdown-content");
		if (dropdownContent.classList.contains("show-dropdown")) {
			dropdownContent.classList.remove("show-dropdown");
		}
	}
}

function appDropdownSelected(event) {
	document.getElementById("apps-dropdown-content").classList.toggle("show-dropdown");
}

function contactDropdownSelected(event) {
	document.getElementById("contact-dropdown-content").classList.toggle("show-dropdown");
}
