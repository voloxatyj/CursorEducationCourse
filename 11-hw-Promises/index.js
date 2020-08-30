function getRandomChinese(length) {
	let i = 1
	let newLength = 50 * `${length}`
	while(i<=length){
		const date = Date.now().toString(2)
		const dateSign = date.slice(date.length-5).split('')
		const sign = new Promise(function(resolve,reject){
			try {
				setTimeout(() => resolve(dateSign.reduce((acc, next) => {
					return acc += String.fromCharCode(next)
					}, '')), newLength)
			} catch (error) {
				console.error(error)
			}
		})
		i++
		return sign
	}
}
const length = 100
getRandomChinese(length).then(data => {
	document.writeln(`
	<h1>Promises JS</h1>
	<p>Викликавши getRandomChinese, отримаємо результат "${data}" за ${50 * length} ms</p>`)
})
