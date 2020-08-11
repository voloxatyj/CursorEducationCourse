const result = document.getElementById('answers')

function getRandomArray(length, min, max) {
	const randArray = []
	for(let i=0; i < length; i++) {
		let item = Math.ceil(Math.random() * max) - i
		max >= item ? item >= min ? randArray.push(item) : randArray.push(i+randArray[i-1]): console.log('wtf');
	}
	return `[${randArray}]`
}

function getModa(...numbers) {
	const modal = [...numbers].filter(item => Number.isInteger(item))
	const result = []
	let Maxcounter = 0
	for (let item of modal) {
		if (Maxcounter < modal.filter(num => num === item).length && !result.includes(item)) {
			Maxcounter = modal.filter(num => num === item).length
			result.pop()
			result.push(item)
		} else if (Maxcounter === modal.filter(num => num === item).length && !result.includes(item)) {
			result.push(item)
		}
	}
	return result
}

function getAverage (...numbers) {
	const result = [...numbers].filter(item => Number.isInteger(item))
	return result.reduce((acc, prev) => acc+=prev,0)/result.length
}

function getMedian (...numbers) {
	const result = [...numbers].filter(item => Number.isInteger(item)).sort((a,b)=>a-b)
	if(result.length % 2 === 0){
		return (result[result.length / 2 - 1] + result[result.length / 2])/2
	} else return result[Math.floor(result.length/2)]
}

function filterEvenNumbers (...numbers) {
	const result = [...numbers]
	return `[${result.filter(item=> item%2===1)}]`
}

function countPositiveNumbers (...numbers) {
	const result = [...numbers]
	let counter = 0
	result.forEach(item=>{
		if(item>0) {
			counter++
		}
	})
	return counter
}

function getDividedByFive (...numbers) {
	const result = [...numbers]
	return `[${result.filter(item => item % 5 === 0)}]`
} 

function replaceBadWords(string) {
	const badWords = ['fuck', 'shit']
	const star = '*'
	let answer = string.split(' ')
	for (let item of badWords){
		answer = answer.reduce((acc,next)=>{
			if (next.includes(item) && !next.includes(star)){
				acc.push(next.replace(item, star.repeat(item.length)))
				return acc
			} else {
				acc.push(next)
				return acc
			}	
		},[])
	}
	return answer
}

// generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"]
function generateCombinations(word) {
	const newWord = [...word]
	const result = []
	for (let character of word) {
		for (let i = 0; i < word.length-1;i++){
			newWord.splice(i,1)
			newWord.splice(i + 1, 0, character)
			if(!result.includes(newWord)) result.push(newWord.join(''))
		}
	}
	return `[${result}]`
}

document.writeln(`
<p>Створіть функцію getRandomArray(length, min, max) – 
яка повертає масив випадкових цілих чисел: ${getRandomArray(15, 1, 100)}</p>
<p>Створіть функцію getModa(...numbers) – 
яка вираховує моду всіх переданих в неї аргументів: ${getModa(6, 2, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів:
${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів:
${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 34)}</p>
<p>Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції:
${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</p>
<p>Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0:
${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</p>
<p>Створіть функцію getDividedByFive(...numbers) – 
яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>
<p>Створіть функцію replaceBadWords(string) – яка 
1) розіб'є фразу на слова, 
2) замінить погані слова на зірочки (*). 
При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), 
після чого масив необхідно буде склеїти .join(" ") 
Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.</p>
${replaceBadWords("It's bullshit!")}
<p>Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові.
${generateCombinations("man")}</p>`)
