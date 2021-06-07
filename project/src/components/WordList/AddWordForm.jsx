export default function AddWordForm(props) {
    return (
        <div className="word-info">
            <span>{props.id}</span>
            <span><input className="word-english" value={props.english} placeholder="enter word"/></span>
            <span><input className="word-transcription" value={props.transcription} placeholder="enter transcription"/></span>
            <span><input className="word-russian" value={props.russian} placeholder="enter translate"/></span>
            <span><input className="word-tags" value={props.tags} placeholder="enter tags"/></span>
        </div>
    );
}