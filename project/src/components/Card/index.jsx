import React from 'react';
import WordInfo from './WordInfo';
import ShowWord from './ShowWord';
export default class Card extends React.Component {
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
        const {transcription, russian, tags, english} = this.props;
        return(
            <div className="card">
                <div className="card-word">{english}</div>
                {this.state.pressed ? (
                    <WordInfo transcription={transcription} russian={russian} tags={tags}></WordInfo>
                ) : (
                    <ShowWord show={this.handleChange}></ShowWord>
                )}
            </div>
        );
    }}