const countainer = document.querySelector('.countainer')
let gridSize = 16;

const btn = document.querySelector('.btn')


btn.addEventListener('click', () => {
    let responce = prompt('enter grid size ')
    

    if (responce > 100) {
        responce = prompt('the number of grids must less than 100 ! please enter again')
        const gridSize = responce;
        
    }
    const gridSize = responce


    countainer.innerHTML = '';

    const squareSize = 400 / gridSize;


for (let i = 0; i < gridSize*gridSize; i++) {
    const squares = document.createElement("div")
    squares.classList.add('squares')
    squares.style.width = `${squareSize}px`;
    squares.style.height = `${squareSize}px`;
    countainer.appendChild(squares)

    squares.addEventListener('mouseover', () => {
        squares.style.backgroundColor = randomColor()
    })
    
    
} 

})

const squareSize = 400 / gridSize;

for (let i = 0; i < gridSize*gridSize; i++) {
    const squares = document.createElement("div")
    squares.classList.add('squares')
    squares.style.width = `${squareSize}px`;
    squares.style.height = `${squareSize}px`;
    countainer.appendChild(squares)

    squares.addEventListener('mouseover', () => {
        squares.style.backgroundColor = randomColor()
    })
    
    
} 

function randomColor() {
    const color = Math.floor(Math.random() * 6)

    if(color === 1) {
        return 'blue'
    }
    else if(color === 2) {
        return 'red'
    }
    else if(color === 3) {
        return 'yellow'
    }
    else if(color === 4) {
        return 'green'
    }
    else if(color === 5) {
        return 'grey'
    }
    else if(color === 6) {
        return 'purble'
    }

}