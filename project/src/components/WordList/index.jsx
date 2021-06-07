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