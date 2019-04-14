
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

