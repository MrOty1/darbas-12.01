// 35# https://projecteuler.net/problem=35

let number = 1000000

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
    for(let e = 2; e < num;e++){
        let array = e.toString().split('')
        let numLen = array.length
        let number = 0
        let goodNum = true
        let checkNum = 0
        for(let i = 0; i <= numLen + 1; i++){
            number = Number(array.join(''))
            if(checkNum == numLen){
                console.log(number)
            }
            if(goodNum){
                if(doPrime(number)){
                    checkNum++
                    number = 0
                    array.push(array[0])
                    array.shift()
                }else{
                    goodNum = false
                    break
                }
            }
        }
    }
}

makeNum(number)