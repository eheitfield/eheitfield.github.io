
window.onload = adjustPageLayout;
window.onresize = adjustPageLayout;

var title = document.getElementById("page-title");
title.onclick = homeSelected;
var homeItem = document.getElementsByClassName("nav-home")[0];
homeItem.onclick = homeSelected;
var appBoxes = document.getElementsByClassName("app-box");
for (box of appBoxes) {
	box.onclick = appSelected;
}
var navItems = document.getElementsByClassName("nav-item")
for (item of navItems) {
	item.onclick = appSelected;
}

function adjustPageLayout() {
	var titleBar = document.getElementById("title-bar");
	var header = document.getElementsByTagName("header")[0];
	var mainBody = document.getElementsByTagName("main")[0];
	// place titleBar
	if (window.innerWidth < 800) {
		// titleBar will be fixed at top of page
		header.appendChild(titleBar);
	} else {
		// titleBar will scroll with page
		mainBody.insertBefore(titleBar,mainBody.childNodes[0]);
	}
	// shift maindBody so it isn't covered by header
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

