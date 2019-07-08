import React from "react";

//TODO: normalize data (api proxy)
const AsteroidCard = ({data}, config) => {
    return (
        <div>
            <div>
                <span>name:</span> <span>{data.name}</span>
            </div>
            <div>
                <span>distance:</span> <span>{data.close_approach_data[0].miss_distance.kilometers}</span>
            </div>
            <div>
                <span>velocity:</span> <span>{data.close_approach_data[0].relative_velocity.kilometers_per_hour}</span>
            </div>
            <div>
                <span>diameter:</span> <span>{data.estimated_diameter.kilometers.estimated_diameter_min} - {data.estimated_diameter.kilometers.estimated_diameter_max}</span>
            </div>
        </div>
    );
};

export default AsteroidCard;