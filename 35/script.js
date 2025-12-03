// 35# https://projecteuler.net/problem=35

let number = 25

const makeNum = (num) => {
    for(let e = 2; e < num;e++){
        let array = e.toString().split('')
        let numLen = array.length
        let number = 0
        let goodNum = true
        let checkNum = 0
        for(let i = 1; i <= numLen + 1; i++){
            console.log(array)
            number = Number(array.join(''))
            if(checkNum == numLen){
                console.log(`AMAZING NUMBER ${number}`)
            }
            if(goodNum){
                if(number % 2 == 0){
                    goodNum = false
                    break
                }else{
                    checkNum++
                    number = 0
                    array.push(array[0])
                    array.shift()
                }
            }
        }
    }
}

makeNum(number)