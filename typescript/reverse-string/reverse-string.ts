class ReverseString {
    static reverse(word: string): string {
        return word.split("").reverse().join("")
    }
}

export default ReverseString
