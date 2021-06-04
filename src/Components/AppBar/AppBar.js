import './AppBar.css';

export default function AppBar() {
    return (
        <div className="AppBar">
            <nav>
                <h2 className="brand">IntCode</h2>
                <div className="right-aligned">
                    <a href="#">courses</a>
                    <a href="#">contact us</a>
                    <a href="#">purchase</a>
                    <a href="#">Log In</a>
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
                        <li><a href="#">courses</a></li>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">purchase</a></li>
                        <li><a href="#">Log In</a></li>
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