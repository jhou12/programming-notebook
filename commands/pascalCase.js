const pascalCase = (str) => {
    const arr = str.split(' ')
    const abbrevs = ['LLC']
    const casedSentence = arr.map(word => {
        if (!abbrevs.includes(word)) {
            const casedWord = []
            const wordArr = word.split('')
            for (let i = 0; i < wordArr.length; i++) {
                if (i === 0) {
                    casedWord.push(wordArr[i].toUpperCase())
                } else {
                    casedWord.push(wordArr[i].toLowerCase())
                }
            }
            return casedWord.join('')
        } else {
            return word.toUpperCase()
        }
    })
    return casedSentence.join(' ')
}