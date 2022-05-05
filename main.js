document.querySelector('#goButton').addEventListener('click', rockPaperScissors)

function rockPaperScissors(){
   
    let randomNumbers = Math.floor((Math.random() * 3) + 1)
    console.log(randomNumbers.toPrecision(3))
    document.querySelector('#resultsDisplay').innerText = randomNumbers
    if(randomNumbers <= 1){
        return "rock"
    } else if (randomNumbers <= 2) {
        return "paper"
    } else {
        return "scissors"
    }
}



// ALTERNATIVE LOGIC
// function RPS (){
//     let random = Math.random()
//     if(random < .33){
//         return "rock"
//     } else if (random < .66){
//         return "paper"
//     } else {
//         return "scissors"
//     }
// }

let winSound = new Audio("sounds/Mario Coin Sound - Sound Effect (HD).mp3")
let drawSound = new Audio("sounds/Aww Sound Effect.mp3")
let loseSound = new Audio("sounds/Spongebob Fail Sound Effect Download.mp3")

document.querySelector('#goButton').addEventListener('click', checkIfWin)

function checkIfWin(choice){
    let userChoice = document.getElementById('userAttempt').value
    console.log(userChoice)
    let botChoice = rockPaperScissors()
    document.querySelector('#resultsDisplay').innerText = botChoice
    document.querySelector('#reset1').reset()
    if((userChoice === "rock" && botChoice === "scissors") || (userChoice === "paper" && botChoice === "rock") || (userChoice === "scissors" && botChoice === "paper")){
        console.log("You Win!")
        document.querySelector('#winOrLose').innerText = "You Win!"
        document.querySelector('body').style.backgroundColor = "green"
        document.getElementById('winPic').classList.toggle('hidden')
        document.getElementById('drawPic').classList.add('hidden')
        document.getElementById('losePic').classList.add('hidden')
        document.querySelector('audio').src = winSound.play()
    }else if (userChoice === botChoice){
        console.log("Draw")
        document.querySelector('#winOrLose').innerText = "Draw"
        document.querySelector('body').style.backgroundColor = "blue"
        document.getElementById('drawPic').classList.toggle('hidden')
        document.getElementById('winPic').classList.add('hidden')
        document.getElementById('losePic').classList.add('hidden')
        document.querySelector('audio').src = drawSound.play()
    }else {
        console.log("You lose... Try Again!")
        document.querySelector('#winOrLose').innerText = "You lose... Try Again!"
        document.querySelector('body').style.backgroundColor = "red"
        document.getElementById('losePic').classList.toggle('hidden')
        document.getElementById('winPic').classList.add('hidden')
        document.getElementById('drawPic').classList.add('hidden')
        document.querySelector('audio').src = loseSound.play()
    }
}