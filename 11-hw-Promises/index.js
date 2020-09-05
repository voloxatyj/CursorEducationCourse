function getRandomChinese(i) {
	let time = 50 * i
	const date = Date.now().toString()
	const dateSign = date.slice(date.length-5)
	const result = new Promise(function(resolve,reject){
			try {
				setTimeout(() => resolve(String.fromCharCode(dateSign)), time)
			} catch (error) {
				console.error(error)
			}
		})
	return result
	}
	
	
		const length = 4
		let sign = ''
		let i = 1
		while(i<=length){
			let time = 50 * i
			getRandomChinese(i).then(data => {
				document.getElementById('text').innerHTML += `<p>Викликавши getRandomChinese, отримаємо результат "${sign += data}" за ${time} ms</p>`
			})
			i++
		}

