import './Main.css';
import AppBar from '../AppBar/AppBar';
import Courses from '../Courses/Courses';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className="main">
            <AppBar />
            <div className="MainSection">
                <h1 className="trumbo">High Quality Coding <br /> Courses</h1><br />
                <h2>Python | Algorithmes | Data Structure | Cryptography <br /> Bitwise Operations | Regulat expressions <br /> SQL | Quizs</h2><br />
                <p>Get Your IntCode Access Now</p><br />
                <Link to="/purchase"><button>Purchase</button></Link>
            </div>
            <Courses />
        </div>
    )
}