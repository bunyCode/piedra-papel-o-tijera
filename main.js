import "./index.css"

const elecciones = document.querySelectorAll('.eleccion');
const elegiste = document.getElementById('escogido')
const pc = document.getElementById('pc');
const resultado = document.getElementById('resultado')
const resultados = document.getElementById('combate')
const ok = document.getElementById('ok')
const puntajeJugadorEl = document.getElementById('puntajeUno')
const puntajePCEl = document.getElementById('puntajePC')
let puntajeJugador = 0
let puntajePC = 0

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

elecciones.forEach((eleccion) => {

    eleccion.addEventListener('click', () => {
        const ataqueEnemigo = combateEnemigo()
        const ataqueJugador = eleccion.innerText
        elegiste.innerText = ataqueJugador
        pc.innerText = ataqueEnemigo
        const resultadoCombate = combate(ataqueEnemigo, ataqueJugador)
        resultado.innerText = resultadoCombate
        if (resultadoCombate === 'Ganaste') puntajeJugador++
        else if (resultadoCombate === 'Perdiste') puntajePC++
        puntajeJugadorEl.innerText = puntajeJugador
        puntajePCEl.innerText = puntajePC
        resultados.style.display = 'flex'
        ok.addEventListener('click', () => {
            resultados.style.display = 'none'
        })
    })
})

function combate(combateEnemigo, ataqueJugador) {
    if (combateEnemigo === ataqueJugador) {
        return "Empate"
    } else if (combateEnemigo === "Tijera" && ataqueJugador === "Piedra") {
        return "Ganaste"
    } else if (combateEnemigo === "Piedra" && ataqueJugador === "Papel") {
        return "Ganaste"
    } else if (combateEnemigo === "Papel" && ataqueJugador === "Piedra") {
        return "Ganaste"
    } else {
        return "Perdiste"
    }
}

function combateEnemigo() {
    const ataqueEnemigoNumero = aleatorio(1, 3);
    if (ataqueEnemigoNumero === 1) {
        return "Piedra"
    } else if (ataqueEnemigoNumero === 2) {
        return "Papel"
    } else return "Tijera"
}
