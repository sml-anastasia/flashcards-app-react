import leftArrow from './assets/left-arrow.png';
import rightArrow from './assets/right-arrow.png';

export default function CardBox(props) {
    return (
        <div className="card-slider">
            <img
            className="left-arrow"
            src={leftArrow}
            alt="left-arrow"
            onClick={props.showPrev} />
            <div>
                <div>{props.children}</div>
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
