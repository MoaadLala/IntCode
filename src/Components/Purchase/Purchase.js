import AppBar from '../AppBar/AppBar';
import './Purchase.css';

export default function Purchase() {
    return (
        <div className="Purchase">
            <div className="PurchaseSection">
                <h1>Get Full Access</h1>
                <p>Get Lifetime Access To Every Course</p>
                <div className="PurchaseCard">
                    <h1>Most Popular</h1>
                    <div className="PurchaseCardDetails">
                        <h2>Save 40%</h2>
                        <h1>$49.99</h1>
                        <ul>
                            <li><span className="blueText">Access</span> To <strong>EVERY </strong>Course</li>
                            <li><span className="blueText">Access</span> To Private Discord Server</li>
                            <li><span className="blueText">Access</span> To Quizes</li>
                            <li><span className="blueText">Access</span> To Private Facebook Group</li>
                            <li><span className="blueText">Future: Access</span> To Coding Interview <br /> Questions</li>                            
                        </ul>
                        <button>Get Access</button>
                    </div>
                </div>
            </div>
        </div>
    )
}