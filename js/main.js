
adjustMainTopOffset();
window.onresize = adjustMainTopOffset;
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
	alert(event.currentTarget.id);
}

