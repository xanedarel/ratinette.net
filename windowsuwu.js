function makeDraggable (element) {

    let currentPosX = 0, currentPosY = 0, previousPosX = 0, previousPosY = 0;

        element.querySelector('.title-bar').onmousedown = dragMouseDown;

function dragMouseDown (e) {
        e.preventDefault();
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

function elementDrag (e) {
        e.preventDefault();
        currentPosX = previousPosX - e.clientX;
        currentPosY = previousPosY - e.clientY;
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        element.style.top = (element.offsetTop - currentPosY) + 'px';
        element.style.left = (element.offsetLeft - currentPosX) + 'px';
    }

function closeDragElement () {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

makeDraggable(document.querySelector('#window-box'));

document.addEventListener('click', e => {
	if (e.target.closest('.round.red')) {
		e.target.closest('.window').remove();
	}
});
