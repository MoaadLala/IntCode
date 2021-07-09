import { useState, useEffect } from 'react';
import db from '../firbase/firbase';
import MainSection from '../MainSection/MainSection';
import InfoCard from '../InfoCard/InfoCard';
import cover from '../../assets/CryptogrsphyCover.png';

export default function CryptoGraphy(props) {
    const [CryptoGraphyCourses, setCryptoGraphyCourses] = useState([]);
    const ref = db.collection('cryptoGraphy');
    function getCryptoGraphyCourses() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setCryptoGraphyCourses(items);
        });
    }
    useEffect(() => {
        getCryptoGraphyCourses();
    }, []);
    return (
        <div className="Algorithms">
            <MainSection backgroundImage={cover} upperText={<div><h1 className="trumbo" style={{fontSize: 60}}>IntCode Presents</h1><br /><h2 style={{fontSize: 30, margin: 5}}>Design Patterns Crash Course</h2><br /></div>}/>
            <div className="algorithmsCourses">
                <h1>Crypto Graphy Courses</h1><br />
                <div className="thinCards">
                {CryptoGraphyCourses.map(structure => {
                    return (<InfoCard name={structure.name} image={structure.imageLink} />)
                })}
                </div>
            </div>
        </div>
    )
}
