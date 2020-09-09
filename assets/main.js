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

document.querySelectorAll('.animate__animated').forEach(item=>{
	item.addEventListener('mouseover', (event)=>{
		event.target.closest("p").classList = 'animate__animated animate__shakeX hw'
		})
	item.addEventListener('mouseout', (event)=>{
		event.target.closest("p").classList = 'animate__animated animate__bounceOutRight animate__slow 1s hw'
		comeBack(item)
	})
})
	
	function comeBack(element){
		setTimeout(() => {
			element.classList = 'animate__animated animate__bounceInLeft animate__slow	2s hw'
		}, 5000)
	}