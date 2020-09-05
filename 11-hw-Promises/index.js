function getRandomChinese(length) {
	let i = 1
	let sign = ''
	let newLength = 50 * length
	while(i<=length){
		const date = Date.now().toString()
		const dateSign = date.slice(date.length-5)
		const result = new Promise(function(resolve,reject){
			try {
				setTimeout(() => resolve(sign += String.fromCharCode(dateSign)), newLength)
			} catch (error) {
				console.error(error)
			}
		})
		if(i===length) {
			return result
		}
		i++
	}
}

const length = 4

getRandomChinese(length).then(data => {
	document.writeln(`
	<h1>Promises JS</h1>
	<p>Викликавши getRandomChinese, отримаємо результат "${data}" за ${50 * length} ms</p>`)
})
