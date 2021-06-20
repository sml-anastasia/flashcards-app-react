import React from 'react';
import CardItem from '../Card/CardItem';
import words from '../../data';

export default function CardList(props) {
    return(
        <section className="card-box">
            {
            words.map((word) => <CardItem key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isSelected={word.isSelected}></CardItem>)
            }
        </section>
    );
}