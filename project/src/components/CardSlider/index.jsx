import React, { useState} from 'react';
import Card from '../Card/index';
import leftArrow from './assets/left-arrow.png';
import rightArrow from './assets/right-arrow.png';
import words from '../../data';

const CardBox = (props) => {
    return (
        <div className="card-slider">
            <img
            className="left-arrow"
            src={leftArrow}
            alt="left-arrow"
            onClick={props.showPrev} />
            <div>
                {props.children}
                <p className="card-counter">
                    {props.number} / {props.total}
                </p>
            </div>
            
            <img
            className="right-arrow"
            src={rightArrow}
            alt="right-arrow"
            onClick={props.showNext} />
            
        </div>
    )
}

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
        children={Card}>
        </CardBox>
    )}
}