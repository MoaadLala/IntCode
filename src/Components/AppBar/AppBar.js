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
                    <div id="logIn" onClick={showLogIn}>Log In</div>
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
                        <li><div id="logIn" onClick={showLogIn}>Log In</div></li>
                    </ul>
                </div>
            </nav>
            <div className="logInBackground">
                <div className="logInSection">
                    <div className="yellowSection">
                        <span onClick={hideLogIn}>X</span>
                    </div>
                    <h2>Login to</h2><br />
                    <h1>IntCode</h1>
                </div>
            </div>
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

function showLogIn() {
    document.querySelector('.logInBackground').style.display = 'flex';
    document.querySelector('.logInSection').style.display = 'block';
}

function hideLogIn() {
    document.querySelector('.logInSection').style.display = 'none';
    document.querySelector('.logInBackground').style.display = 'none';
}