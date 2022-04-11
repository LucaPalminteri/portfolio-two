import React, {useState, useEffect, useRef} from "react";
import { HashLink } from 'react-router-hash-link'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import resume from '../info/LUCA-PALMINTERI-EN_CV.pdf'
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../images/luca-five.png"

export default function Home() {

    const [width,setWidth] = useState(window.innerWidth);
    const [isBtnOn,setIsBtnOn] = useState(false) 

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(()=>{
        function handleResize() {setWidth(window.innerWidth)}
        window.addEventListener('resize', handleResize)
    })

    function toggle() {
        setIsBtnOn((prevState) => !prevState);
    }

    return (
        <div className="home">
            <nav className="home__navbar">
                <h2 data-aos="fade-down" data-aos-duration="800" data-aos-delay="0">Luca Palminteri</h2>
                {width>1200 &&
                <>
                <nav>
                    <ul className="navbar--menu">
                        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">
                        <HashLink to='#work'> work</HashLink></li>
                        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
                        <HashLink to='#skills'> skills</HashLink></li>
                        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="300">
                        <HashLink to='#contact'> contact</HashLink></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="navbar--social">
                        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
                            <a  href="https://www.linkedin.com/in/luca-palminteri/?locale=en_US" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a></li>
                        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="500"> 
                            <a href="https://github.com/LucaPalminteri" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub}/></a></li>
                        <li data-aos="fade-down" data-aos-duration="800" data-aos-delay="600">
                            <a href="mailto:lucapalminteri02@gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a></li>
                    </ul>
                </nav></>}
                {width<1200 && <button onClick={toggle} data-aos="fade-down" data-aos-duration="800" data-aos-delay="100" className="navbar--btn">☰</button>}
            </nav>
            {
            isBtnOn && 
            <div className="menu-btn" data-aos="fade-down" data-aos-duration="200">
                <nav>
                    <ul className={"menu-btn__navbar"}>
                        <li><HashLink onClick={toggle} to='#work'> work</HashLink></li>
                        <li><HashLink onClick={toggle} to='#skills'> skills</HashLink></li>
                        <li><HashLink onClick={toggle} to='#contact'> contact</HashLink></li>
                        <li>
                            <div className="menu-btn__navbar--social">
                                <><a onClick={toggle} href="https://www.linkedin.com/in/luca-palminteri/?locale=en_US" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a></>
                                <><a onClick={toggle} href="https://github.com/LucaPalminteri" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub}/></a></>
                                <><a onClick={toggle} href="mailto:lucapalminteri02@gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={faEnvelope}/></a></>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            }
            <div className="home__container">
                <div className="home__info">
                    <h2 data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">Hello, I'm </h2>
                    <h1 data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">LUCA PALMINTERI</h1>
                    {width > 1200 ?
                        <h2 data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">FRONTEND DEVELOPER.</h2>
                    :
                        <h2 className="right">FRONTEND DEVELOPER.</h2>
                    }
                    {width > 1200 ? 
                    <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="700" className="btn-container">
                        <a href="#contact"><button className="btn">Contact</button></a>
                        <a href={resume} download="CV-Palminteri-Luca-Frontend-Developer"><button className="btn">Resume</button></a>
                    </div>
                    :
                    <div className="btn-container slide-up">
                        <a href="#contact"><button className="btn">Contact</button></a>
                        <a href={resume} download="CV-Palminteri-Luca-Frontend-Developer"><button className="btn">Resume</button></a>
                    </div>
                }
                </div>
                
                <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="600" className="home__img">
                    <img src={img}/>
                </div>
            </div>

        </div>
    )
}