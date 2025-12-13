// 30# https://projecteuler.net/problem=30

const checkNum = (array) => {
    let total = 0
    let combineNum = ""
    for(let i = 0; i < array.length; i++){
        total += array[i] ** 5
        combineNum += array[i].toString()
    }
    if(Number(combineNum) == total){
        return true
    }else{
        return false
    }
}

const convertNum = (number) => {
    let numbers = []
    let optNum = number.toString().split('')
    for(let i = 0; i < optNum.length; i++){
        if(optNum[i] == undefined){
            return false
        }
        numbers.push(Number(optNum[i]))
    }
    return numbers
}

const doCalc = () => {
    let total = 0
    for(let i = 1000; i < 999999; i++){
        if(checkNum(convertNum(i))){
            total += i
        }
    }
    console.log(`Sum is: ${total}`)
}

doCalc()