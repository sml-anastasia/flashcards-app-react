import React from 'react';
import iconSave from "./assets/icon-save.svg";
import iconAdd from "./assets/icon-add.svg";
import iconPen from "./assets/icon-pen.svg";
import iconDelete from "./assets/icon-delete.svg";

function AddWordForm(props) {
    return (
        <div className="word-info">
            <span>{props.id}</span>
            <span><input className="word-english" value={props.english} placeholder="enter word"/></span>
            <span><input className="word-transcription" value={props.transcription} placeholder="enter transcription"/></span>
            <span><input className="word-russian" value={props.russian} placeholder="enter translate"/></span>
            <span><input className="word-tags" value={props.tags} placeholder="enter tags"/></span>
        </div>
    );
}

function WordItem(props) {
    return (
        <div className="word-info">
            <span>{props.id}</span>
            <span>{props.english}</span>
            <span>{props.transcription}</span>
            <span>{props.russian}</span>
            <span>{props.tags}</span>
        </div>
    );
}

export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    }

    handleChange = () => {
        this.setState(
            {
                pressed: !this.state.pressed
            }
        );
    }
    render() {
        const {id, english, transcription, russian, tags} = this.props;
        return(
            <div>
            {this.state.pressed ?
                <div className="line">
                    <AddWordForm id={id} english={english} transcription={transcription} russian={russian} tags={tags}></AddWordForm>
                    <div className="btn-box">
                    <button className="btn_add">
                        <img src={iconSave} alt="icon save"/>
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