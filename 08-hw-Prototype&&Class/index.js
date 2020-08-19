class Student {
	constructor (university, course, fullName, isStudent) {
		this.university = university, 
		this.course = course, 
		this.fullName = fullName,
		this._marks = [5, 4, 4, 5],
		this.isStudent = isStudent
	}
	getInfo() {
		if(this.isStudent) {
			studentInfo.innerHTML = 
			`<div class="m-4">
				<h3>University</h3><h5>${this.university}</h5>
				<h3>Course</h3><h5>${this.course}</h5>
				<h3>FullName</h3><h5>${this.fullName}</h5>
				<h3>Marks</h3><h5>${this._marks}</h5>
			</div>`
		} else studentInfo.innerHTML = `<p class="m-4"><strong>student dismiss</strong></p>`
	}
	getAverageMark() {
		return (this._marks.reduce((acc, next) => acc += next) / this._marks.length).toFixed(1)
	}
	dismiss() {
		this.isStudent = false
	}
	recover() {
		this.isStudent = true
	}
	get marks() {
		return this._marks 
	}
	set marks(value) {
		this.marks.push(+value)
	}
}

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
const isStudent = document.getElementById('isStudent')
const studentInfo = document.getElementById('studentInfo')
const budgetStudentInfo = document.getElementById('budgetStudentInfo')
const rate = document.getElementById('rate')
let student = null
let addBudgetStudent = null

btnAdd.addEventListener('click', function(e){
	e.preventDefault()
	student = new Student(university.value, course.value, fullname.value, isStudent.checked ? true : false)
})

btnInfo.addEventListener('click', function(){
	student.getInfo()
})

btnAverage.addEventListener('click', function(){
	if(student.isStudent) {
			studentInfo.innerHTML =
			`<div class="m-4">
				<h3>getAverageMark</h3><h5>${student.getAverageMark()}</h5>
			</div > `
		} else studentInfo.innerHTML = `< p class="m-4" > <strong>you can’t</strong></ >`
})

btnRecover.addEventListener('click', function(){
	student.recover()
	student.getInfo()
})

btnThrow.addEventListener('click', function(){
	student.dismiss()
	studentInfo.innerHTML = `<p class="m-4"><strong>student kick off!!<strong></p>`
})

btnMarks.addEventListener('click', function(){
	if(student.isStudent){
		student.marks = rate.value
		studentInfo.innerHTML =
			`<div class="m-4">
				<h3>University</h3><h5>${student.university}</h5>
				<h3>Course</h3><h5>${student.course}</h5>
				<h3>FullName</h3><h5>${student.fullName}</h5>
				<h3>Marks</h3><h5>${student._marks}</h5>
			</>`
	} else studentInfo.innerHTML = `<p class="m-4"><strong>student dismiss</strong></p>`
})

class BudgetStudent extends Student {
	constructor (university,course,fullName,isStudent, _marks) {
		super(university, course, fullName,isStudent,_marks)
		setInterval(() => this.getScholarship(), 30000)
		this.university = university,
		this.course = course,
		this.fullName = fullName,
		this.isStudent = isStudent
		this._marks = _marks
	}
	getScholarship() {
		if (this.isStudent && super.getAverageMark()>4) {
			console.log('Ви отримаєте 1400 грн. стипендії')
		} else  {
			console.log(`Студент не отримає стипендії`)
		}
	}
}

btnaddBudgetStudent.addEventListener('click', () => {
	if(student.isStudent) {
		budgetStudent = new BudgetStudent(student.university, student.course, student.fullName, student.isStudent, student._marks)
		budgetStudentInfo.innerHTML = `<p><strong>Студента перевели на бюджет</strong></p>` 
		budgetStudentInfo.style.color = 'green'
	}  else {
		budgetStudentInfo.innerHTML = `<p><strong>Студент не числиться</strong></p>`
		budgetStudentInfo.style.color = 'red'
	}
})