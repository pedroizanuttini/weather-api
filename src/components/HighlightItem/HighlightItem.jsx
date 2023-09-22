
import "./HighlightItem.css";
import HighlightsItemContainer from "../HighlightsItemContainer/HighlightsItemContainer";

const HighlightItem = ({title, value,unit }) => {
    return (
        <div>
            <article className="info-card">
                <p className="info-card__title">{title}</p>
                <h1 className="info-card__value">{value} {unit}</h1>   
            </article>
        </div>
    )
}

export default HighlightItem;