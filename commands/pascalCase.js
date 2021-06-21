const pascalCase = (str) => {
    const arr = str.split(' ')
    const filter = arr.map(word => {
        if (word !== 'LLC') {
            const casedArr = []
            const wordArr = word.split('')
            for (let i = 0; i < wordArr.length; i++) {
                if (i === 0) {
                    casedArr.push(wordArr[i].toUpperCase())
                } else {
                    casedArr.push(wordArr[i].toLowerCase())
                }
            }
            return casedArr.join('')
        } else {
            return word
        }
    })
    return filter.join(' ')
}