var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var i = katzDeliLine.length;
  return(`Welcome, ${name}. You are ${i} in line`)
}
