import './ThinInfoCard.css';

export default function ThinInfoCard(props) {
    return (
        <div className="ThinInfoCard">
            <img src={props.image} />
            <div className="ThinCardText">
                <h1 id="name">{props.name}</h1>
            </div>
        </div>
    )
}