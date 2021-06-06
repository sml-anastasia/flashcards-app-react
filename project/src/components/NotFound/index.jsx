import notfound from "./assets/not-found.svg";

function NotFound() {
    return(
        <div className="not-found">
            <p className="not-found__message">Sorry, page not found</p>
            <img src={notfound} alt="404" className="not-found__error" />
        </div>
    )
}

export default NotFound;