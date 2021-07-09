import { useState, useEffect } from 'react';
import db from '../firbase/firbase';
import MainSection from '../MainSection/MainSection';
import InfoCard from '../InfoCard/InfoCard';
// import cover from '../../assets/gitCover.png';

export default function RegularExpression(props) {
    const [regularExpressionCourses, setRegularExpressionCourses] = useState([]);
    const ref = db.collection('regularExperission');
    function getRegularExpressionCourses() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setRegularExpressionCourses(items);
        });
    }
    useEffect(() => {
        getRegularExpressionCourses();
    }, []);
    return (
        <div className="Algorithms">
            <MainSection backgroundImage={""} upperText={<div><h1 className="trumbo" style={{fontSize: 60}}>IntCode Presents</h1><br /><h2 style={{fontSize: 30, margin: 5}}>Design Patterns Crash Course</h2><br /></div>}/>
            <div className="algorithmsCourses">
                <h1>Regular Expression Courses</h1><br />
                <div className="thinCards">
                {regularExpressionCourses.map(structure => {
                    return (<InfoCard name={structure.name} image={structure.imageLink} />)
                })}
                </div>
            </div>
        </div>
    )
}
