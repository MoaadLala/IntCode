import AppBar from '../AppBar/AppBar';
import './Algorithms.css';
import { Link } from 'react-router-dom';
import algorithmsCover from '../../assets/algorithmsCover.png'
import MainSection from '../MainSection/MainSection';

export default function Algorithms() {
    return (
        <div className="Algorithms">
            <AppBar/>
            <MainSection backgroundImage={algorithmsCover} upperText={<div><h1 className="trumbo" style={{fontSize: 60}}>IntCode Presents</h1><br /><h2 style={{fontSize: 30, margin: 5}}>Algorithms Crash Course</h2><br /></div>}/>
        </div>
    )
}