import React, { useState } from 'react';
import CardBox from './CardBox';
import Card from '../Card/index';
import words from '../../data';

export default function CardSlider(props) {
    const [currentItem, setPosition] = useState(0);

    const showNext = () => {
        setPosition(currentItem + 1);
    }

    const showPrev = () => {
        if (currentItem > 0)
        setPosition(currentItem - 1);
    }

    if (currentItem >= words.length) {
        return (<div>finish</div>)
    } else {
    return (
        <CardBox
        showPrev={showPrev}
        showNext={showNext}
        number={currentItem + 1}
        total={words.length}
        children={
            <Card
                english={words[currentItem].english}
                transcription={words[currentItem].transcription}
                russian={words[currentItem].russian}
                tags={words[currentItem].tags}
            />}
        />
    )}
}