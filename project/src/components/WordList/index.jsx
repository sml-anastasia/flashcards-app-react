import React from 'react';
import AddWordForm from './AddWordForm';
import WordItem from './WordItem';
import iconSave from "./assets/icon-save.svg";
import iconAdd from "./assets/icon-add.svg";
import iconPen from "./assets/icon-pen.svg";
import iconDelete from "./assets/icon-delete.svg";
import {observer, inject} from "mobx-react";
@inject("WordsStore")
@observer
class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newWord:'',
            pressed: false,
            isValid: true,
            english: props.english,
            transcription: props.transcription,
            russian: props.russian,
            tags: props.tags
        };
    }

    addNewWord = () => {
        const {newWord} = this.state;
        const {WordsStore} = this.props;
        if (!newWord) return;
        WordsStore.addBook(newWord);
        this.setState({
            newWord:''
        })
    }

    deleteWord = (index) => {
        const {WordsStore} = this.props;
        WordsStore.removeWord(index)
    }
    setNewWord = (e) =>{
        this.setState({
            newWord: e.target.value
        })
    }

    handleChange = () => {
        this.setState(
            {
                pressed: !this.state.pressed,
                isValid: true
            }
        );
    }

    handleChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveChanges = () => {
        if (this.state.english.length === 0 || this.state.russian.length === 0 || this.state.russian.length === 0 || this.state.tags.length === 0) {
            this.setState({isValid: false})
        } else {
            this.setState({isValid: true, pressed: false})
        }
    }

    render() {
        const {newWord} = this.state;
        const {WordsStore, id, english, transcription, russian, tags} = this.props;
        return(
            <div>
            {!this.state.isValid && <div className="word-list__error-message">заполните поля</div>}
                
            {this.state.pressed ?
                <div className="line">
                    <AddWordForm
                    key={id}
                    id={id}
                    english={this.state.english}
                    transcription={this.state.transcription}
                    russian={this.state.russian}
                    tags={this.state.tags}
                    checkInput={this.handleChangeInput}
                    isValidClass={this.state.isValid}/>
                    <div className="btn-box">
                        <button className="btn_add" onClick={this.saveChanges} disabled={this.state.isValid ? false : true}>
                            <img src={iconSave} alt="icon save" />
                        </button>
                        <button className="btn_close" onClick={this.handleChange}>
                            <img src={iconAdd} alt="icon close"/>
                        </button>
                        <button className="btn_del">
                            <img src={iconDelete} alt="icon delete"/>
                        </button>
                    </div>
                </div>
                :
                <div className="line">
                    <WordItem
                    key={id}
                    id={id}
                    english={english}
                    transcription={transcription}
                    russian={russian}
                    tags={tags}/>
                    <div className="btn-box">
                    <button className="btn_edit" onClick={this.handleChange}>
                        <img src={iconPen} alt="icon pen"/>
                    </button>
                    <button className="btn_del">
                        <img src={iconDelete} alt="icon delete"/>
                    </button>
                    </div>
                </div>
                }
            </div>
        );
    }
}
export default List;

// {/* <input className={isValid?”non-valid-class”:”valid-class”} …>
// {isValid && <input className=”non-valid-class”…>}
// {!isValid && <input className=”valid-class”…>} 
// {`${class}`}
// {`${class} class2`}*/}