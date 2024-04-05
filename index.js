const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent:
    "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
    Thor: "Admiration, respect, and love",
    Loki: "Your son",
  },
  signatories: ["Thor", "Loki"],
};

// Solution 1: Use a thisArg to avoid the lost context bug
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  this.signatories.forEach(function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  }, this); // passing 'this' context explicitly
};

printCard.call(messageConfig);

// Solution 2: Use a Closure to Regain Access to the Lost Context
const printCardClosure = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  const outerContext = this; // capturing 'this' context in a variable

  this.signatories.forEach(function (signatory) {
    const message = `${outerContext.closing[signatory]}, ${signatory}`;
    console.log(message);
  });
};

printCardClosure.call(messageConfig);

// Solution 3: Use an Arrow Function Expression to Create a Function Without Its Own Context
const printCardArrow = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  // Using arrow function to automatically bind to parent context
  this.signatories.forEach((signatory) => {
    console.log(`${this.closing[signatory]}, ${signatory}`);
  });
};

printCardArrow.call(messageConfig);
