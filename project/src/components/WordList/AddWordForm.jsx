export default function AddWordForm(props) {
    return (
        <div className="word-info">
            <span>{props.id}</span>
            <span>
                <input
                name='english'
                className={`word-input ${props.isValidClass ? '' : 'word-list__error-input'}`}
                value={props.english}
                onChange={props.checkInput}
                placeholder="enter word"/>
            </span>
            <span>
                <input 
                name='transcription' 
                className={`word-input ${props.isValidClass ? '' : 'word-list__error-input'}`} 
                value={props.transcription} 
                onChange={props.checkInput} 
                placeholder="enter transcription"/>
            </span>
            <span>
                <input 
                name='russian' 
                className={`word-input ${props.isValidClass ? '' : 'word-list__error-input'}`} 
                value={props.russian} 
                onChange={props.checkInput} 
                placeholder="enter translate"/>
            </span>
            <span>
                <input 
                name='tags' 
                className={`word-input ${props.isValidClass ? '' : 'word-list__error-input'}`} 
                value={props.tags} 
                onChange={props.checkInput} 
                placeholder="enter tags"/>
            </span>
        </div>
    );
}