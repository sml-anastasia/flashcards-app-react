import React from 'react';
import AddWordForm from './AddWordForm';
import WordItem from './WordItem';
import iconSave from "../../assets/images/icon-save.svg";
import iconAdd from "../../assets/images/icon-add.svg";
import iconPen from "../../assets/images/icon-pen.svg";
import iconDelete from "../../assets/images/icon-delete.svg";
export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            isValid: true,
            id: props.id,
            english: props.english,
            transcription: props.transcription,
            russian: props.russian,
            tags: props.tags
        };
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
        const requestOptions = {
            method: 'POST',
            body: {
                english: this.state.english,
                russian: this.state.russian,
                transcription: this.state.transcription,
                tags: this.state.tags
                }
            };
            if (this.state.english.length === 0 || this.state.russian.length === 0 || this.state.transcription.length === 0 || this.state.tags.length === 0) {
                this.setState({isValid: false});
            } else {
                this.setState({pressed: false});
            }
            fetch(`/api/words/${this.id}/update`, requestOptions)
            .then(response => {
            if (response.ok) {
                    response.json();
                } else {
                throw new Error('Something went wrong ...');
            }})
    }


    deleteWord = () => {
        const requestOptions = {
            method: 'POST',
            body: {
                id: this.state.id
                }
            };
        fetch(`/api/words/${this.state.id}/delete`, requestOptions)
        .then(response => {
            if (response.ok) {
                response.json();
            } else {
                throw new Error('Something went wrong ...');
            }})
    }

    render() {
        const {id} = this.props;
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
                            <img src={iconDelete} alt="icon delete" onClick={this.deleteWord}/>
                        </button>
                    </div>
                </div>
                :
                <div className="line">
                    <WordItem
                    key={id}
                    id={id}
                    english={this.state.english}
                    transcription={this.state.transcription}
                    russian={this.state.russian}
                    tags={this.state.tags}/>
                    <div className="btn-box">
                    <button className="btn_edit" onClick={this.handleChange}>
                        <img src={iconPen} alt="icon pen"/>
                    </button>
                    <button className="btn_del">
                        <img src={iconDelete} alt="icon delete" onClick={this.deleteWord}/>
                    </button>
                    </div>
                </div>
                }
            </div>
        );
    }
}