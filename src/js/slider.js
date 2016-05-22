var slider_handle = document.getElementById('slider-handle'),
	isDragging = false;

addEventListeners();

function addEventListeners() {
	slider_handle.addEventListener("mousedown", addMousedownEvent);
	slider_handle.addEventListener("mousemove", addMousemoveEvent);
	slider_handle.addEventListener("mouseup", addMouseupEvent);
}

function removeEventListeners() {
	slider_handle.removeEventListener("mousedown", removeMousedownEvent);
	slider_handle.removeEventListener("mousemove", removeMousemoveEvent);
	slider_handle.removeEventListener("mouseup", removeMouseupEvent);
}

function mousedownEvent () {

}

function mousemoveEvent () {

}

function mouseupEvent () {
	removeEventListener	
}