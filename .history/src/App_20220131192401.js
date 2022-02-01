import './App.css';

import { NavLink, Routes, Navigate, Route } from 'react-router-dom';
import EnterTheDesign from './pages/enterDesign';
import CSOne from './pages/csOne';

function App() {
  const flatIconLink = "https://www.flaticon.com/free-icons/programmer";


  return (
    <div className='App'>
      <div className="containerOne">
        <nav className='navigation'>
          <ul>
            <li>
              <NavLink activeClassName='' to="/cs-one">One Case Study</NavLink>
            </li>
            <li>
              <NavLink activeClassName='' to="/cs-two">Case 2 Study</NavLink>
            </li>
            <li>
              <NavLink activeClassName='' to="/cs-three">Case Study the III</NavLink>
            </li>
            <li>
              <NavLink activeClassName='' to="/cs-three">Case Study the III</NavLink>
            </li>
          </ul>
        </nav>
        <main className='mainOne'>
          <Routes>
            <Route exact path="/" ><Navigate to="/enter-the-design" /></Route>
            <Route path="/enter-the-design" ><EnterTheDesign /></Route>
            <Route exact path="/cs-one" ><CSOne /></Route>
          </Routes>
          {/*<div className='firstRow'>
            <div className="width-60">
              <p className='fr-info'>NIRANJAN G P, IS A UI DEVELOPER AT DELOITTE USI</p>
            </div>
            <div className="width-40 img-block">
              <img src={avatarIcon} alt="avatar-icon" className='avtr-img' />
            </div>
          </div>
          <div className='sec-row'>
            <p>Hi, this is Niranjan.</p>
            <p>I Joined Deloitte USI as a campus recruit. Since then I've been part of many innovative and high-intensity projects, coordinating between multiple virtual teams to help complete client deliverables.</p>
            <p>I've been part of the FRONT-END community since 2017 and constantly learning and developing UI and gradually having a go at UX design parallely.</p>
            <p>Currently based in Bengaluru, I have a big love for travel and adventure, also keeping in mind to do my bit to conserve the environment.</p>
            <p>Thanks for stopping by.</p>
          </div>*/}

        </main>
        <footer>
          <div className='footer-info'>
            <p>Niranjan G P</p>
            <p>Design & Develop</p>
            <p>Please consider the Environment while printing.</p>
          </div>
          <div>
            <a href={flatIconLink} title="programmer icons">Programmer icons created by Flat Icons - Flaticon</a>
            {/*<a target="_blank" rel="noopener noreferrer" href={avatarLink}>Avatar</a> icon by <a target="_blank" rel="noopener noreferrer" href={icon8link}>Icons8</a>*/}
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
