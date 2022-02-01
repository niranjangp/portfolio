import React from 'react';
import Icons from '../assets/programmer.png';
import WorkingIcon from '../assets/working.png';
import FoodIcon from '../assets/fruit.png';
import ExpIcon from '../assets/expense.png';
import QuoteIcon from '../assets/quote.png';
import { Link } from 'react-router-dom';


const enterDesign = () => {
    const avatarIcon = Icons;


    return (
        <React.Fragment>
            <div className='firstRow'>
                <div className="width-60">
                    <p className='fr-info'>NIRANJAN G P, IS A UI DEVELOPER AT DELOITTE US INDIA</p>
                </div>
                <div className="width-40 img-block">
                    <img src={avatarIcon} alt="avatar-icon" className='avtr-img' />
                </div>
            </div>
            <div className='sec-row'>
                <p>Hi, this is Niranjan.</p>
                <p>I joined Deloitte as a campus recruit. Since then I've been part of many innovative and high-intensity projects, coordinating between multiple virtual teams to help complete client deliverables.</p>
                <p>I've been part of the FRONT-END community since 2017 and constantly learning and developing UI and gradually having a go at UX design parallely.</p>
                <p>Currently based in Bengaluru, I have a big love for travel and adventure, also keeping in mind to do my bit to conserve the environment.</p>
                <p>Thanks for stopping by.</p>
            </div>
            <div className='third-row'>
                <div className='fullWidth intro-cs'>
                    <p>Time to dive deep into some Case Studies, right.</p>
                    <p>Choose one to enter its world!</p>
                </div>
                <div className='card-box'>
                    <div className="card">
                        <Link to="/portfolio/cs-one">
                            <img src={WorkingIcon} alt="card-icon" className='card-icon' />
                            <p>Mandated Reporter</p>
                            {/*<p>Click to Read More!!!</p>*/}
                        </Link>
                    </div>
                </div>
                <div className='card-box'>
                    <div className="card">
                    <Link to="/portfolio/cs-two">
                        <img src={FoodIcon} alt="card-icon" className='card-icon' />
                        <p>Order Food</p>
                        </Link>
                    </div>
                </div>
                <div className='card-box'>
                    <div className="card" >
                    <Link to="/portfolio/cs-three">
                        <img src={ExpIcon} alt="card-icon" className='card-icon' />
                        <p>Expense Tracker</p>
                        </Link>
                    </div>
                </div>
                <div className='card-box'>
                    <div className="card" >
                    <Link to="/portfolio/cs-four">
                        <img src={QuoteIcon} alt="card-icon" className='card-icon' />
                        <p>If you have a Quote</p>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default enterDesign;
