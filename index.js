var katzDeliLine = [];



function takeANumber(katzDeliLine, name){
  for(var i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(name);
    return(`Welcome, ${name}. You are number ${i} in line.`)
  }
}
