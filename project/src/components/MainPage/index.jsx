import React from 'react';
import WordList from '../WordList/index';
// import Loader from '../Loader/index';
import Error from '../Error/index';
import iconSave from "../../assets/images/icon-save.svg";
import iconAdd from "../../assets/images/icon-add.svg";

export default class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words: [],
            isLoading: false,
            error:null,
            english: '',
            transcription: '',
            russian: '',
            tags: ''
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

    handleChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addWord = () => {
        console.log(this.state);
        if (this.state.english.length === 0 || this.state.russian.length === 0 || this.state.transcription.length === 0 || this.state.tags.length === 0) {
            this.setState({isValid: false});
        } else {
            const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                english: this.state.english,
                russian: this.state.russian,
                transcription: this.state.transcription,
                tags: this.state.tags
                })
            };
            this.setState({pressed: false});
            fetch(`/api/words/add`, requestOptions)
            .then(response => {
            if (response.ok) {
                    response.json();
                } else {
                throw new Error('Something went wrong ...');
            }})
            .then((response) => {
                console.log(response)
            })
            .catch(error => this.setState({ error }));
        }
        
}

    render() {
        const { words, isLoading, error } = this.state;

        if (error) {
            return <Error errorMessage={error.message}/>;
        }

        if (isLoading) {
            return <p>loader</p>;
        }
        return(
        <div className="words-list">
            <h2 className="words-list_item">Все слова</h2>
            <div className="line">
            <span>
                <input
                name='english'
                className={`word-input`}
                value={this.state.english}
                onChange={this.handleChangeInput}
                placeholder="enter word"/>
            </span>
            <span>
                <input 
                name='transcription' 
                className={`word-input`} 
                value={this.state.transcription} 
                onChange={this.handleChangeInput} 
                placeholder="enter transcription"/>
            </span>
            <span>
                <input 
                name='russian' 
                className={`word-input`} 
                value={this.state.russian} 
                onChange={this.handleChangeInput} 
                placeholder="enter translate"/>
            </span>
            <span>
                <input 
                name='tags' 
                className={`word-input`} 
                value={this.state.tags} 
                onChange={this.handleChangeInput} 
                placeholder="enter tags"/>
            </span>
                    <div className="btn-box">
                        <button className="btn_add" onClick={this.addWord}>
                            <img src={iconSave} alt="icon save" />
                        </button>
                        <button className="btn_close" onClick={this.handleChange}>
                            <img src={iconAdd} alt="icon close"/>
                        </button>
                    </div>
                </div>
            {
            words.map((word) => <WordList id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected} />)
            }
        </div>
        )
    }
}