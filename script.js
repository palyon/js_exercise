//Hello Exercise
function hello(name) {
  console.log("Hello, " + name + "!");
}
//hello("Patrick")

//Hello 2 Exercise
function hello2(name) {
  if (name === undefined) {
    console.log("Hello, world!");
  }
  else {
    console.log("Hello, " + name + "!");
  }
}
//hello2()
//hello2("Patrick")

//Madlib
function madlib(name, subject) {
  console.log(name + "\'s favorite subject in school is " + subject);
}
//madlib("Patrick", "English")

function tipAmount(billAmount, levelOfService) {
  if (levelOfService === 'good') {
    var tip = billAmount * .20;
    console.log(tip);
  }
  else if (levelOfService === 'fair') {
    var tip = billAmount * .15;
    console.log(tip);
  }
  else if (levelOfService === 'bad') {
    var tip = billAmount * .10;
    console.log(tip);
  }
}
//tipAmount(40, 'fair')

function totalAmount(billAmount, levelOfService) {
  if (levelOfService === 'good') {
    var total = (billAmount * .20) + billAmount;
    console.log(total);
  }
  else if (levelOfService === 'fair') {
    var total = (billAmount * .15) + billAmount;
    console.log(total);
  }
  else if (levelOfService === 'bad') {
    var total = (billAmount * .10) + billAmount;
    console.log(total);
  }
}
//totalAmount(40, 'fair')

function totalAmount(billAmount, levelOfService, numberOfPeople) {
  if (levelOfService === 'good') {
    var total = ((billAmount * .20) + billAmount) / numberOfPeople;
    console.log(total);
  }
  else if (levelOfService === 'fair') {
    var total = ((billAmount * .15) + billAmount) / numberOfPeople;
    console.log(total);
  }
  else if (levelOfService === 'bad') {
    var total = ((billAmount * .10) + billAmount) / numberOfPeople;
    console.log(total);
  }
}
//totalAmount(40, 'fair', 2)

function printNumbers(startNumber, endNumber) {
  var numbers = [];
  for(var i = startNumber; i < endNumber + 1; i++) {
    numbers.push(i);
  }
  console.log(numbers);
}
//printNumbers(1, 10)

function printSquare(dimension) {
  var style = "*"
  for(var i = 0; i < dimension; i++) {
    console.log(style);
    for(var i = 0; i < dimension; i++) {
      console.log(style);
    }
  }
}
printSquare(5)
