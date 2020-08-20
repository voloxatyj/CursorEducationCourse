const squareLine = document.getElementById('square-line')
const squares = document.querySelectorAll('square')

function generateBlocks () {
	let i = 1
	while(i<=25) {
		const square = document.createElement('div')
		square.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`
		square.classList.add('square')
		squareLine.append(square)
		i++
	}
}

document.getElementById('basic').addEventListener('click',()=>{
	while(squareLine.childElementCount !== 0) {
			squareLine.firstChild.remove();
	}
	generateBlocks()
})


function generateBlocksInterval () {
	setInterval(()=>{
		document.querySelectorAll('.square').forEach(item=>
			item.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`)
	},1000)
}

document.getElementById('advanced').addEventListener('click',()=>{
	if (squareLine.childElementCount === 0) {
		generateBlocks()
		generateBlocksInterval()
	} 
	generateBlocksInterval()
}) 
