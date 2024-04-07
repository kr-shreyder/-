import React from "react";
import logo from "@assets/logo.svg";
import preview from "@assets/about-us-hero.png";
import "./Preview.scss";

const Preview = () => {
    return (
        <section className="preview">
            <div className="preview__left-side">
                <img
                    src={logo}
                    alt="PolyGames Logo Image"
                    className="preview__logo"
                />
                <p className="preview__text">PolyGames- уникальная платформа для игроков и разработчиков.</p>
            </div>
            <img 
                src={preview}
                alt="Photo for Preview card"
                className="preview__photo"
            />
        </section>
    )
}

export default Preview;