import React from "react";
import Decimal from 'decimal.js';
import {baseURL} from '~/client'
import {
    Card, CardBody, CardImageContainer, CardContent, CardImage, CardTextBold,
    CardText, CardInfo
} from './style'

//TODO: normalize data (api proxy)
const AsteroidContentModal = ({data, unitOfMeasure, onClick, isCurrentCard}) => {
    const {distance, velocity, diameter, orbitalData, id, orbitingBody} = data;

    const prefixes = {
        imperial: {
            velocity: 'kph',
            distance: 'km',
            diameter: 'm'
        },
        metric: {
            velocity: 'kph',
            distance: 'km',
            diameter: 'm'
        },
    };

    console.log(data);

    return (
        <Card
            isCurrentCard={isCurrentCard}
            borderTopColor={distance.comparison.color}
        >
            <CardBody>
                <CardContent>
                    <CardImageContainer>
                        <CardImage src={`/img/${distance.comparison.image}${distance.comparison.color}.png`}/>
                    </CardImageContainer>
                </CardContent>

                <CardContent>
                    <CardInfo>
                        <CardTextBold>SPK-ID: </CardTextBold>
                        <CardText>
                            #{id}
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Classification: </CardTextBold>
                        <CardText>
                            {orbitalData.orbit_class.orbit_class_type} -
                            ({orbitalData.orbit_class.orbit_class_description} /
                            Range: {orbitalData.orbit_class.orbit_class_range})
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Distance: </CardTextBold>
                        <CardText>
                            {new Decimal(distance[unitOfMeasure]).toFixed(2)} ({prefixes[unitOfMeasure].distance})
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Velocity: </CardTextBold>
                        <CardText>
                            {new Decimal(velocity[unitOfMeasure]).toFixed(2)} ({prefixes[unitOfMeasure].velocity})
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Diameter: </CardTextBold>
                        <CardText>
                            {new Decimal(diameter[unitOfMeasure].min).toFixed(2)} - {new Decimal(diameter[unitOfMeasure].max).toFixed(2)} ({prefixes[unitOfMeasure].diameter})
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Orbiting Body: </CardTextBold>
                        <CardText>
                            {orbitingBody}
                        </CardText>
                    </CardInfo>
                </CardContent>

                <CardContent>
                    <CardInfo>
                        <CardTextBold>
                            Orbital Elements at Epoch {orbitalData.epoch_osculation} TDB
                            Reference: JPL {orbitalData.orbit_id} (heliocentric
                            ecliptic {orbitalData.equinox})
                        </CardTextBold>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Eccentricity: </CardTextBold>
                        <CardText>
                            {orbitalData.eccentricity}
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Semi-Major Axis: </CardTextBold>
                        <CardText>
                            {orbitalData.semi_major_axis} (au)
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Perihelion Distance: </CardTextBold>
                        <CardText>
                            {orbitalData.perihelion_distance} (au)
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Inclination (angle with respect to x-y ecliptic plane): </CardTextBold>
                        <CardText>
                            {orbitalData.inclination} (deg)
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Ascending Node Longitude (longitude of the ascending node): </CardTextBold>
                        <CardText>
                            {orbitalData.ascending_node_longitude} (deg)
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Perihelion Argument: </CardTextBold>
                        <CardText>
                            {orbitalData.perihelion_argument} (deg)
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Mean Anomaly: </CardTextBold>
                        <CardText>
                            {orbitalData.mean_anomaly} (deg)
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Perihelion Time (time of perihelion passage): </CardTextBold>
                        <CardText>
                            {orbitalData.perihelion_time} (TDB)
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Orbital Period (sidereal orbital period): </CardTextBold>
                        <CardText>
                            {orbitalData.orbital_period} (d)
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Mean Motion: </CardTextBold>
                        <CardText>
                            {orbitalData.mean_motion} (deg/d)
                        </CardText>
                    </CardInfo>

                    <CardInfo>
                        <CardTextBold>Aphelion Distance: </CardTextBold>
                        <CardText>
                            {orbitalData.aphelion_distance} (au)
                        </CardText>
                    </CardInfo>
                </CardContent>
            </CardBody>
        </Card>
    );
};

export default AsteroidContentModal;