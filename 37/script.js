// 37# https://projecteuler.net/problem=37

let number = 197

const makeNum = (num) => {
    // for(let e = 0; e < num;e++){
        let e = num
        let array = e.toString().split('')
        let numLen = array.length
        let number = 0
        let checkAll = 0
        let goodNum = true
        for(let i = 0; i <= numLen; i++){
            if(goodNum){
                array.push(array[0])
                array.shift()
                number = Number(array.join(''));
                if(number % 2 != 0){
                    checkAll++
                    console.log(number)
                }else{
                    goodNum = false
                }
            }else{
                console.log("Bruh")
            }
        }
    // }
}

makeNum(number)