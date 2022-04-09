import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SkillsCard(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="skills__container--card">
            <div className="container--card card-left">
                <h3 data-aos="fade-right" data-aos-duration="800">{props.data.titleL}</h3>
                <p data-aos="fade-right" data-aos-duration="800">{props.data.descriptionL}</p>
            </div>
            <div className="container--space"></div>
            <div className="container--card card-right">
                <h3 data-aos="fade-left" data-aos-duration="800">{props.data.titleR}</h3>
                <p data-aos="fade-left" data-aos-duration="800">{props.data.descriptionR}</p>            
            </div>
        </div>
    ) 
}