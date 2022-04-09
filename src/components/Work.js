import React, {useEffect} from "react";
import data from "../info/data.json"
import Cards from "./Cards";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Work() {

    const cards = data.map((x) => {
        return (
            <Cards data={x} key={x.id}/>
        )
    })

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="work" id="work">
            <h2 data-aos="fade-right" data-aos-duration="800">work.</h2>
            <h3 data-aos="fade-right" data-aos-duration="800">I am someone who is mature, candid and who has integrity.  Everyday I work to improve myself 
                and my skills which is part of maturing and becoming better at what I do.<br/>
                I seek to work for a successful company that has strong leadership and vision and who recognizes 
                and rewards performers.
            </h3>
            {cards}
        </div>
    )
}