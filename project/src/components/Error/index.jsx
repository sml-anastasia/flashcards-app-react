import error from "./assets/error.svg";

function Error(props) {
    return(
        <div className="api-error">
            <p className="api-error__message">error</p>
            <img src={error} alt="404" className="api-error__error" />
        </div>
    )
}

export default Error;