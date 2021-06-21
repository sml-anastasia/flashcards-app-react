import React from 'react';
import WordList from '../WordList/index';
import Loader from '../Loader/index';
import Error from '../Error/index';
export default class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words: [],
            isLoading: false,
            error:null,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('/api/words')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                this.setState({
                    words: response,
                    isLoading: false,
                })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { words, isLoading, error } = this.state;

        if (error) {
            return <Error errorMessage={error.message}/>;
        }

        if (isLoading) {
            return <Loader/>;
        }
        return(
        <div className="words-list">
            <h2 className="words-list_item">Все слова</h2>
            {
            words.map((word) => <WordList id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected} />)
            }
        </div>
        )
    }
}