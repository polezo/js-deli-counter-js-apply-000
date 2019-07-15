const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  let customerNumber = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${customerNumber} in line.`;
}

const nowServing = katsDeliLine => {
  if (katsDeliLine.length > 0) {
    let name = katsDeliLine[0];
    katsDeliLine.shift();
    return `Currently serving ${name}.`;
    } else {
      return "There is nobody waiting to be served!";
    }
  }

const currentLine = arr => {
  if (arr.length > 0) {
    let positionAndName = [];
    for (let i = 0; i < arr.length; i++) {
      let position = i + 1;
      positionAndName.push(`${position}. ${arr[i]}`);
    }
  return `The line is currently: ${positionAndName.join(', ')}`;
  } else {
    return "The line is currently empty.";
  }
}

let mostRecentTicket = 47;

const takeANumber2 = arr => {
  let customerTicket = mostRecentTicket + 1;
  arr.push(customerTicket);
  mostRecentTicket = customerTicket;
  };


let arr = ['Jim','John','Jenny','Jane'];
console.log(currentLine(arr));
console.log(takeANumber(arr,'James'));

takeANumber2(arr);
takeANumber2(arr);

console.log(currentLine(arr));