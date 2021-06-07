export default function WordItem(props) {
    return (
        <div className="word-info">
            <span>{props.id}</span>
            <span>{props.english}</span>
            <span>{props.transcription}</span>
            <span>{props.russian}</span>
            <span>{props.tags}</span>
        </div>
    );
}