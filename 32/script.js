// 32# https://projecteuler.net/problem=32

const checkForDup = (num, list) => {
    let sepNum = num.toString().split('')
    let countNum = 0
    for(let e = 0; e < sepNum.length; e++){
        for(let i = 0; i < list.length; i++){ 
            if(sepNum[e] == list[i]){
                countNum++
                list.splice(i, 1)
            }
        }
    }
    if(countNum == sepNum.length){
        return true
    }else{
        return false
    }
}

const doNumbers = (fir, snd, eql) => {
    let array = [fir, snd, eql]
    let checkList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let checkNums = 0
    for(let i = 0; i < array.length; i++){
        if(checkForDup(array[i], checkList)){
            checkNums++
        }
        if(checkNums == array.length){
            console.log(`${fir} * ${snd} = ${eql}`)
        }
    }
}

const makeNums = () => {
    for(let i = 12; i <= 98; i++){
        let first = i
        for(let e = 123; e <= 987; e++){
            let equals = i * e
            doNumbers(i, e, equals)
        }
    }
}

makeNums()