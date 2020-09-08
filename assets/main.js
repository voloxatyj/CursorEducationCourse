const navBar = document.querySelector("#navbar");

let scrolling = false,
	scrolledPast = false;

function switchInto () {
	scrolledPast = true;
	navBar.classList.replace(navBar.dataset.startcolor, navBar.dataset.intocolor);
	navBar.classList.replace(navBar.dataset.startsize, navBar.dataset.intosize);
}

function switchStart () {
	scrolledPast = false;
	navBar.classList.replace(navBar.dataset.intocolor, navBar.dataset.startcolor);
	navBar.classList.replace(navBar.dataset.intosize, navBar.dataset.startsize);
}

$(window).scroll(() => (scrolling = true));

setInterval(() => {
	console.log('window: ', window);
	if (scrolling) {
		scrolling = false;
		if ($(window).scrollTop() > 100) {
			if (!scrolledPast) {
				switchInto();
			}
		} else {
			if (scrolledPast) {
				switchStart();
			}
		}
	}
}, 100);