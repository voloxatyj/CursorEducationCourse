const images_of_heroes = {
	"Luke Skywalker": 'https://vignette.wikia.nocookie.net/starwars/images/d/dd/Lukeonskiff.png/revision/latest?cb=20130401050604',
	"C-3PO": 'https://vignette.wikia.nocookie.net/starwars/images/b/b4/C-3PO_TPM.png/revision/latest?cb=20130821175112',
	"R2-D2": 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914',
	"Darth Vader": 'https://vignette.wikia.nocookie.net/starwars/images/1/11/Vader_Needa.jpg/revision/latest?cb=20090324172829',
	"Leia Organa": 'https://vignette.wikia.nocookie.net/starwars/images/0/0a/LMB.png/revision/latest?cb=20161003050632',
	"Owen Lars": 'https://vignette.wikia.nocookie.net/starwars/images/8/81/Owen-OP.jpg/revision/latest?cb=20070626181249',
	"Beru Whitesun lars": 'https://vignette.wikia.nocookie.net/starwars/images/8/84/BeruWhitesunLars.jpg/revision/latest?cb=20070625220148',
	"R5-D4": 'https://vignette.wikia.nocookie.net/starwars/images/b/b5/R5-D4_Photo_Mandalorian.jpg/revision/latest?cb=20191230173512',
	"Biggs Darklighter": 'https://vignette.wikia.nocookie.net/starwars/images/d/db/BiggsDarklighter-SbtDS.png/revision/latest?cb=20200618040558',
	"Obi-Wan Kenobi": 'https://vignette.wikia.nocookie.net/starwars/images/b/bb/Padawan_Kenobi.png/revision/latest?cb=20130821154445'
}

const urlHeroes = 'https://swapi.dev/api/people/'
const urlPlanets = 'https://swapi.dev/api/planets/'
const urlFilmInfo = 'https://swapi.dev/api/films/'

function getHeroes (url) {
	const people = fetch(url)
	.then(data => data.json())
	.then(data => data.results)
	.then(data => {
		data.forEach((item, index) => {
			document.getElementById(`heroes${index}`).innerHTML = (`
			<div class="animate__animated animate__flipInX animate__delay-2s heroes" style="width: 19rem;">
			<img src="${images_of_heroes[item.name]}" class="heroes-img-top" alt="...">
			<div class="heroes-text">
			<h5>${item.name}</h5><br>
			<span>${Object.keys(item)[6]}</span><p class="pl-2 mb-0">${item.birth_year}</p><br>
			<span>${Object.keys(item)[7]}</span><p class="pl-2 mb-0">${item.gender}</p>
			</div>
			</div>`)
		})
	})
}

document.getElementById('btn').addEventListener('click',()=>{
	getHeroes(urlHeroes)
	document.getElementById('btn').style.display = 'none'
}
)

const images_of_planets = {
	"Tatooine": 'https://vignette.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937',
	"Alderaan": 'https://vignette.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805',
	"Yavin IV": 'https://vignette.wikia.nocookie.net/starwars/images/a/a0/Eaw_Yavin4.jpg/revision/latest?cb=20060418114439',
	"Hoth": 'https://vignette.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20160630022322',
	"Dagobah": 'https://vignette.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20100122163146',
	"Bespin": 'https://vignette.wikia.nocookie.net/starwars/images/1/11/Bespin-SWCT.png/revision/latest?cb=20181010054421',
	"Endor": 'https://vignette.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png/revision/latest?cb=20171014232605',
	"Naboo": 'https://vignette.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190210065915',
	"Coruscant": 'https://vignette.wikia.nocookie.net/starwars/images/8/84/CoruscantGlobeE1.png/revision/latest?cb=20130123002137',
	"Kamino": 'https://vignette.wikia.nocookie.net/starwars/images/5/52/Kamino-DB.png/revision/latest?cb=20150920190527'
}


function getPlanets (url) {
	if (!document.getElementById('wookie').classList.contains('btn-active')) {
		const planets = fetch(url)
			.then(data => data.json())
			.then(data => data.results)
			.then(data => {
				data.forEach((item, index) => {
					document.getElementById(`heroes${index}`).innerHTML = ''
					document.getElementById(`planets${index}`).innerHTML = (`
					<div class="animate__animated animate__flipInX animate__delay-2s heroes" style="width: 19rem;">
						<img src="${images_of_planets[item.name]}" class="heroes-img-top" alt="...">
							<div class="heroes-text">
								<h5>${item.name}</h5>
								<span>${Object.keys(item)[4]}</span><p class="pl-2 mb-0"><em>${item.climate}</em></p>
								<span>${Object.keys(item)[5]}</span><p class="pl-2 mb-0"><em>${item.gravity}</em></p>
								<span>${Object.keys(item)[8]}</span><p class="pl-2 mb-0"><em>${item.population}</em></p>
							</div>
					</div>`)
				})
			})
	} else translateOnWookie()
}

document.getElementById('planet').addEventListener('click', ()=>{
	document.getElementById('heroes').style.display = 'none'
	document.getElementById('hero').style.display = 'inherit'
	document.getElementById('planets').style.display = 'grid'
	document.getElementById('planet').style.display = 'none'
	getPlanets(urlPlanets)
})

document.getElementById('hero').addEventListener('click', function(){
	document.getElementById('heroes').style.display = 'grid'
	document.getElementById('hero').style.display = 'none'
	document.getElementById('planets').style.display = 'none'
	document.getElementById('planet').style.display = 'inherit'
	document.getElementById('btn').style.display = 'inherit'
})


function getInfo (event,url) {
	event.preventDefault()
	const film = event.target[0].value
	event.target[0].value = ''
	if (film < 1 || film > 6) {
		document.getElementById('tooltip').style.display = 'block'
	} else if (!document.getElementById('wookie').classList.contains('btn-active')){
		document.getElementById('tooltip').style.display = 'none'
		const getInfo =  fetch(`${url+film}`)
			.then(data => data.json())
			.then(data => {
				console.log('data: ', Object.keys(data));
				document.getElementById('modalDiv').innerHTML = `
				<div class="modal" id="modal" tabindex="-1" style="display:block">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">${data.title}</h5>
									<button type="button" class="close" aria-label="Close" onclick="document.getElementById('modal').style.display = 'none'">
										<span aria-hidden="true">&times;</span>
									</button>
							</div>
							<div class="modal-body">
								<p>${data.opening_crawl}</p>
							</div>
							<div class="modal-footer">
								<button type="button" onclick="document.getElementById('modal').style.display = 'none'" class="btn btn-secondary close">Close</button>
							</div>
						</div>
					</div>
				</div>`
			})
		} 
		// else {
		// 	document.getElementById('tooltip').style.display = 'none'
		// 	const getInfo = fetch(`${url+film}/?format=wookiee`)
		// 		.then(data=>data.json())
		// 		.then(data => {
		// 			document.getElementById('modalDiv').innerHTML = `
		// 			<div class="modal" id="modal" tabindex="-1" style="display:block">
		// 				<div class="modal-dialog">
		// 					<div class="modal-content">
		// 						<div class="modal-header">
		// 							<h5 class="modal-title">${data.title}</h5>
		// 								<button type="button" class="close" aria-label="Close" onclick="document.getElementById('modal').style.display = 'none'">
		// 									<span aria-hidden="true">&times;</span>
		// 								</button>
		// 						</div>
		// 						<div class="modal-body">
		// 							<p>${data.opening_crawl}</p>
		// 						</div>
		// 						<div class="modal-footer">
		// 							<button type="button" onclick="document.getElementById('modal').style.display = 'none'" class="btn btn-secondary close">Close</button>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>`
		// 		})
		// }
}

function translateOnWookie() {
	if (document.getElementById('wookie').classList.contains('btn-active')) {
		for (let i = 1; i < 10; i++) {
			const wookie_people = fetch(urlHeroes + i + '/?format=wookiee')
				.then(data => data.json())
				.then(data => {
					document.getElementById(`heroes${i - 1}`).innerHTML = (`
					<div class="animate__animated animate__flipInX animate__delay-2s heroes" style="width: 19rem;">
						<img src="${images_of_heroes[Object.keys(images_of_heroes)[i - 1]]}" class="heroes-img-top" alt="...">
							<div class="heroes-text">
								<h5>${data.whrascwo}</h5><br>
								<span>${Object.keys(data)[0]}</span><p class="pl-2 mb-0">${data.rhahrcaoac_roworarc}</p><br>
								<span>${Object.keys(data)[1]}</span><p class="pl-2 mb-0">${data.rrwowhwaworc}</p>
							</div>
					</div>`)
				})
			const wookie_planets = fetch(urlPlanets + i + '/?format=wookiee')
				.then(data => data.json())
				.then(data => {
					document.getElementById(`planets${i - 1}`).innerHTML = (`
						<div class="animate__animated animate__flipInX animate__delay-2s heroes" style="width: 19rem;">
							<img src="${images_of_planets[Object.keys(images_of_planets)[i - 1]]}" class="heroes-img-top" alt="...">
								<div class="heroes-text">
									<h5>${data.whrascwo}</h5>
									<span>${Object.keys(data)[4]}</span><p class="pl-2 mb-0"><em>${data.oaanahscraaowo}</em></p>
									<span>${Object.keys(data)[5]}</span><p class="pl-2 mb-0"><em>${data.rrrcrahoahaoro}</em></p>
									<span>${Object.keys(data)[8]}</span><p class="pl-2 mb-0"><em>${data.akooakhuanraaoahoowh}</em></p>
								</div>
						</div>`)
				})
		}
	} else {
		for (let i = 1; i < 10; i++) {
			document.getElementById(`heroes${i - 1}`).innerHTML = ''
			document.getElementById('btn').style.display = 'inherit'
		}
		getPlanets(urlPlanets)
	}
}

document.getElementById('getInfo').addEventListener('submit', (event)=>{
	getInfo(event, urlFilmInfo)
})

document.getElementById('wookie').addEventListener('click', (event)=>{
	event.currentTarget.classList.toggle('btn-active')
	translateOnWookie()
})

