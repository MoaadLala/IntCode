import './MainSection.css';
import { Link } from 'react-router-dom';

export default function MainSection(props) {
    return (
        <div className="MainSection" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <span id="upperText">{props.upperText}</span>
            <p>Get Your IntCode Access Now</p><br />
            <Link to="/purchase"><button>Purchase</button></Link>
        </div>
    )
}