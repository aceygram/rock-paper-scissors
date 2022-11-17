const choice = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const result = document.querySelector('.result');


const start = document.querySelector('button');

const startMgs = document.querySelector('.start-message');

const buttons = document.querySelectorAll('.btn');


start.addEventListener('click', game);

start.addEventListener('mouseup', (e) => {
    startMgs.textContent = 'Please select any of the Elements';
});






function getComputerChoice() {
    
    let random = choice[Math.floor(Math.random()*choice.length)];
    
    return random;    
}

function play(playerSelection, computerSelection) {


    if (playerSelection === choice[0] && computerSelection === choice[1]) {
        computerScore += 1;
        result.textContent = `You chose ${choice[0]} and Computer chose ${choice[1]}. The Computer has won this round.`;
    } else if (playerSelection === choice[1] && computerSelection === choice[0]){
        humanScore += 1;
        result.textContent = `You chose ${choice[1]} and Computer chose ${choice[0]}. You have won this round.`;
    } else if (playerSelection === choice[2] && computerSelection === choice[1]){
        humanScore += 1;
        result.textContent = `You chose ${choice[2]} and Computer chose ${choice[1]}. You have won this round.`
    } else if (playerSelection === choice[1] && computerSelection === choice[2]){
        computerScore += 1;
        result.textContent = `You chose ${choice[1]} and Computer chose ${choice[2]}. The Computer has won this round.`
    } else if(playerSelection === choice[0] && computerSelection === choice[2]){
        humanScore += 1;
        result.textContent = `You chose ${choice[0]} and Computer chose ${choice[2]}. You have won this round.`
    } else if(playerSelection === choice[2] && computerSelection === choice[0]){
        computerScore += 1;
        result.textContent = `You chose ${choice[2]} and Computer chose ${choice[0]}. The Computer has won this round.`
    } else if(playerSelection === choice[0] && computerSelection === choice[0]){
        result.textContent = `You both chose ${choice[0]}. This round is a tie!`
    } else if(playerSelection === choice[1] && computerSelection === choice[1]){
        result.textContent = `You both chose ${choice[1]}. This round is a tie!`
    } else if(playerSelection === choice[2] && computerSelection === choice[2]){
        result.textContent = `You both chose ${choice[2]}. This round is a tie!`
    }
}

function game(){

        // const blocks = document.querySelectorAll('block');
        buttons.forEach(button => {
            button.addEventListener('click', () =>{
                startMgs.remove();
            })
        });
    
        buttons.forEach(button => {
        button.addEventListener('mouseup', () =>{
            function getPlayerChoice (){
            const playerSelection = button.textContent.toLowerCase();
            return playerSelection;
            }
        
            play(getPlayerChoice(), getComputerChoice());
        
            const score = document.querySelector('.score')

            if (humanScore <= 4 && computerScore <= 4) {
                score.textContent = `Current score: Human: ${humanScore} Computer: ${computerScore}`;
                setTimeout(play, 0);
            } else {
                score.textContent = `Current score: Human: ${humanScore} Computer: ${computerScore}`;
                function winCondition(){
                    if (humanScore > 4) {
                        score.innerHTML = `${score.textContent} <br> You Won! <br> Please Reset the game!` ;
                      }
                    if (computerScore > 4) {
                        score.innerHTML = `${score.textContent} <br> Computer Wins! <br> Please Restart the game!`;
                    }
                    if (computerScore >= 5 || humanScore >= 5){
                        buttons.forEach(button => {
                            button.addEventListener('mouseup', () => {
                                score.innerHTML = 'Please Restart the game!';
                                result.remove();
                            })
                        })
                    }
                }
                winCondition();
            }
            })
        })
    }

const reset = document.querySelector('.reset');

reset.addEventListener('mousedown', () => {
    window.location.reload();
})


// game();

// console.log(playerSelection);
// console.log(getComputerChoice());


// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// const bill = (products,tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total
// };

// const result = bill([10,15,20],0.2);
// const result2 = bill([90,5,56],0.2);
// const result3 = bill([15,82,200],0.2);

// console.log(result)
// console.log(result2)
// console.log(result3)


// const name = 'shaun';

// const greet = () => 'hello';

// let result = greet();

// console.log(result);

// let result2 = name.toUpperCase()

// console.log(result2);

// const myFunc = (ace) => {
//     let value = 100;
//     ace(value);
// };

// myFunc(value => {
//     console.log(value);
// });

// let people = ['Dess', 'Ace', 'Wisdom', 'stephen', 'Ofouma'];

// const logPerson = (person, index) => {
//     console.log(`${index} - Hello, ${person}`);
// };

// people.forEach(logPerson);

// const ul = document.querySelector('.people');

// const people = ['Dess', 'Ace', 'Wisdom', 'stephen', 'Ofouma'];

// let html = ``;

// people.forEach(person => {
//     html += `<li style="background-color:purple; padding:10px 15px; color:#fff; margin-right:40px;">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;

// let age = "ace";

// console.log(age);

// age = 52;

// console.log(age);

// age = null;

// console.log(age);

// let email = 'ace4facebook@gmail.com';

// let result = email.replace('a','e');

// // console.log(result);

// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// // let result = 'The Blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

// let result = `The Blog called ${title} by ${author} has ${likes} likes`;

// // console.log (result)

// let friends = ['ace', 'dess', 'gab']

// // friends[0] = 'ryu';

// // console.log(friends)

// // let age = [20,25,30,35]

// // age[3] = 100;

// // console.log(age);

// let result = console.log(friends.push('steph', 'wisdom'));
// result = console.log(friends.pop());
// console.log(friends);

// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 25);
// console.log(age != 35);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age >= 20);
// console.log(age <= 24);

// let score = '100';

// score = Number(score);

// score = score + 1;

// let result = 'hello'

// result = result + 1;

// result = Number(result);

// console.log(typeof result);

// let result = 30;
// result = String(result);
// let result = Boolean()

// let result = Boolean('0');

// // console.log(result, typeof result);

// for(i = 0; i < 10; i++){
//     console.log('ace', i);
// }

// console.log('loop finished');

// const name = ['Ace', 'Dess', 'Steve'];

// for(i = 0; i < name.length; i++) {
//     // console.log(name[i]);
//     let html = `<div>${name[i]}</div>`;
//     console.log(html);
// }

// i = 0;

// while(i < name.length) {
//     // console.log(i + ` is ${name[i]}`);
//     let html = i + ` is ${name[i]}`;
//     console.log(html);
//     i++;
// }

// i = 3;

// do {
//     console.log('the value of i is ' + i);
//     i++;
// } while(i < 5);

// const age = 20;

// if(age > 20){
//     console.log('Old Man!')
// } else {
//     console.log('you cant be in here!')
// }

// const name = ['Ace', 'Dess', 'Steve', 'wisdom'];

// if(name.length > 3){
//     console.log("That's a lot of names!");
// }

// let password = '';

// password = 'aceygram123@';

// if(password.length >= 12 && password.includes('@')){
//     console.log('the password is very strong');
// } else if(password.length >= 8){
//     console.log('the password is long enough');
// } else {
//     console.log('there has been an error!');
// }

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//     if(scores[i] === 0){
//         continue;
//     }


//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you are the winner!');
//         break;
//     }

// }


// let grade = 'B';

// if(grade === 'A'){
//     console.log('You got an ' + grade)
// } else if (grade === 'B') {
//     console.log('You got an ' + grade)
// } else if(grade === 'C'){
//     console.log('You got an ' + grade)
// } else if(grade === 'D'){
//     console.log('You got an ' + grade)
// } else if (grade === 'E'){
//     console.log('You got an ' + grade)
// } else if (grade === 'F'){
//     console.log('You got an ' + grade)
// } else {
//     console.log('error')
// }

// const grade = 'F';

// switch(grade){
//     case 'A':
//         console.log('you got an ' + grade);
//         break;
//     case 'B':
//         console.log('you got a ' + grade);
//         break;
//     case 'C':
//         console.log('you got a ' + grade);
//         break;
//     case 'D':
//         console.log('you got a ' + grade);
//         break;
//     case 'E':
//         console.log('you got an ' + grade);
//         break;
//     case 'F':
//         console.log('you got an ' + grade);
//         break;
//     default:
//     console.log('There is an error!');

// }