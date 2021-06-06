export default function WordInfo(props) {
    return (
        <div className="card-content">
            <div className="card-transcr">{props.transcription}</div>
            <div className="card-def">{props.russian}</div>
            <div className="card-category">{props.tags}</div>
        </div>
    );
}