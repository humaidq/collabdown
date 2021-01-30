// CollabDown by Humaid AlQassimi. Released under the BSD 2-Clause license.

// Font Awesome font is licensed under the SIL OFL 1.1 license <http://scripts.sil.org/OFL>
// angle-double-down icon from font-awesome
const svg = `<svg class="svg-icon medium default" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>`;
// tachometer icon from font-awesome
const tach = `<svg style="padding-top:5px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M384 1152q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm192-448q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm428 481l101-382q6-26-7.5-48.5t-38.5-29.5-48 6.5-30 39.5l-101 382q-60 5-107 43.5t-63 98.5q-20 77 20 146t117 89 146-20 89-117q16-60-6-117t-72-91zm660-33q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm-640-640q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm448 192q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm320 448q0 261-141 483-19 29-54 29h-1402q-35 0-54-29-141-221-141-483 0-182 71-348t191-286 286-191 348-71 348 71 286 191 191 286 71 348z" fill="#fff"/></svg>`;


function addDownloadButton() {
	// Create the list element for the main menu.
	var down = document.createElement('li');
	down.className = 'main-menu__item ng-scope';
	var downButton = document.createElement('button');
	downButton.className = "main-menu__control menu-list__control";
	downButton.innerHTML = `<span class="menu-list__inner-wrap">
	<span class="menu-list__icon ng-isolate-scope" name="help" size="medium">
	`+svg+`</span>
	<span class="ng-scope">Download Recording <small>(CollabDown)</small></span>
	</span>`;
	
	// When clicking the button, open the video source in a new window.
	downButton.onclick = function() {
		let vid = document.getElementsByTagName("video")[0];
		vid.pause();
		window.open(vid.src, "_blank");
	};
	down.appendChild(downButton);
	
	// Add the download button to the main menu list.
	document.getElementsByClassName("main-menu__list menu-list")[0].prepend(down);
}

function addSpeedToggleButton() {
	// Create speed playback button toggle
	
	var speedButton = document.createElement('button');
	speedButton.className = 'playback-controls__button button has-tooltip';
	speedButton.id = 'speed-button';
	speedButton.innerHTML = `
	<span class="playback-controls__icon ng-isolate-scope" size="small">
	`+tach+`</span>
	<span class="tooltip tip-top-right" role="tooltip">
			<span id="speed-tooltip" class="tooltip-content ng-scope">Playback 1x <small>(CollabDown)</small></span>
		</span>`;

	speedButton.onclick = function() {
		let vid = document.getElementsByTagName("video")[0];
		let n = 1;
		switch(vid.playbackRate) {
			case 1:
				n = 1.25;
				break;
			case 1.25:
				n = 1.5;
				break;
			case 1.5:
				n = 2;
				break;
			case 2:
				n = 1;
		}
		vid.playbackRate = n;
		document.getElementById('speed-tooltip').innerHTML = `Playback `+n+`x <small>(CollabDown)</small>`;
	};
	
	// Add to playback controls

	document.getElementsByClassName("playback-controls")[0].append(speedButton);
}


// We wait until the main menu is present before we try to append.
console.log("TTT: 1");
var t = setInterval(function () {
	if (document.getElementsByClassName("main-menu__list menu-list").length > 0 &&
			document.getElementsByClassName("playback-controls").length > 0) {

		clearInterval(t); // clear first to avoid the function running twice

		addDownloadButton();
		addSpeedToggleButton();
	}
}, 800);
