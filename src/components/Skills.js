import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5,faJs,faReact,faSass, faBootstrap, faGitAlt, faCss3, faGithub, faFigma} from "@fortawesome/free-brands-svg-icons";
import SkillsCard from "./SkillsCards";
import skillsData from '../data/skills.json'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {

    const skills = skillsData.map( (x) => {
        return (
            <SkillsCard key={x.id} data={x}/>
        )
    })

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="skills" id="skills">
            <h2 data-aos="fade-right" data-aos-duration="800">skills.</h2>
            <div className="skills__container">
                <div className="skills__container--known">
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="0">
                        <FontAwesomeIcon className="icon" icon={faHtml5}/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="50">
                        <FontAwesomeIcon className="icon" icon={faCss3}/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100">
                        <FontAwesomeIcon className="icon" icon={faJs}/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="150">
                        <FontAwesomeIcon className="icon" icon={faReact}/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                        <FontAwesomeIcon className="icon" icon={faSass}/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="250">
                        <FontAwesomeIcon className="icon" icon={faBootstrap}/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="300">
                        <FontAwesomeIcon className="icon" icon={faGitAlt}/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="350">
                        <FontAwesomeIcon className="icon" icon={faGithub}/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
                        <FontAwesomeIcon className="icon" icon={faFigma}/>
                    </div>
                </div>
            </div>
            {skills}
        </div>
    )
}