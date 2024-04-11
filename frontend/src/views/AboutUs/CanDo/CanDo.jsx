import React from "react";
import "./CanDo.scss";
import pacman from '@assets/pacman.svg';
import group from '@assets/group.svg';
import load from '@assets/load-icon.svg';
import star from '@assets/decorate-star.svg';

const CanDo = () => {
    return (
        <section className="can-do">
            <div className="can-do__play">
                <img 
                    src={pacman}
                    alt="Pacman icon"
                    className="can-do__pacman"
                />
                <p className="can-do__play-text">
                    Играй в уникальные 
                    игры первым
                </p>
            </div>
            
            <div className="can-do__load-games">
                <img
                    src={load}
                    alt="Load icon"
                    className="can-do__load-icon"
                />
                <p className="can-do__load-text">
                    Загружай свои игры,  и делай
                    свой вклад в мир гейминга
                </p>
            </div>

            <div className="can-do__search-friends">
                <img
                    src={group}
                    alt="Group icon"
                    className="can-do__group"
                />
                <p className="can-do__group-text">
                    Находи друзей и общайся 
                    с единомышленниками
                </p>
            </div>
            
            <div className="can-do__search-team">
                <img 
                    src={star} 
                    alt="Decorate star" 
                    className="can-do__star"
                />
                <p className="can-do__star-text">
                    Найди талантливых соавторов или 
                    команду для своего проекта
                </p>
            </div>
        </section>
    )
}

export default CanDo;