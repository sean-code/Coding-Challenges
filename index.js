// let firstName="John";
// let secondName="Nganga";
// let fullName= `My name is ${firstName} Sean ${secondName}`;
// console.log(fullName); 

// console.log(Boolean(""));
// const truthyValue = 'This value is truthy.';

// console.log(!!!truthyValue);
// const likelyToRain = false;
// console.log(likelyToRain ? "rain boots" : "sun hat");

            //Ternary Expression
// const title = "Byron the Poodle";
// const probabilityOfRain = 0.2;
// const temperatureInC = 20;

// const likelyToRain = probabilityOfRain > 0.3;
// const sunIsDangerous = temperatureInC >= 26;
// const rainPercentage = probabilityOfRain * 100;

// const rainAdvice = likelyToRain
//   ? "take an umbrella": "enjoy this rain-free day";
// const sunAdvice = sunIsDangerous
//   ? " and watch out for heatstroke": " and bask in this fine weather";

// console.log(`Hello, ${title}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC} Celcius we recommend that you ` +
//   rainAdvice +
//   sunAdvice);

// let favoriteNumber = 32;
// if (favoriteNumber >= 10) { // evaluating favoriteNumber >= 10 returns true
//   console.log(favoriteNumber = favoriteNumber + 10);
// } 
// console.log(favoriteNumber);

//Joy To World
// const lineOne = "Joy To The World";
// const lineTwo = "Joy To The Universe";
// const lineThree = "Joy Toi The Fishes In The Deep Blue Seas";

// const chorus = `${lineOne}\n${lineTwo}\n${lineThree}`
// console.log(chorus);

// SWITCH STATEMENT

// const name = "Alice";
// let greeting;

// switch (name) {
//   case "Alice":
//     greeting = "Hello, Alice!";
//     break;
//   case "The White Rabbit":
//     greeting = "Don't be late, White Rabbit";
//     break;
//   case "The Mad Hatter":
//     greeting = "Welcome to the tea party, Mad Hatter";
//     break;
//   case "The Queen of Hearts":
//     greeting = "Please don't chop off my head!";
//     break;
//   default:
//     greeting = "Whoooo are you?";
// }

// console.log(greeting);

// const firstName = "August";
// const secondName = "Alsina";
// // console.log(`My favorite music artist is ${firstName} ${secondName}.`);
// document.getElementById("java").innerHTML=`My favorite music artist is ${firstName} ${secondName}.`





// Fibonacci Problem

const sequence = () => {
    const newArray = [0,1];
    for(let i = 2; i < 12; i++){
      newArray[i] = newArray[i-1] + newArray[i-2]
    }
  // return newArray;
  const even = newArray.filter(a => a%2== 0);
  console.log(even);
  const sumofEven = even.reduce((b, c) => b + c);  
  console.log(`Summation of even numbers is: ${sumofEven}`);
  const odd = newArray.filter(x => !even.includes(x));
  console.log(odd);
  const sumofOdd = odd.reduce((k, l)=> k + l);
  console.log(`Summation of odd numbers is: ${sumofOdd}`);     
}

sequence();



