import {action, observable} from 'mobx';

class WordsStore {
    @observable words = []

    @action addWord = (word) => {
        return this.words.push(word)
    }
    @action removeWord = (index) => {
        return this.words.splice(index, 1)
    }
}

export default WordsStore