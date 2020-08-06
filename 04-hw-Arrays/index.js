const result = document.getElementById('answers')
/* Arguments */
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
	const studentsByPairs = []
	let girls = []
	let boys = [...students]
	for(let item of students) {
		if (item.split('')[item.length-1] === 'а') {
			girls.push(item)
		}
	}
	for(let i=0; i<boys.length; i++) {
		if (boys.includes(girls[i])) {
			boys.splice(boys.indexOf(girls[i]),1)
		}
	}
	for (let i = 0; i < boys.length; i++) {
		studentsByPairs.push([`["${boys[i]}","${girls[i]}"]`])
	}
	return studentsByPairs
}

const pairs = getPairs(students)

document.writeln(`
<p>Розділіть студентів на пари: [${pairs}]</p>`)

function getProject (pairs, themes) {
	themes.sort((a, b) => a.length - b.length)
	const getProjectPairs = []
	for(let i=0; i<pairs.length; i++) {
		getProjectPairs.push([`["${pairs[i][0].replace(/([\[\]\"])/g, "").replace(/,/g, " i ")}", "${themes[i]}"]`])
	}	
	return getProjectPairs
}

const getProjectPairs = getProject(pairs, themes)

document.writeln(`
<p>Зіставте пари та теми проєктів: [${getProjectPairs}]</p>`)

function getRating(students, marks) {
	const rate = []
	for (let i = 0; i < students.length; i++) {
		rate.push([`["${students[i].replace(/([\[\]\"])/g, "").replace(/,/g, " i ")}", ${marks[i]}]`]) 
	}
	return rate
}

document.writeln(`
<p>Зіставте оцінки(marks) зі студентом(students): [${getRating(students, marks)}]</p>`)

function getRateForProject (pairs, themes) {
	themes.sort((a, b) => a.length - b.length)
	const result=[]
	for (let i = 0; i < getProjectPairs.length;i++) {
		result.push([`["${pairs[i][0].replace(/([\[\]\"])/g, "").replace(/,/g, " i ")}", "${themes[i]}", ${Math.ceil(Math.random() * 5)}]`])
	}
	return result

}

document.writeln(`
<p>Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт: [${getRateForProject(pairs, themes)}]</p>`)
