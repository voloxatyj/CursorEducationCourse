async function getRandomChinese(i) {
	const date = Date.now().toString()
	const dateSign = date.slice(date.length-5)
		try {
			const result = await String.fromCharCode(dateSign)
			return result
		} catch (error) {
			console.error(error)
		}
}
	
const length = 4
let sign = ''
let i = 1
while(i<=length){
	let time = 50 * i
	setTimeout(() => {
		getRandomChinese(i)
			.then(data => document.getElementById('text').innerHTML += 
			`<p>Викликавши getRandomChinese, отримаємо результат "${sign += data}" за ${time} ms</p>`)
	},time)
	i++
}

