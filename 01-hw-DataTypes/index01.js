const btn = document.querySelector('.btn')
const answers = document.querySelector('.answers')
const answersLast = document.querySelector('.answers-last')
const item1 = 15.678
const item2 = 123.965
const item3 = 90.2345
const sum = item3 + item2 + item1
const newSum = Math.trunc(item1) + Math.trunc(item2) + Math.trunc(item3)
const numBool = (Math.round(sum)) % 2 === 0 
const averageSum = (parseFloat(item1) + parseFloat(item2) + parseFloat(item3)) / 3

btn.addEventListener('click', e => {
	e.preventDefault()
	answers.innerHTML = `
	<p>Максимальне число : <strong>${Math.max(item1, item2, item3)}</strong></p>
	<p>Мінімальне число : <strong>${Math.min(item1, item2, item3)}</strong></p>
	<p>Сума : <strong>${sum}</strong></p>
	<p>Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою : <strong>${newSum}</strong></p>
	<p>Сума товарів округленa до сотень : <strong>${(Math.ceil(sum / 100)) * 100}</strong></p>
	<p>Чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? : <strong>${numBool ? 'таки так)):' : 'сумніваюсь...'}</strong></p>
	<p>Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн : <strong>${500 - sum}</strong></p>
	<p>Середнє значення цін, округлене до другого знаку після коми : <strong>${averageSum.toFixed(2)}</strong></p>`
	last()
})

function last() {
	const randomSalary = Math.round(Math.random() * 100)
	const rest = item2 - (item2 / 100) * randomSalary
	const profit = Math.floor(item2) / 2 - (item2 / 100) * randomSalary
	answersLast.innerHTML = `
	<h5>Задача</h5>
	<p>Сума до оплати: <strong>${rest.toFixed(2)}</strong></p>
	<p>Чистий прибуток: <strong>${profit.toFixed(2)}</strong></p>
	<p>Випадкова знижка: <strong>${randomSalary}%</strong></p>
	`
}
