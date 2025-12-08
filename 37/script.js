// 37# https://projecteuler.net/problem=37

let number = 11

const doPrime = (number) => {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true
}

const makeNum = (num) => {
    let totalFoundNums = 0
    let doNumbers = 10
    while(totalFoundNums < num){
        doNumbers++
        let array = doNumbers.toString().split('')
        let numLen = array.length
        let number = 0
        let goodNum = true
        let checkNum = 0
        let numberList = []
        for(let i = 0; i <= numLen + 1; i++){
            number = Number(array.join(''))
            if(checkNum == numLen){
                break
            }
            if(goodNum){
                if(doPrime(number)){
                    numberList.push(number)
                    checkNum++
                    array.shift()
                }else{
                    numberList = []
                    goodNum = false
                    break
                }
            }
        }
        array = doNumbers.toString().split('')
        numLen = array.length
        number = 0
        goodNum = true
        checkNum = 0
        for(let i = 0; i <= numLen + 1; i++){
            number = Number(array.join(''))
            if(checkNum == numLen){
                break
            }
            if(goodNum){
                if(doPrime(number)){
                    numberList.push(number)
                    checkNum++
                    array.pop()
                }else{
                    numberList = []
                    goodNum = false
                    break
                }
            }
        }
        if(numberList.length == doNumbers.toString().length * 2){
            totalFoundNums++
            console.log(doNumbers)
            console.log(numberList)
        }
    }
}

makeNum(number)