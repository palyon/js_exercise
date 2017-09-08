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

function printNumbers2(startNumber, endNumber) {
  var numbers = [startNumber];
  while (startNumber < endNumber) {
    startNumber++;
    numbers.push(startNumber);
  }
  console.log(numbers);
}
//printNumbers2(1, 10);

function printSquare(dimension) {
  var style = "*";
  for(var i = 0; i < dimension; i++) {
      console.log(style.repeat(dimension));
    }
}
//printSquare(5)

function printBox(width, height) {
  var style = "*";
  console.log(style.repeat(width));
  for (var i = 0; i < height; i++) {
    console.log(style + (" ".repeat(width - 2)) + style);
  }
  console.log(style.repeat(width));
}
//printBox(6, 4);

function printBanner(text) {
  var style = "*";
  var length = text.length;
  console.log(style.repeat(length + 2))
  console.log(style + text + style)
  console.log(style.repeat(length + 2))
}
//printBanner("Welcome to DigitalCrafts")

function factors(integar) {
  for(var i = 1; i <= integar; i++) {
    if (integar % i == 0) {
      console.log(i);
    }
  }
}
//factors(12)

function cipher(message, offset) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  var output = '';

  for(var i = 0; i < message.length; i++) {
    var letter = message[i];
    var position = alphabet.indexOf(letter);
    var newPosition = position - offset;

    if (newPosition < 0) {
      newPosition += 26;
    }

    var newLetter = alphabet[newPosition];

    output += newLetter;
  }

  console.log(output);

}
//cipher('adam', 2)

function decipher(message, offset) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  var output = '';

  for(var i = 0; i < message.length; i++) {
    var letter = message[i];
    var position = alphabet.indexOf(letter);
    var newPosition = position + offset;

    if (newPosition < 0) {
      newPosition += 26;
    }

    var newLetter = alphabet[newPosition];

    output += newLetter;
  }

  console.log(output);

}
decipher('ybyk', 2);
