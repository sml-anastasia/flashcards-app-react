import React from 'react';

function WordInfo(props) {
    return (
        <div className="card-content">
            <div className="card-transcr">{props.transcription}</div>
            <div className="card-def">{props.russian}</div>
            <div className="card-category">{props.tags}</div>
        </div>
    );
}

function ShowWord(props) {
    return(
        <button onClick={props.show} className="card-btn">проверить</button>
    );
}
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