import React from 'react';
import Card from '../Card/index';
import words from '../../data';

export default function CardList(props) {
    return(
        <section className="card-box">
            {
            words.map((word) => <Card id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></Card>)
            }
        </section>
    );
}