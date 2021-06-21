// import React, { useState } from 'react';
// import CardBox from './CardBox';
// import Card from '../Card/index';
// import useApi from './fetchHook';
// import words from '../../data';

// export default function CardSlider(props) {
//     const [currentItem, setPosition] = useState(0);
//     const [learnedWordsTotal, setLearnedWordsTotal] = useState(0);
//     const [pressed, setPressed] = useState(false);
//     const [{ data, isLoading, isError }, doFetch] = useApi();

//     const handleChange = () => {
//         setPressed(!pressed)
//     }

//     const showNext = () => {
//         setPressed(false);
//         setPosition(currentItem + 1);
//         if(!pressed)
//         setLearnedWordsTotal(learnedWordsTotal + 1);
//     }

//     const showPrev = () => {
//         setPressed(false);
//         if (currentItem > 0)
//         setPosition(currentItem - 1);
//     }

//     if (currentItem >= words.length) {
//         return (
//             <div>
//                 <div>карточки закончились!</div>
//                 <div>Всего изучено слов: {learnedWordsTotal}</div>
//             </div>
//         )
//     } else {
//         return (
//             <CardBox
//             showPrev={showPrev}
//             showNext={showNext}
//             number={currentItem + 1}
//             total={data.length}
//             learned={learnedWordsTotal}
//             children={<Card
//                     pressed={pressed}
//                     show={handleChange}
//                     id={data[currentItem].id}
//                     english={data[currentItem].english}
//                     transcription={data[currentItem].transcription}
//                     russian={data[currentItem].russian}
//                     tags={data[currentItem].tags}/>}>
//             </CardBox>
//         )}
// }