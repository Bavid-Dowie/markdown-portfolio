console.log('Hello world!');

//Introduction to if...else statements (loop)

let yourMoney = 50;
let catPrice = 100;

if (yourMoney === catPrice) {
    console.log('You have just enough to buy a cat!');
}   else if (yourMoney > catPrice) {
    console.log('You can buy a cat and will have dollars left over.');
}   else {
    console.log('You cannot buy a cat. You needs more dollars.');
}

//Ternary Operator introduction

const age = 19;

let allowed

if (age > 18) {
  allowed = 'yes'
} else {
  allowed = 'no'
}



//For ternary, declare 'allowed' and set it euqal to the "(i >=< x) ? 'yes' : 'no';"
//See following example;

const allowed = (age > 18) ? 'Youre good.' : 'Too young.';

console.log(allowed);


//SWITCH statement introductions

let food = 'apple';

switch(food)    {
    case 'pear':
        console.log('I like pears');
        break;
    case 'apple':
        console.log('I like apples');
        break;
    case 'orange':
    case 'clementine':
        console.log('mmmm.... citrus');
        break;
    default:
        console.log('Not  sure what that is.');
}

food = 'dragonfruit';

console.log(food);

let n = 8;

switch(n)   {
    case 1:
        console.log(n + ' is actually not prime!');
        break;
    case 2:
        console.log(n + ' is the smallest prime!');
        break;
    case 3:
    case 5:
    case 7:
        console.log(n + ' is prime!');
        break;
    case 4:
    case 6:
    case 8:
    case 9:
        console.log(n + ' is not prime :(');
        break;
    default:
        console.log('idk if ' + n + ' is prime. google it, ask yourself, ask your friend.');
}

//Iteration - WHILE Loops

let n = 0;
while (n < 50)  {
    // console.log('n is ' + n);
    console.log(`n is ${n}`);
    // ^^^ use this method in future - `shows ${n} with other info in single scope`
    
    console.log(`${n} is ${n % 2 ? 'odd' : 'even'}`) // n % 2 will return 1 (true) then 'odd' if 0 (false) then 'even'
    n++; // n = n + 1 OR n += 1;
}  
// Anything with ${ } is Javascript, everything else within ` ` is a string

let fruits = ['golden kiwi', 'guava', 'persimmon', 'durien'];

for (let i = 0; i < fruits.length; i++) {
    console.log(`I love ${fruits[i]}!`);
}

// Writing a Function
const movie1 = 'Saving Private Ryan';
const year1 = 1998;
// console.log(`${movie1} was released in ${year1}`);

const movie2 = 'Interstellar';
const year2 = 2014;
// console.log(`${movie2} was released in ${year2}`);

const movie3 = 'Jason Bourne';
const year3 = 2016;
// console.log(`${movie3} was released in ${year3}`);

const printMovie = function(movie, year)   {
    let verifyYear = parseInt(year)
    console.log(`${movie} was released in ${verifyYear}`);
}   // <= this is a function expression, everything within the block for printMovie

printMovie('Saving Privarte Ryan', 1998)
printMovie('Interstellar', 2014)

const helloWorld = function ()  {
    console.log("Hello World")
}
helloWorld()

const saySomething = function() {
    console.log("This is where I say something.")
}
saySomething()

const printNums = function ()    {
    for (let i = 1; i <= 100; i++)
        console.log(i)
}

printNums()

    let sum = 0;
    for (let i = 0; i < array.length; i++)   {
          sum += array[i]
    }
    console.log(sum)

    sumArray([1, 2, 3, 4, 5])   

    const sumOfArray = function (students)  {
        const students = [
            'Alice',
            'Andrew',
            'Casey',
            'Damian',
            'Grant',
            'Howie',
            'Wade',
            'Kat',
            'Kimbrad',
            'Kiu',
            'Natasha',
            'Obi',
            'Pedro',
            'Sarah',
            'Scott',
            'Tiffany',
            'Zhe',
          ];
          console.log(students)
const students = function (students)    {

    // for (let i = 0; i < students.length; i++)   {

   
    }
}

function Classroom(name, numberOfStudents, hasProjector)  {
    this.name = name
      this.numberOfStudents = numberOfStudents
      this.projector = hasProjector
    // namer, numberOfStudents, has projector
    
}
const wdi = new Classroom('48', 16)

console.log(wdi)

const Person = {
    type: 'Human',
    displayType: function(){
      console.log(this.type);
    }
  }
const Person1 = Object.create(Person);
Person1.displayType();
const 
Person2 = Object.create(Person);
Person2.displayType();

const apple = {
    type:   'organic',
    seeds:  true,
    color:  ['green', 'red', 'yellow'],
    flavor: ['sweet', 'tart', 'dry'],
    weight: 3,
}

console.log("apple")

const classroom = {}

const myCar = {make: 'Ford', model: 'Mustang', year: 1969};

function showProps(obj, objName) {
  let result = ''; 
  for (let i in obj) {
    if (obj.hasOwnProperty('door')) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  return result;
}

console.log(showProps(myCar, 'Car'));


const monkey = {
    name: "Popo", 
    species: "Bonobo", 
    foodsEaten: "figs",
    displayType: function(){
        console.log(this.type);
    },
    introduce: function(){
        return `My name is ${this.name} and I'm a ${this.species}. I'm mighty fond of ${this.foodsEaten}... and I talk.`
    }
}


let monkey2 = Object.create(monkey);
monkey2.name = "Mama";
monkey2.species = "Macaque";
monkey2.foodsEaten = "starfruit";



const monkey3 = Object.create(monkey);
monkey3.name = "Charley";
monkey3.species = "Chimpanzee";
monkey3.foodsEaten = "Candy";

console.log(monkey.introduce())
console.log(monkey2.introduce())
console.log(monkey3.introduce())