// inserts a comma into a number every 3 digits. 

const insertComma = (num) => {
    let numArr = num.toString().split('').reverse()
    for (let i = 1; i <= numArr.length - 1; i++) {
        if (i % 3 === 0) {
            numArr[i] = numArr[i] + ','
        }
    }
    return numArr.reverse().join('')
}