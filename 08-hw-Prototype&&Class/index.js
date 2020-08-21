const btnAdd = document.getElementById('add')
const btnThrow = document.getElementById('dismiss')
const btnRecover = document.getElementById('recover')
const btnInfo = document.getElementById('info')
const btnAverage = document.getElementById('averageMark')
const btnMarks = document.getElementById('marks')
const btnaddBudgetStudent = document.getElementById('addBudgetStudent')
const university = document.getElementById('university')
const course = document.getElementById('course')
const fullname = document.getElementById('fullname')
const studentInfo = document.getElementById('studentInfo')
const budgetStudentInfo = document.getElementById('budgetStudentInfo')
const rate = document.getElementById('rate')
let addBudgetStudent = null
let student = null
const rates = [5, 4, 4, 5]
class Student {
	constructor (university, course, fullName) {
		this.university = university, 
		this.course = course, 
		this.fullName = fullName,
		this._isStudent = true,
		this._marks = rates
	}
	getInfo() {
		studentInfo.innerHTML = 
		`<div class="m-4">
		<h3>University</h3><h5>${this.university}</h5>
		<h3>Course</h3><h5>${this.course}</h5>
		<h3>FullName</h3><h5>${this.fullName}</h5>
		<h3>Marks</h3><h5>${this._marks}</h5>
		</div>`
	}
	getAverageMark() {
		return (this._marks.reduce((acc, next) => acc += next) / this._marks.length).toFixed(1)
	}
	dismiss() {
		this.isStudent = false,
		rates.concat(this._marks)
		this._marks = null
	}
	recover() {
		this.isStudent = true
		this._marks = rates
	}
	get marks() {
		return this._marks 
	}
	set marks(value) {
		this.marks.push(+value)
	}
	set isStudent(value) {
		this._isStudent = value
	}
}


btnAdd.addEventListener('click', function(e){
	e.preventDefault()
	student = new Student(university.value, course.value, fullname.value)
})

btnInfo.addEventListener('click', function(){
	student === null ? studentInfo.innerHTML = `<h3 class="m-4">You must add student!!</h3>` : student.getInfo()
})

btnAverage.addEventListener('click', function(){
		studentInfo.innerHTML =`
		<div class="m-4">
			<h3>getAverageMark</h3><h5>${student.getAverageMark()}</h5>
		</div >`
})

btnRecover.addEventListener('click', function(){
	student.recover()
	student.getInfo()
})

btnThrow.addEventListener('click', function(){
	student.dismiss()
	studentInfo.innerHTML = `<h3 class="m-4"><strong>Student kick off!!<strong></h3>`
})

btnMarks.addEventListener('click', function(){
	if (student._isStudent){
		student.marks = rate.value
		student.getInfo()
	} else studentInfo.innerHTML = `<h3 class="m-4">Please, include student</h3>`
})

class BudgetStudent extends Student {
	constructor (university, course, fullName, _marks, isStudent) {
		super(university, course, fullName, _marks, isStudent)
		setInterval(() => {
			if (budgetStudent._isStudent && super.getAverageMark() > 4) {
				console.log('Ви отримаєте 1400 грн. стипендії')
			} else {
				console.log(`Студент не отримає стипендії`)
			}
		}, 30000)
		this.university = university,
		this.course = course,
		this.fullName = fullName,
		this._marks = _marks,
		this._isStudent = isStudent
	}
}

btnaddBudgetStudent.addEventListener('click', () => {
	budgetStudent = new BudgetStudent(student.university, student.course, student.fullName, student._marks, student._isStudent)
	if (budgetStudent._isStudent) {
		budgetStudentInfo.innerHTML = `<p><strong>Студента перевели на бюджет</strong></p>` 
		budgetStudentInfo.style.color = 'green'
	}  else {
		budgetStudentInfo.innerHTML = `<p><strong>Студент не числиться</strong></p>`
		budgetStudentInfo.style.color = 'red'
	}
})