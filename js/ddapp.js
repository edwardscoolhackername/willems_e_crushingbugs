//anonymous function module keeps your script private.
(() => {

	// Identify your nodes
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone"),
				originalbox = document.querySelector(".puzzle-pieces");

	// functions go in the middle
	function startDrag(event) {
		console.log('dragging ' + this.id);
		// Saves a reference to the element that is being dragged.
		// Then we can retrieve it later to place it.
		event.dataTransfer.setData("dragTarget", this.id);
	}
	function draggedOver(event) {
		event.preventDefault(); //override default behaviour
		console.log('Look at you go, dragging things around');
	}

	function dropped(event) {
		event.preventDefault(); //override default behaviour, allow the drop

		//if there's already an image in the container, return statement
		//return statement ends the function
		if (this.children.length > 0) { return; }

		let targetImage = document.querySelector(`#${event.dataTransfer.getData('dragTarget')}`);
		//retrieve whatever element was grabbed
		//event.dataTransfer.getData("dragTarget");
		dropZones.forEach(zone => {
			if (this.dataset.dropbox == targetImage.dataset.puzzlepiece) {
					this.appendChild(targetImage)
			}
			else { return; };
		});
	}

	function imageflip() {
		//Click thumbnail image to switch out puzzle pieces
		//update the background image of the drop zone container
			//let imageindex = this.dataset.imageref;
			//newimagepath = `url(images/dd/backGround${imageindex}.jpg)`;
		dropContainer.style.backgroundImage = `url(images/dd/backGround${this.dataset.imageref}.jpg)`;
		dragImages.forEach(picture => {
			picture.src = `images/dd/${picture.id}${this.dataset.imageref}.jpg`;
			// Reset pieces function //
		});
	}
	function resetPuzzle() {
		 dropZones.forEach(zone => {
		// 	if (zone.hasChildNodes(dragImages)) {
		// 		zone.removeChild(zone.children[dragImages]);
		// 	}

				if (zone.firstChild) {
					originalbox.appendChild(zone.firstChild) }
				else {	return;	};
		 });

		}

// event handling at the bottom
	dragImages.forEach(piece => {
		piece.addEventListener('dragstart', startDrag);
	});
	//the pieces look for being clicked/dragged, but the dropzones are looking for the drop.
	dropZones.forEach(zone => {
		zone.addEventListener('drop', dropped);
		zone.addEventListener('dragover', draggedOver);
	});

	puzzleSelectors.forEach(button => {
		button.addEventListener('click', imageflip);
		button.addEventListener('click', resetPuzzle);
	});
})();
