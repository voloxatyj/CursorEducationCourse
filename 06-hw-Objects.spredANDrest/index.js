const result = document.getElementById('answers')

/* Arguments */
const students = [{
	name: "Tanya",
	course: 3,
	subjects: {
		math: [4, 4, 3, 4],
		algorithms: [3, 3, 3, 4, 4, 4],
		data_science: [5, 5, 3, 4]
	}
}, {
	name: "Victor",
	course: 4,
	subjects: {
		physics: [5, 5, 5, 3],
		economics: [2, 3, 3, 3, 3, 5],
		geometry: [5, 5, 2, 3, 5]
	}
}, {
	name: "Anton",
	course: 2,
	subjects: {
		statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
		english: [5, 3],
		cosmology: [5, 5, 5, 5]
	}
}];

function getSubjects (data) {
	let name = prompt(`Введіть ім’я студента, предмети які він вивчає(Anton,Victor,Tanya)`)
	let result = data.filter(item => item.name === name)
	return `[${Object.keys(result[0].subjects).map(item => (item[0].toUpperCase() + item.slice(1).replace('_', ' ')))}]`
}


function getAverageMark (data, name=undefined) {
	let student = ''
	if(name === undefined){
		student = prompt(`Введіть ім’я студента, середню оцінку котрого ви хочете взнати(Anton,Victor,Tanya)`)
	}
	const infoOfStudent = data.filter(item => item.name === name || item.name === student)  
	if (typeof infoOfStudent[0].subjects === 'object'){
		return Number((Object.values(infoOfStudent[0].subjects)
			.reduce((acc, next) => acc += next.reduce((acc, next) => acc += next, 0) / next.length, 0) / Object.values(infoOfStudent[0].subjects).length).toFixed(2))
		} else return infoOfStudent[0].subjects
}

function getStudentInfo (data) {
	let name = prompt(`Введіть ім’я студента, інформацію про котрого ви хочете взнати(Anton,Victor,Tanya)`)
	const studentInfo = data.filter(item => item.name === name).map(item => {
		item.subjects = getAverageMark(data, name)
		return item
	})
	return (JSON.stringify(studentInfo[0]))
}

function getStudentsNames (data) {
	return data.map(item => item.name).sort()
}

function getBestStudent (data) {
	const result = data.map(item => { 
		const res = getAverageMark(data, item.name)
		return {
			name: item.name,
			rate: +res
		}
	}).sort((a, b) => b.rate - a.rate)
	return JSON.stringify(result[0].name)	
}

function calculateWordLetters (word) {
	const test = [...word.replace(' ','')]
	const res = new Map()
	let i = 1
	test.forEach(item => {
		if(res.has(item)) {
			i = res.get(item) + 1
			res.delete(item)
			res.set(item,i)
		} else res.set(item, i)
	})
	return JSON.stringify(Object.fromEntries(res.entries()))
}

document.writeln(`
<p>Створіть функцію getSubjects, яка повертає список предметів для конкретного студента.\n ${getSubjects(students)}</p> 
<p>Створіть функцію getStudentInfo --> яка повертає інформацію загального виду по переданому студенту\n ${getStudentInfo(students)}</p> 
<p>Ствроіть функцію getStudentsNames --> яка повертає імена студентів у алфавітному порядку.\n ${getStudentsNames(students)}</p>
<p>Створіть функцію getBestStudent --> яка повертає кращого студента зі списку по показнику середньої оцінки\n ${getBestStudent(students)}</p>
<p>Створіть функцію getAverageMark --> яка поверне середню оцінку по усім предметам для переданого студента\n ${getAverageMark(students)}</p> 
<p>Створіть функцію calculateWordLetters --> яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень\n ${calculateWordLetters("тест")}</p>  
`)
