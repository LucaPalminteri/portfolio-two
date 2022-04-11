import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faRightLong, faLeftLong} from '@fortawesome/free-solid-svg-icons'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cards(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    function transitionTime(e) {
        e.target.style.transition = ".4s"; 
    }

    return (
        <div className="work__cards-container">
            {props.data.id % 2 === 0 ? 
            <>
                <div className="cards-container__info right">
                    <h3 data-aos="fade-right" data-aos-duration="800">{props.data.title}</h3>
                    <p data-aos="fade-right" data-aos-duration="800">{props.data.description}</p>
                    <div data-aos="fade-right" data-aos-duration="800" className="link" onMouseOver={transitionTime}>
                        <i><FontAwesomeIcon className="icon" icon={faLeftLong}/></i>
                        <a href={props.data.link} target="_blank">View project</a>
                    </div>
                </div>
                <div className="cards-container__img left">
                <video data-aos="fade-left" data-aos-duration="800" 
                width="100%" poster={ props.data.id === 2 ? 
                            require('../images/project-two.png') :
                            require('../images/project-four.png')
                            } muted autoPlay loop>
                        <source src={ props.data.id === 2 ?
                            require('../images/project-two.mp4') :
                            require('../images/project-four.mp4')
                            } type="video/mp4" />
                    </video>
                    
                </div> 
            </> 
            : 
            <>
                <div className="cards-container__img">
                    <video data-aos="fade-right" data-aos-duration="800" 
                    width="100%" poster={ props.data.id === 1 ? 
                        require('../images/project-one.png') :
                        require('../images/project-three.png')
                        } muted autoPlay loop>
                        <source src={ props.data.id === 1 ?
                            require('../images/project-one.mp4') :
                            require('../images/project-three.mp4')
                            } type="video/mp4" />
                    </video>
                </div>  
                <div className="cards-container__info">
                    <h3 data-aos="fade-left" data-aos-duration="800">{props.data.title}</h3>
                    <p data-aos="fade-left" data-aos-duration="800">{props.data.description}</p>
                    <div data-aos="fade-left" data-aos-duration="800" className="link" onMouseOver={transitionTime}>
                    <a href={props.data.link} target="_blank">View project</a>
                        <i><FontAwesomeIcon className="icon" icon={faRightLong}/></i>
                    </div>
                </div>
            </>
            }
        </div>
    )
}