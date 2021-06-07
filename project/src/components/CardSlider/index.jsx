import React, { useState } from 'react';
import CardBox from './CardBox';
import Card from '../Card/index';
import words from '../../data';

export default function CardSlider(props) {
    const [currentItem, setPosition] = useState(0);
    const [learnedWordsTotal, setLearnedWordsTotal] = useState(0);

    const showNext = () => {
        setPosition(currentItem + 1);
        setLearnedWordsTotal(learnedWordsTotal + 1);
        console.log(learnedWordsTotal);
    }

    const showPrev = () => {
        if (currentItem > 0)
        setPosition(currentItem - 1);
    }

    if (currentItem >= words.length) {
        return (<div>
                <div>карточки закончились!</div>
                <div>Всего изучено слов: {learnedWordsTotal}</div>
            </div>)
    } else {
        return (
            <CardBox
            showPrev={showPrev}
            showNext={showNext}
            number={currentItem + 1}
            total={words.length}
            learned={learnedWordsTotal}
            children={<Card
                    id={words[currentItem].id}
                    english={words[currentItem].english}
                    transcription={words[currentItem].transcription}
                    russian={words[currentItem].russian}
                    tags={words[currentItem].tags}/>}>
            </CardBox>
        )}
}