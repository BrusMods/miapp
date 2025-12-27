

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

let cw = window.innerWidth
let ch = window.innerHeight

canvas.width = cw
canvas.height = ch

let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
gradient.addColorStop(0, "red")
gradient.addColorStop(0.2, "yellow")
gradient.addColorStop(0.4, "green")
gradient.addColorStop(0.6, "cyan")
gradient.addColorStop(0.8, "blue")
gradient.addColorStop(1, "magenta")

let arregloNumero = [
"a", 
"b", 
"c", 
"d", 
"e", 
"f", 
"g", 
"h", 
"i", 
"j", 
"k", 
"l", 
"m", 
"n", 
"ñ", 
"o", 
"p", 
"q", 
"r", 
"s", 
"t", 
"u", 
"v", 
"w", 
"x", 
"y", 
"z",
"£",
"¥",
"§",
"¤"
];

let codigoArray = []
let conteoCodigo = 100
let fontSize = 15
let numeroColumna = cw / fontSize
let frame = 0

class Matrix {

	constructor(x, y) {
		this.x = x
		this.y = y
	}

	draw(ctx) {

		this.valor = arregloNumero[Math.floor(Math.random() * (arregloNumero.length - 1))].toUpperCase()
		this.velocidad = Math.random() * fontSize * 3 / 4 + fontSize * 3 / 4

		ctx.fillStyle = "rgba(0,255,0)"
		ctx.font = fontSize + "px san-serif"
		ctx.fillText(this.valor, this.x, this.y)

		this.y += this.velocidad

		if (this.y > ch) {
			this.x = Math.floor((Math.random() * numeroColumna) * fontSize)
			this.y = 0
			this.velocidad = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4

		}
	}
}


let update = () => {
	if (codigoArray.length < conteoCodigo) {
		let matrix = new Matrix(Math.floor(Math.random() * numeroColumna) * fontSize, 0)
		codigoArray.push(matrix)
	}

	ctx.fillStyle = "rgba(0,0,0,0.05)"
	ctx.fillRect(0,0,cw,ch)


	for (let i = 0; i < codigoArray.length && frame % 2 == 0; i++) {
		codigoArray[i].draw(ctx)
	}

	requestAnimationFrame(update)
	frame++
}



update()
