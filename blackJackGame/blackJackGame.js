let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false

function randomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard === 1){
        return 11;
    }
    else if(randomCard > 10){
        return 10
    }
    else{
        return randomCard
    }
}

function startGame(){
    let firstCard = randomCard()
    let secondCard = randomCard()
    isAlive = true
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    document.getElementById("card-el").innerHTML = "Cards: "
    for(let i=0;i<cards.length;i++){
        document.getElementById("card-el").innerHTML += cards[i] + " "
    }
    if(sum < 21){
        message = "Do you want to draw a new card?"
        isAlive = true
    }
    else if(sum === 21){
        message = "You,ve got BlackJack!"
        hasBlackJack = true
    }
    else{
        message = "You are out of the game!"
        isAlive = false
    }
    document.getElementById("message-el").innerHTML = message;
    document.getElementById("sum-el").innerText = "Sum: " + sum;
    //38th line can be wirtten as ==> document.querySelector("#sum-el").innerText = "Sum: " + sum;
}

function discard(){
    
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = randomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
    
}