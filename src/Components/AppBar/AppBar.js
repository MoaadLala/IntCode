import { Link } from 'react-router-dom';
import './AppBar.css';

export default function AppBar() {
    return (
        <div className="AppBar">
            <nav>
            <h2 className="brand"><Link to="/">IntCode</Link></h2>
                <div className="right-aligned">
                    <Link to="/courses">courses</Link>
                    <Link to="/contact">contact us</Link>
                    <Link to="/purchase">purchase</Link>
                    <Link to="/login" id="logIn">Log In</Link>
                </div>
                <div className="ham-menu">
                    <button onClick={showMenu} id="open-ham-menu">
                        <div className="open-menu-bar"></div>
                        <div className="open-menu-bar"></div>
                        <div className="open-menu-bar"></div>
                    </button>
                    <button onClick={hideMenu} id="close-ham-menu">
                        X
                    </button>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/courses">courses</Link></li>
                        <li><Link to="/contact">contact us</Link></li>
                        <li><Link to="/purchase">purchase</Link></li>
                        <li><Link to="/login">Log In</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

function showMenu() {
    let menu = document.querySelector('.menu');
    let openButton = document.getElementById('open-ham-menu');
    let closeButton = document.getElementById('close-ham-menu');
    menu.style.display = 'flex';
    openButton.style.display = 'none';
    closeButton.style.display = 'block';
}

function hideMenu() {
    let menu = document.querySelector('.menu');
    let openButton = document.getElementById('open-ham-menu');
    let closeButton = document.getElementById('close-ham-menu');
    menu.style.display = 'none';
    openButton.style.display = 'block';
    closeButton.style.display = 'none';
}