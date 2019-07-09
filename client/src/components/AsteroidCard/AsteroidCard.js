import React from "react";

import styles from './AsteroidCard.css'

//TODO: normalize data (api proxy)
const AsteroidCard = ({ data, unitOfMeasure }) => {
    return (
        <div className={styles.Card}>
            <div>
                <span>name:</span> <span>{data.name}</span>
            </div>
            <div>
                <span>distance:</span> <span>{data.distance[unitOfMeasure]}</span>
            </div>
            <div>
                <span>velocity:</span> <span>{data.velocity[unitOfMeasure]}</span>
            </div>
            <div>
                <span>diameter:</span> <span>{data.diameter[unitOfMeasure].min} - {data.diameter[unitOfMeasure].max}</span>
            </div>
        </div>
    );
};

export default AsteroidCard;