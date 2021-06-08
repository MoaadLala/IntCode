import './Courses.css';
import Card from '../Card/Card';
import algorithms from '../../assets/algorithmesCoursePhoto.png';
import bitwiseOperations from '../../assets/BitwiseOperationsCoursePhoto.png';
import cryptography from '../../assets/CryptographyCoursePhoto.png';
import dataStructures from '../../assets/DataStructuresCoursePhoto.png';
import designPatterns from '../../assets/designPatternsCoursePhoto.png';
import git from '../../assets/GitCoursePhoto.png';
import python from '../../assets/pythonCoursePhoto.png';
import regularExpressions from '../../assets/regularExpressionsCoursePhoto.png';
import sql from '../../assets/SQLCoursePhoto.png';

export default function Courses() {
    return (
        <div className="courses">
            <h1> Courses Available </h1> <br />
            <div className="cards-grid-container">
                <div className="card-container"><Card Image={algorithms} Bio="Algorithmes are the most important part of coding interviews. Make sure you know them well."/></div>
                <div className="card-container"><Card Image={dataStructures} Bio="Data structures provides the right way to organize information in the digital space. Learn them with us."/></div>
                <div className="card-container"><Card Image={designPatterns} Bio="Design patterns are best practices that the programmer can use to solve common problems. You can learn to design patterns here."/></div>
                <div className="card-container"><Card Image={sql} Bio="Structured Query Language (SQL) is the standard and most widely used programming language for relational databases. It is used to manage and organize data in all sorts of systems."/></div>
                <div className="card-container"><Card Image={python} Bio="The python language is on of the most useful programming languages available because it has simplified syntax (not very complicated)."/></div>
                <div className="card-container"><Card Image={regularExpressions} Bio="regular expressions are particularly useful for defining filters. Regular expressions contain a series of characters that define a pattern of text to be matched."/></div>
                <div className="card-container"><Card Image={git} Bio="One of the biggest advantages of git is it's branching capabilities. Unlike centralized version control systems, Git branches are cheap and easy to merge."/></div>
                <div className="card-container"><Card Image={cryptography} Bio="Cryptography is used in many applications like banking transactions cards, computer passwords, transactions. Three types of cryptographic techniques used in general."/></div>
                <div className="card-container"><Card Image={bitwiseOperations} Bio="Bitwise operators are used to change individual bits in an operand. A single byte of computer memory-when viewed as 8 bits. Learn them with us."/></div>
            </div>
        </div>
    )
}