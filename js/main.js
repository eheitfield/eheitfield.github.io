
adjustMainTopOffset();
window.onresize = adjustMainTopOffset;
var title = document.getElementsByClassName("page-title")[0];
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

function adjustMainTopOffset() {
	var height = document.getElementsByTagName("header")[0].offsetHeight;
	document.getElementsByTagName("main")[0].style.marginTop = height + 'px';	
}

function appSelected(event) {
//	alert(event.currentTarget.id);
	window.location.href = "./our-congress.html"
}

function homeSelected(event) {
	window.location.href = "./index.html"
}

