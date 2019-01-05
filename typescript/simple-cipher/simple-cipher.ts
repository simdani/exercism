class SimpleCipher {
    key: String
    static letters: String = "abcdefghijklmnopqrstuvwxyz"

    constructor(key?: string) {
        if (key === '') {
            throw ('Bad key')
        }

        if (key && (key.length === 0 || key!.match(/[^a-z]/))) {
            throw ('Bad key')
        }

        this.key = key || this.generateRandomkey()
    }

    generateRandomkey(): String {
        let text: String = ""

        for (let i = 0; i < 100; i++) {
            text += SimpleCipher.letters.charAt(Math.floor(Math.random() * SimpleCipher.letters.length))
        }
        return text
    }

    encode(text: String): String {
        const chars: string[] = text.split('')
        const encodedChars: String[] = []

        if (this.key.length !== text.length) {
            chars.forEach((element, index) => {
                let newIndex = SimpleCipher.letters.indexOf(element) + SimpleCipher.letters.indexOf(this.key[index])
                if (newIndex >= SimpleCipher.letters.length) {
                    newIndex -= SimpleCipher.letters.length
                }
                encodedChars.push(SimpleCipher.letters[newIndex])
            })
        } else {
            chars.forEach((element, index) => {
                let newIndex = SimpleCipher.letters.indexOf(element) + SimpleCipher.letters.indexOf(this.key[index])
                if (newIndex >= SimpleCipher.letters.length) {
                    newIndex -= SimpleCipher.letters.length
                }
                encodedChars.push(SimpleCipher.letters[newIndex])
            })
        }

        return encodedChars.join('')
    }

    decode(text: String): String {
        const chars: string[] = text.split('')
        const decodedChars: string[] = []

        chars.forEach((element, index) => {
            let newIndex = SimpleCipher.letters.indexOf(element) - SimpleCipher.letters.indexOf(this.key[index])
            if (newIndex < 0) {
                newIndex += SimpleCipher.letters.length
            }
            decodedChars.push(SimpleCipher.letters[newIndex])
        })

        return decodedChars.join('')
    }
}

export default SimpleCipher
