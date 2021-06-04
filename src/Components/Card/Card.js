import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.Image} />
            <p>{props.Bio}</p>
        </div>
    )
}