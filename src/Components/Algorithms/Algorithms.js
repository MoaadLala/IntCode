import AppBar from '../AppBar/AppBar';
import './Algorithms.css';
import algorithmsCover from '../../assets/algorithmsCover.png'
import MainSection from '../MainSection/MainSection';
import InfoCard from '../InfoCard/InfoCard';
import db from '../firbase/firbase';
import { useEffect, useState } from 'react';

export default function Algorithms() {
    const [courses, setCourses] = useState([]);
    const ref = db.collection('algorithms');
    function getCourses() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setCourses(items);
        });
    }
    useEffect(() => {
        getCourses()
    }, []);
    return (
        <div className="Algorithms">
            <MainSection backgroundImage={algorithmsCover} upperText={<div><h1 className="trumbo" style={{fontSize: 60}}>IntCode Presents</h1><br /><h2 style={{fontSize: 30, margin: 5}}>Algorithms Crash Course</h2><br /></div>}/>
            <div className="algorithmsCourses">
                <h1>Algorithms</h1><br />
                <p>Where algorithms are used in computer science?</p>
                <p>Algorithms are used in every part of computer</p>
                <p>science. They form the field's backbone</p>
                <div className="cards">
                    {courses.map(course => {
                        return (<InfoCard name={course.name} description={course.description} image={course.imageLink} />)
                    })}
                </div>
            </div>
        </div>
    )
}