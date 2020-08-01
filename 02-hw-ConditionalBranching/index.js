document.getElementById('btn').addEventListener('click', e => {
	e.preventDefault()
	const N = document.getElementById('numberN').value
	const M = document.getElementById('numberM').value
	isNaN(N) ? document.getElementById('numberN').classList.add('is-invalid') : parseInt(N)
	isNaN(M) ? document.getElementById('numberM').classList.add('is-invalid') : parseInt(M)
	if(N >= M) {
		document.querySelectorAll('.form-control').forEach(item => item.classList.add('is-invalid'))
		document.querySelectorAll('.invalid-feedback').forEach(item => item.textContent = 'N must be bigger then M')
	} 
	const boolNum = confirm('Потрібно пропускати парні числа чи ні? OK – потрібно, Cancel – не потрібно')
	if(boolNum) {
		let sum = 0	
		for(let i=+N; i<=M; i++) {
			i%2 !== 0 ? sum+=i : sum 
		}
		document.getElementById('result').innerHTML = `
			<p>N equal ${N}</p>\n
			<p>M equal ${M}</p>\n
			<p>Even number or not = ${boolNum}</p>\n
			<p>Sumary of numbers from N to M = ${sum}</p>\n 
	`
	} else {
		let sum = 0	
		for (let i=+N; i <= M; i++) {
			sum += i 	
		}
		document.getElementById('result').innerHTML=`
			<p>N equal ${N}</p>\n
			<p>M equal ${M}</p>\n
			<p>Even number or not = ${boolNum}</p>\n
			<p>Sumary of numbers from N to M = ${sum}</p>\n 
		`
	}
	document.getElementById('numberN').value = ''
	document.getElementById('numberM').value = ''	
})