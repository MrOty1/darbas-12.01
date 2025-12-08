// 9# https://projecteuler.net/problem=9

const doNumbers = (num) => {
    for(let c = 1; c < 1000; c++){
        for(let b = 1; b < c; b++){
            for(let a = 1; a < b; a++){
                let sum = a ** 2 + b ** 2
                if(sum == c ** 2 && a + b + c == num){
                    console.log(`a = ${a}, b = ${b}, c = ${c}`)
                    console.log(`${a}² + ${b}² = ${a ** 2} + ${b ** 2} = ${c ** 2} = ${c}²`)
                    console.log(`abc = ${a * b * c}`)
                }
            }
        }
    }
}

doNumbers(1000)