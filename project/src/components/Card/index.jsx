import React from 'react';
import WordInfo from './WordInfo';
import ShowWord from './ShowWord';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-word">{props.english}</div>
            {props.pressed ? (
                <WordInfo transcription={props.transcription} russian={props.russian} tags={props.tags}></WordInfo>
                    ) : (
                <ShowWord show={props.handleChange}></ShowWord>
            )}
        </div>
    );
}

export default Card;

// export default class Card extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pressed: false
//         };
//     }

//     handleChange = () => {
//         this.setState(
//             {
//                 pressed: !this.state.pressed
//             }
//         );
//     }
//     render() {
//         const {transcription, russian, tags, english, id} = this.props;
//         return(
//             <div className="card">
//                 <div className="card-word">{english}</div>
//                 {this.state.pressed ? (
//                     <WordInfo transcription={transcription} russian={russian} tags={tags} id={id}></WordInfo>
//                 ) : (
//                     <ShowWord show={this.handleChange}></ShowWord>
//                 )}
//             </div>
//         );
//     }}