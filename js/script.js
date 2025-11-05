document.addEventListener('DOMContentLoaded', () => {
    //opções de cartão
    const cardArray = [
    {
        name: 'abel',
        img: './img/abelp.jpg'
    }, 
    {
        name: 'raphael',
        img: './img/raphaelp.jpg'
    },
    {
        name: 'tigrinho',
        img: './img/tigrinho.jpg'
    },
    {
        name: 'veveto',
        img: './img/vevetop.jpg'
    },
    {
        name: 'piquerez',
        img: './img/piquerez.jpg'
    },
    {
        name: 'gomez',
        img: './img/gomez.jpg'
    },
    {
        name: 'piquerez',
        img: './img/piquerez.jpg'
    },
    {
        name: 'veveto',
        img: './img/vevetop.jpg'
    },
    {
        name: 'gomez',
        img: './img/gomez.jpg'
    },
    {
        name: 'raphael',
        img: './img/raphaelp.jpg'
    },
    {
        name: 'abel',
        img: './img/abelp.jpg'
    },
    {
        name: 'tigrinho',
        img: './img/tigrinho.jpg'
    }
    ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#acertos')
const errorDisplay = document.querySelector('#erros')
const errorTitle = document.querySelector('#erro')
const acertoTitle = document.querySelector('#acerto')
const fim = document.querySelector('#fim')

let erro = 0;
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//crie seu quadro 
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './img/front.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//vire seu cartão
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './img/front.jpg')
        cards[optionTwoId].setAttribute('src', './img/front.jpg')
        alert('Você clicou na mesma imagem!')
        erro++
        errorDisplay.textContent = " " + erro
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert('você encontrou!')
        cards[optionOneId].setAttribute('src', './img/porco.png')
        cards[optionTwoId].setAttribute('src', './img/porco.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', './img/front.jpg')
        cards[optionTwoId].setAttribute('src', './img/front.jpg')
        alert('Desculpe, tente novamente!')
        erro++
        errorDisplay.textContent = " " + erro
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent =" " + cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        errorTitle.style.display = "none"
        acertoTitle.style.display = "none"
        fim.textContent = 'Parabéns! Você encontrou todos eles!'
    }
}
createBoard()
})