// Elementos


const horasElement = document.querySelector(".hora")
const minutosElement = document.querySelector(".minutos")
const segundosElement = document.querySelector(".seg")

const renderHora = () => {
  let data = new Date ()
  let horas = data.getHours().toString().padStart(2, "0")
  let minutos = data.getMinutes().toString().padStart(2, "0")
  let seg = data.getSeconds().toString().padStart(2, "0")

  horasElement.innerText = horas
  minutosElement.innerText = minutos
  segundosElement.innerText = seg

}

setInterval(() => {
  renderHora()
},1000)