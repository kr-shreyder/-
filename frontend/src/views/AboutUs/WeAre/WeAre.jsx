import React from "react";
import './WeAre.scss';
import weAre1 from "@assets/ability2.png";
import weAre2 from "@assets/avatar3.png";
import weAre3 from "@assets/avatar2.png";
import weAre4 from "@assets/we-are-team-photo.png";

const WeAre = () => {
    return (
        <section className="we-are">
            <div className="we-are__left-side-images">
                <img 
                    src={weAre1} 
                    alt="Team photo" 
                    className="we-are__top-left-image"/>
                <img 
                    src={weAre2}
                    alt="Avatar"
                    className="we-are__bottom-left-image"
                />
            </div>
            <p className="we-are__text">
                Мы - команда студентов Политехнического университета, и мы 
                рады приветствовать вас на нашем игровом портале PolyGames. 
                Это место, где вы можете открыть для себя удивительные игры, 
                созданные нашими талантливыми разработчиками.
            </p>
            <div>
                <img
                    src={weAre3}
                    alt="Avatar"
                    className="we-are__top-right-image"
                />
                <img
                    src={weAre4}
                    alt="Team photo"
                    className="we-are__bottom-right-image"
                />
            </div>
            
        </section>
    )
}

export default WeAre;