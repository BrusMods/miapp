const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let cw = window.innerWidth
let ch = window.innerHeight

canvas.width = cw
canvas.height = ch

// GRADIENTE
let gradient = ctx.createLinearGradient(0, 0, 0, ch)
gradient.addColorStop(0, "red")
gradient.addColorStop(1, "darkred")

let arregloNumero = [
  "a","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","ñ","o","p","q","r","s",
  "t","u","v","w","x","y","z","£","¥","§","¤"
]

let codigoArray = []
let conteoCodigo = 120
let fontSize = 16
let numeroColumna = Math.floor(cw / fontSize)
let frame = 0

class Matrix {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.velocidad = Math.random() * 2 + 1
  }

  draw() {
    const valor = arregloNumero[Math.floor(Math.random() * arregloNumero.length)].toUpperCase()

    ctx.font = fontSize + "px monospace"
    ctx.fillStyle = gradient
    ctx.shadowBlur = 10
    ctx.shadowColor = "red"

    ctx.fillText(valor, this.x, this.y)

    this.y += this.velocidad * fontSize

    if (this.y > ch) {
      this.y = 0
      this.x = Math.floor(Math.random() * numeroColumna) * fontSize
    }
  }
}

function update() {
  if (codigoArray.length < conteoCodigo) {
    codigoArray.push(
      new Matrix(
        Math.floor(Math.random() * numeroColumna) * fontSize,
        Math.random() * ch
      )
    )
  }

  // fondo negro con rastro
  ctx.shadowBlur = 0
  ctx.fillStyle = "rgba(0,0,0,0.08)"
  ctx.fillRect(0, 0, cw, ch)

  for (let i = 0; i < codigoArray.length; i++) {
    if (frame % 2 === 0) codigoArray[i].draw()
  }

  frame++
  requestAnimationFrame(update)
}

update()
