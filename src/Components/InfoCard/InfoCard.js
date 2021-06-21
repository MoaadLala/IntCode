import './InfoCard.css';

export default function InfoCard(props) {
    return (
        <div className="InfoCard">
            <img src={props.image} />
            <div className="cardText">
                <h1 id="name">{props.name}</h1>
                <p id="description">{props.description}</p>
            </div>
        </div>
    )
}