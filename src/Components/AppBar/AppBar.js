import { Link } from 'react-router-dom';
import { useState } from 'react';
import './AppBar.css';
//images:
import python from '../../assets/python.png';
import algorithms from '../../assets/algorithms.png';
import bitwiseOperations from '../../assets/bitwiseOperations.jpg';
import dataStructure from '../../assets/datastructure.png';
import designPatterns from '../../assets/designPatterns.png';
import sql from '../../assets/sql.png';
import cryptography from '../../assets/cryptography.png';
import regularExpression from '../../assets/regularExpression.png';
import git from '../../assets/git.png';


export default function AppBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <div className="AppBar">
            <nav>
            <h2 className="brand"><Link to="/">IntCode</Link></h2>
                <div className="right-aligned">
                    <Link to="#" id="courses">
                        courses
                        <div className="coursesDropdown">
                                <a href="#"><img src={python}/>Python</a>
                                <Link to="/algorithms"><img src={algorithms} />Algorithms</Link>
                                <Link to="/dataStructures"><img src={dataStructure} />Data Structures</Link>
                                <a href="#"><img src={designPatterns} />Design Patterns</a>
                                <a href="#"><img src={sql} />SQL</a>
                                <a href="#"><img src={cryptography} />Cryptography</a>
                                <a href="#"><img src={bitwiseOperations} />Bitwise operations</a>
                                <a href="#"><img src={regularExpression} />Regular Expressions</a>
                                <a href="#"><img src={git} />Git</a>
                        </div>
                    </Link>
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
                        <li><div className="coursesDropdownButton">
                            <span onClick={() => {
                            if (isDropdownOpen) {
                                document.querySelector('.mobile-courses-dropdown').style.display = 'none';
                                document.getElementById('arrowIcon').classList.remove('up');
                                document.getElementById('arrowIcon').classList.add('down');
                                setIsDropdownOpen(false);
                            } else {
                                document.querySelector('.mobile-courses-dropdown').style.display = 'block';
                                setIsDropdownOpen(true);
                                document.getElementById('arrowIcon').classList.add('up');
                                document.getElementById('arrowIcon').classList.remove('down');
                            }
                        }}>courses <i class="arrow down" id="arrowIcon"></i></span>
                            <div className="mobile-courses-dropdown">
                                <a href="#">Python</a>
                                <Link to="/algorithms">Algorithms</Link>
                                <Link to="/dataStructures">Data Structures</Link>
                                <a href="#">Design Patterns</a>
                                <a href="#">SQL</a>
                                <a href="#">Cryptography</a>
                                <a href="#">Bitwise operations</a>
                                <a href="#">Regular Expressions</a>
                                <a href="#">Git</a>
                            </div>
                        </div></li>
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