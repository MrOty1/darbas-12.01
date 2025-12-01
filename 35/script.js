// 35# https://projecteuler.net/problem=35

let number = 25

const makeNum = (num) => {
    for(let e = 0; e < num;e++){
        let array = e.toString().split('')
        let numLen = array.length
        let number = 0
        let i = 0
        while(i <= numLen){
            array.push(array[0])
            array.shift()
            number = Number(array.join(''));
            if(number % 2 != 0){
                console.log(number)
                console.log('THING IS ', i)
                i++
            }else{
                break
            }
        }
    }
}

makeNum(number)