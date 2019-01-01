class Words {  
    count(word: string): Map<String, number> {
        let words: String[] = word.split(" ").map(word => word.toLowerCase());
        let wordCount:Map<String, number> = new Map();
        for (let i = 0; i < words.length; i++) {
            if (!wordCount.has(words[i])) {
                wordCount.set(words[i], 1);
            } else {
                wordCount.set(words[i], wordCount.get(words[i])! + 1); 
            }
        }
        return wordCount;
    }
}

export default Words;