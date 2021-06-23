import { useState, useEffect } from 'react';
import db from '../firbase/firbase';
import AppBar from '../AppBar/AppBar';
import MainSection from '../MainSection/MainSection';
import InfoCard from '../InfoCard/InfoCard';

export default function DataStructures(props) {
    const [structures, setStructures] = useState([]);
    const ref = db.collection('dataStructures');
    function getstructures() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setStructures(items);
        });
    }
    useEffect(() => {
        getstructures();
    }, []);
    return (
        <div className="Algorithms">
            <AppBar/>
            <MainSection backgroundImage={""} upperText={<div><h1 className="trumbo" style={{fontSize: 60}}>IntCode Presents</h1><br /><h2 style={{fontSize: 30, margin: 5}}>Data Structures Crash Course</h2><br /></div>}/>
            <div className="algorithmsCourses">
                <h1>Data Structures</h1><br />
                <div className="cards">
                    {structures.map(structure => {
                        return (<InfoCard name={structure.name} description={structure.description} image={structure.imageLink} />)
                    })}
                </div>
            </div>
        </div>
    )
}