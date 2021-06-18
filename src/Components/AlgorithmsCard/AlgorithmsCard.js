import './AlgorithmsCard.css';

export default function AlgorithmsCard(props) {
    return (
        <div className="algorithmsCard">
            <img src={props.image} />
            <div className="cardText">
                <h1 id="name">{props.name}</h1>
                <p id="description">{props.description}</p>
            </div>
        </div>
    )
}