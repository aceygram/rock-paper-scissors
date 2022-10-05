const choice = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    
    let computerSelection = choice[Math.floor(Math.random()*choice.length)];
    
    return computerSelection;    
}

function play(playerSelection, computerSelection) {
    if (playerSelection === choice[0] && computerSelection === choice[1]) {
        console.log(`You chose ${choice[0]} and Computer chose ${choice[1]}. The Computer has won.`);
    } else if (playerSelection === choice[1] && computerSelection === choice[0]){
        console.log(`You chose ${choice[1]} and Computer chose ${choice[0]}. You have won this round.`);
    } else if (playerSelection === choice[2] && computerSelection === choice[1]){
        console.log(`You chose ${choice[2]} and Computer chose ${choice[1]}. You have won this round.`)
    } else if (playerSelection === choice[1] && computerSelection === choice[2]){
        console.log(`You chose ${choice[1]} and Computer chose ${choice[2]}. The Computer has won.`)
    } else if(playerSelection === choice[0] && computerSelection === choice[2]){
        console.log(`You chose ${choice[0]} and Computer chose ${choice[2]}. You have won this round.`)
    } else if(playerSelection === choice[2] && computerSelection === choice[0]){
        console.log(`You chose ${choice[2]} and Computer chose ${choice[0]}. The Computer has won.`)
    } else if(playerSelection === choice[0] && computerSelection === choice[0]){
        console.log(`You both chose ${choice[0]}. This round is a tie!`)
    } else if(playerSelection === choice[1] && computerSelection === choice[1]){
        console.log(`You both chose ${choice[1]}. This round is a tie!`)
    } else if(playerSelection === choice[2] && computerSelection === choice[2]){
        console.log(`You both chose ${choice[2]}. This round is a tie!`)
    } else {
        console.log("There is an error!")
    }
}

console.log(play('Paper', getComputerChoice()));

// console.log(getComputerChoice());
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

// console.log(result, typeof result);