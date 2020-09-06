function *createIdGenerator() {
	for(let i=1;i<Infinity;i++) yield i
}

const idGenerator = createIdGenerator();
let answer1 = document.createElement('p')
document.getElementsByTagName('h1')[0].after(answer1)
answer1.innerHTML = (`
Створіть нескінченний генератор ідентифікаторів.<br>
idGenerator.next().value = ${idGenerator.next().value}//-> 1<br>
idGenerator.next().value = ${idGenerator.next().value}//-> 2<br>
idGenerator.next().value = ${idGenerator.next().value}//-> 3<br>
`)

const value = 14
const fontGenerator = newFontGenerator(value); // 14 – стартове значення
const current = {}
document.body.style.fontSize = `${value}px`
let p = document.createElement('p')
document.body.appendChild(p) 
let answer2 = document.createElement('p')
document.getElementsByTagName('p')[0].after(answer2)
answer2.innerHTML = (`Створіть генератор, який буде регулювати розміри шрифту для вашого сайту.<br>
(Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)<br>
Щоб взнати поточний розмір шришту тисни ентер`)

function* newFontGenerator(value) {
	for (let i = 1; i < Infinity; i++) {
		const result = yield value
		if(result === 'up') {
			value += 2
			document.body.style.fontSize = `${value}px`
		} else if (result === 'down'){
			value -= 2
			document.body.style.fontSize = `${value}px`
		} else {
			yield value
		}
	}
}

document.body.addEventListener('keyup', (event) => {
	if (event.keyCode === 38) {
		fontGenerator.next("up").value 
	}
})

document.body.addEventListener('keydown', (event) => {
	if (event.keyCode === 40) {
		fontGenerator.next("down").value 
	}
})

const size = document.body.addEventListener('keypress', function (event) {
	if (event.keyCode === 13) {
		p.innerHTML = (`${fontGenerator.next().value} px`)
	}
})

