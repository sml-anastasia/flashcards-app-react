import React from 'react';
import AddWordForm from './AddWordForm';
import WordItem from './WordItem';
import iconSave from "./assets/icon-save.svg";
import iconAdd from "./assets/icon-add.svg";
import iconPen from "./assets/icon-pen.svg";
import iconDelete from "./assets/icon-delete.svg";
export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            english: '',
            transcription: '',
            russian: '',
            tags: '',
            isValid: true
        };
    }

    handleChange = () => {
        this.setState(
            {
                pressed: !this.state.pressed
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
            this.setState({isValid: true})
        }
    }

    render() {
        const {id, english, transcription, russian, tags} = this.props;
        return(
            <div>
            {!this.state.isValid && <div className="word-list__error-message">заполните поля</div>}
                
            {this.state.pressed ?
                <div className="line">
                    <AddWordForm id={id} english={this.state.english} transcription={this.state.transcription} russian={this.state.russian} tags={this.state.tags} checkInput={this.handleChangeInput}></AddWordForm>
                    <div className="btn-box">
                    <button className="btn_add">
                        <img src={iconSave} alt="icon save" onClick={this.saveChanges}/>
                    </button>
                    <button className="btn_close" onClick={this.handleChange}>
                        <img src={iconAdd} alt="icon add"/>
                    </button>
                    <button className="btn_del">
                        <img src={iconDelete} alt="icon delete"/>
                    </button>
                    </div>
                </div>
                :
                <div className="line">
                    <WordItem id={id} english={english} transcription={transcription} russian={russian} tags={tags}></WordItem>
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