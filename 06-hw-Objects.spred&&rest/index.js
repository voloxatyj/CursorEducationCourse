// const name = prompt(`Введіть ім’я студента, котрий вас цікавить (Anton,Victor,Tanya)`)
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

const student = students.filter(item => item.name === name)
// student.length === 0 ? alert('Такого студента в списках немає') : -1

function getSubjects (data) {
	// return `[${Object.keys(data[0].subjects).map(item => (item[0].toUpperCase() + item.slice(1).replace('_', ' ')))}]`
}


function getAverageMark (data) {
	// if (typeof data[0].subjects === 'object'){
	// 	return Number((Object.values(data[0].subjects)
	// 		.reduce((acc, next) => acc += next.reduce((acc, next) => acc += next, 0) / next.length, 0) / Object.values(data[0].subjects).length).toFixed(2))
	// 	} else return data[0].subjects
}

function getStudentInfo (data) {
	const studentInfo = data.map(item => {
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
	return result[0].name	
}

// function calculateWordLetters (word) {
// 	const test = [...word.replace(' ','')]
// 	const res = new Map()
// 	let i = 1
// 	test.forEach(item => {
// 		if(res.has(item)) {
// 			i = res.get(item) + 1
// 			res.delete(item)
// 			res.set(item,i)
// 		} else res.set(item, i)
// 	})
// 	return JSON.stringify(Object.fromEntries(res.entries()))
// }

function calculateWordLetters (word) {
	const test = [...word.replace(' ','')]
	const check = {}
	for(let element of test) {
		if (Object.keys(check).includes(element)) {
			check[element]++
		} else check[element] = 1
	}
	return JSON.stringify(check)
}


document.writeln(`
<p>Створіть функцію getSubjects, яка повертає список предметів для конкретного студента.\n ${getSubjects(student)}</p> 
<p>Створіть функцію getStudentInfo --> яка повертає інформацію загального виду по переданому студенту\n ${getStudentInfo(student)}</p> 
<p>Ствроіть функцію getStudentsNames --> яка повертає імена студентів у алфавітному порядку.\n ${getStudentsNames(students)}</p>
<p>Створіть функцію getBestStudent --> яка повертає кращого студента зі списку по показнику середньої оцінки\n ${getBestStudent(students)}</p>
<p>Створіть функцію getAverageMark --> яка поверне середню оцінку по усім предметам для переданого студента\n ${getAverageMark(student)}</p> 
<p>Створіть функцію calculateWordLetters --> яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень\n ${calculateWordLetters("тест")}</p>  
`)
