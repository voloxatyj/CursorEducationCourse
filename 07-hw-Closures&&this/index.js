const result = document.getElementById('answers')
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114};

function getMyTaxes (salary) {
	return this.tax * salary 
}

function getMiddleTaxes() {
	return this.tax * this.middleSalary
}

function getTotalTaxes() {
	return this.tax * this.middleSalary * this.vacancies
}

function getMySalary (obj) {
	const newObj = {
		salary: Math.ceil((Math.random() * 500) + 1500),
		get taxes() {
			return Math.ceil(obj.tax * this.salary)
		},
		get profit() {
			return Math.ceil(this.salary - this.taxes)
		},
	}
	setTimeout(()=>{
		console.log(Object.fromEntries(new Map(Object.entries(newObj))))
		getMySalary(obj)
	},10000)
}

document.writeln(`
<p>Створіть функцію getMyTaxes – яка рахує скільки податків ви заплатите
як IT-спеціаліст в якійсь з країн.\n ${getMyTaxes.call(ukraine, 1500)}\n<i class="fas fa-euro-sign"></i></p>
<p>Створіть функцію getMiddleTaxes – яка рахує скільки 
у середньому податків платятт IT-спеціалісти у кожній країні.\n ${getMiddleTaxes.call(ukraine)}\n<i class="fas fa-euro-sign"></i></p>
Створіть функцію getTotalTaxes – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.\n ${getTotalTaxes.call(latvia)}\n<i class="fas fa-euro-sign"></i>
<p>Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;</p>`)
getMySalary(ukraine)