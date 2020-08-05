const result = document.getElementById('answers')

function getMaxDigit (number) {
	const num = `${number}`
	let biggest = 0
	for(let i=0; i<num.length;i++){
		biggest<num[i] ? biggest=num[i] : biggest
	}
	return biggest
}

function checkPow(num,i = 2,pow = 0) {
	if(num % i === 0 && i !== 1) {
		pow++
		checkPow(num/i,i,pow)
	} else if(i>=num){
		return obj = {
			i,
			pow
		}
	} 
	else {
		i++
		checkPow(num, i,pow)
	}
}

function formatName(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

function countTaxes(sum, tax) {
	return sum - sum * (18 + (+`${tax}`))/100
}

function getRandomNumber(min,max) {
	return Math.ceil(Math.random()*max)-min
}

function countLetter(character,word) {
	let counter = 0
	let letters = word.toLowerCase()
	for(let i=0; i<=word.length; i++) {
		letters[i] === character ? counter++ : -1
	}
	return counter
}

function convertCurrency(value) {
	if (value.trim().match(/UAH/i))	{
		return `${parseFloat(parseInt(value) / 27.77).toFixed(2)} $`
	} else if (value.trim().includes('$') || value.trim().match(/USD/i))	{
		return `${parseFloat(parseInt(value) * 27.77).toFixed(2)} UAH`
	}	else {
		console.error('Only converts UAH || $')
		return null	
	}
}

function getRandomPassword(length) {
	let i = 0
	let randomPassword = ''
	while(i<length) {
		randomPassword += Math.floor(Math.random()*10)
		i++
	}
	return randomPassword
}

function deleteLetters(letter, word) {
	if(word.includes(letter)) {
		return deleteLetters(letter, word.slice(0, word.indexOf(letter)) + word.slice(word.indexOf(letter) + 1))
	} 
	return word
}

function isPalyndrom(word) {
	let result = word.replace(/\s/g, '').toLowerCase()
	for (let i = 0; i < result.length;i++) {
		if (result[i] !== result[result.length-1-i]) {
			return false
		}
			return true 
	}
}

function deleteDuplicateLetter(word) {
	const res = word.replace(/\s/g, '').toLowerCase()
	for(let i=0;i<res.length;i++) {
		let first = res.slice(i).indexOf(res[i])
		let second = res.slice(i+1).indexOf(res[i])
		if (first !==-1 && second !==-1) {
			const word = deleteLetters(res[i],res)
			return deleteDuplicateLetter(word)
		}
	}
	return res
}

document.writeln(`
<p>#1 Function getMaxDigit: ${getMaxDigit(169)}</p>
<p>#2 Function checkPow <span style="display: none;">${checkPow(36)}</span>: number is i = ${obj.i } in pow = ${ obj.pow }</p>
<p>#3 Function formatName: name is formated ${formatName("оСТаП")}</p>
<p>#4 Function countTaxes: when salary is paid we have ${countTaxes(1000,1.5)} in our count</p>
<p>#5 Function getRandomNumber: ${getRandomNumber(1,25)} random number from min to max
<p>#6 Function countLetter: ${countLetter("а", "Асталавіста")}
<p>#7 Function convertCurrency: live convector from UAH to USD and opposite ${convertCurrency('100usd')}
<p>#8 Function getRandomPassword: your random password is ${getRandomPassword(10)}</p>
<p>#9 Function deleteLetters: after we get new word ${deleteLetters('a', "blablabla")}</p>
<p>#10 Function isPalindrom: ${isPalyndrom('Я несу гусеня')}</p>
<p>#11 Function deleteDuplicateLetter: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`)
