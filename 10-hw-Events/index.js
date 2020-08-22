const keys = [...document.querySelectorAll('.row')]
const audio = [...document.getElementsByTagName('audio')]
let eventKey = null

window.addEventListener('keypress', event => {
	keys.find(item => {
		if (item.dataset.info === `${event.keyCode}` && eventKey !== `${event.keyCode}`) {
			eventKey = `${event.keyCode}`
			item.classList.add('playing')
		} else if (item.dataset.info === `${event.keyCode}`) {
			item.classList.add('playing')
		} else item.classList.remove('playing')
	})
	const result = audio.find(item => item.dataset.info === `${event.keyCode}`)
	result.play()
})
