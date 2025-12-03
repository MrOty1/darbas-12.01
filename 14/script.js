// 14# https://projecteuler.net/problem=14

let numbers = 13

const doNum = (number) => {
    let num = 0
    let fullNArray = []
    let largestNum = 0
    for(let i = 1; i <= number; i++){
        let nArray = []
        let tempNumber = i
        while (tempNumber !== 1){
            if(tempNumber % 2 == 0){
                tempNumber = tempNumber / 2
            }else{
                tempNumber = 3 * tempNumber + 1
            }
            nArray.push(tempNumber)
        }
        newNum = nArray.length + 1
        if(num > newNum){
        }else{
            num = nArray.length + 1
            fullNArray = nArray
            largestNum = i
        }
    }
    console.log(fullNArray)
    console.log(largestNum)
    console.log(`From ${largestNum}, this contains ${num} terms`)
}

doNum(numbers)