import React from 'react';
import './AdSlider.scss'
import AdBanner from './AdBanner/AdBanner';
import AdBand from './AdBand/AdBand';
import banner1 from '@assets/ad-banner.png'
import banner2 from '@assets/cover-game8.png'
import banner3 from '@assets/cover-game6.png'
import banner4 from '@assets/cover-game16.png'
import banner5 from '@assets/cover-game17.png'

const game1 = {
    id: 1,
    image: banner1, 
    name: 'Neo_Cat',
    desc: 'Вы кот...НЕО КОТ!!! Вы выбрали красную таблетку и отправляетесь в матрицу, чтобы излечить её от багов. По мере прохождения изучайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!',
    ganre: 'Шутер',
    tags: ['Симуляция','MosPolyJam2023'],
    events: [1,4],
}
const game2 = {
    id: 2,
    image: banner2, 
    name: "Fisher's Treasures",
    desc: 'Рыбалка расслабляет, повышая вашу бдительность и концентрацию. Стань настоящим рыбаком и повышай свой уровень умения ловить рыбу!',
    ganre: 'Симулятор',
    tags: ['MosPolyJam2023'],
    events: [1,4],
}
const game3 = {
    id: 3,
    image: banner3, 
    name: 'Observer',
    desc: 'Система Н.З.О - симуляция для развития ИИ. Образцы не осознают своё пребывание в ней. В одном из секторов произошёл сбой и ваша задача - проконтролировать ситуацию.',
    ganre: 'Шутер',
    tags: ['MosPolyJam2023'],
    events: [2,3],
}
const game4 = {
    id: 4,
    image: banner4, 
    name: 'Emotionary',
    desc: 'Иногда бывает намного легче, если выбор делают за тебя. Ты не знаешь как реагировать на ту или иную ситуацию. А теперь попробуй окунуться в тело другого человека и решить судьбу его жизни. Выбирай эмоции наиболее подходящие под ситуации, если повезет , то пройдешь до конца, если нет пробуй и пробуй заново.',
    ganre: 'Симулятор',
    tags: ['MosPolyJam2023'],
    events: [2,3],
}
const game5 = {
    id: 5,
    image: banner5, 
    name: 'Disappeared in nowhere',
    desc: 'Герой попадает в виртуальную реальность для испытания своих боевых навыков. Райан проходит этап за этапом, как вдруг, в симуляции, в которой он находился, случается заражение вирусом. Герою нужно срочно вернуться в реальный мир, пока вирус полностью не захватил контроль над реальностью, в которой находился Райан.',
    ganre: 'Головоломка',
    tags: ['MosPolyJam2023'],
    events: [1],
}
function AdSlider() {
    return (  
        <section className="ads-slider">
            <AdBanner obj={game1} />
            <ul className="ads-slider__list">
                <li className="ads-slider__item">
                    <AdBand obj={game2} />
                </li>
                <li className="ads-slider__item">
                    <AdBand obj={game3} />
                </li>
                <li className="ads-slider__item">
                    <AdBand obj={game4} />
                </li>
                <li className="ads-slider__item">
                    <AdBand obj={game5} />
                </li>
            </ul>
        </section>
    );
}

export default AdSlider;