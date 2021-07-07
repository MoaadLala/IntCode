import './Main.css';
import AppBar from '../AppBar/AppBar';
import Courses from '../Courses/Courses';
import homeScreenCover from '../../assets/homeScreenCover.png';
import { Link } from 'react-router-dom';
import MainSection from '../MainSection/MainSection';

export default function Main() {
    return (
        <div className="main">
            <MainSection backgroundImage={homeScreenCover} upperText={<div><h1 className="trumbo">High Quality Coding <br /> Courses</h1><br />
                <h2>Python | Algorithmes | Data Structure | Cryptography <br /> Bitwise Operations | Regulat expressions <br /> SQL | Quizs</h2><br /></div>}/>
            <Courses />
        </div>
    )
}