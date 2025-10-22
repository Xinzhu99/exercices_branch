import icon from "../assets/heart.svg"

export function Content() {
    return (
    <>
        <div className="Contentcard">Content
            <div className="favoriteWrapper">
                <button>
                    <img src={icon} />
                </button>
            </div>
        </div>
    </>
    )
}