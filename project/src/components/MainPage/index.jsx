import React from 'react';
import WordList from '../WordList/index';
import NewWordForm from '../NewWordForm/index';
// import {observer, inject} from "mobx-react";
import words from '../../data';

export default class MainPage extends React.Component{
    render() {
        return(
        <div className="words-list">
            <NewWordForm/>
            <h2 className="words-list_item">Все слова</h2>
            {
            words.map((word) => <WordList id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected} />)
            }
        </div>
        )
    }
}