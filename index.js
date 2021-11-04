function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
  return function(param = "special"){
    return `You are ${flair}${param}${flair}!`
  }
}

const Calculator = {
  "add" : () => 1 + 3,
  "subtract" : () => 1 - 3,
  "multiply" : () => 1 * 3,
  "divide" : () => 10 / 5
}

function actionApplyer(int,array){
  if (array.length === 0) {return int}
  let final = int
  for (let f of array) {
    final = f(final)
  }
  return final
}