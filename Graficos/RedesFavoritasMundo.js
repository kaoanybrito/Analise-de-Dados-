
import { getCSS } from "./common.js"

async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json&#39;
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais que os usuários mais gostam',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

redesFavoritasMundo()

Adicionar comentário para a turma...


Aviso: "const getCSS = (variavel) => { return…"
CRISTIANO SANTOS RODRIGUES
Criado em: 09:2309:23
const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
}

export { getCSS, tickConfig }

Adicionar comentário para a turma...


Aviso: "@import…"
CRISTIANO SANTOS RODRIGUES
Criado em: 09:0609:06
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap&#39;);

:root {
    --bg-color: #222831;
    --primary-color: #DDDDDD;
    --secondary-color: #F05454;
    --font: "Nunito Sans", sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--primary-color);
    font-family: var(--font);
    height: 100vh;
    margin: 0;
}

header {
    background-color: var(--primary-color);
    text-align: center;
    padding: 1px;
}

h1 {
    font-size: 2rem;
    color: var(--bg-color);
    font-weight: 700;
}

nav {
    display: flex;
    justify-content: center;
    font-weight: 400;
}

nav a {
    text-decoration: none;
    color: var(--bg-color);
    margin: 0 2rem 1rem 0rem;
    font-size: 1.2rem;
}

nav a:hover {
    text-decoration: underline;
    transform: scale(0.90);
    transition: transform 0.1s;
}

.graficos-container {
    margin: 5rem;
}

.grafico {
    margin-top: 3rem;
}

.graficos-container__texto {
    font-size: 1.3rem;
    text-align: center;
    padding: 2rem;
    border: var(--secondary-color) solid 2px;
}

span {
    font-weight: bold;
    color: var(--secondary-color);
}

footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: var(--bg-color);
    width: 100%;
    height: 3rem;
    margin-top: 2rem;
}