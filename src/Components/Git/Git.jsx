import { useState, useEffect } from 'react';
import db from '../firbase/firbase';
import MainSection from '../MainSection/MainSection';
import InfoCard from '../InfoCard/InfoCard';
import test from 'amend.jpg';

export default function Git(props) {
    const [gitCourses, setGitCourses] = useState([]);
    const ref = db.collection('designPatterns');
    function getGitCourses() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setGitCourses(items);
        });
    }
    useEffect(() => {
        getGitCourses();
    }, []);
    return (
        <div className="Algorithms">
            <MainSection backgroundImage={""} upperText={<div><h1 className="trumbo" style={{fontSize: 60}}>IntCode Presents</h1><br /><h2 style={{fontSize: 30, margin: 5}}>Design Patterns Crash Course</h2><br /></div>}/>
            <div className="algorithmsCourses">
                <h1>Data Structures</h1><br />
                <div className="cards">
                    <div className="thinCard">
                        <img src={test} />
                        <h1>Amend</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
// {designPatterns.map(structure => {
//     return (<InfoCard name={structure.name} description={structure.description} image={structure.imageLink} />)
// })}