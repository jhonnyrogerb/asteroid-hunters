import React from "react";
import Decimal from 'decimal.js';

import {
  CardHeader, Card, CardBody, CardImageContainer, CardContent, CardImage, CardTextBold,
  CardText, CardInfo
} from './style'

//TODO: normalize data (api proxy)
const AsteroidCard = ({ data, unitOfMeasure, onClick, isCurrentCard }) => {
  const { distance, velocity, diameter } = data;

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
  }

  return (
    <Card
      isCurrentCard={isCurrentCard}
      borderBottomColor={distance.comparison.color}
      onClick={() => onClick && onClick()}
    >
      <CardHeader>{data.name}</CardHeader>
      <CardBody>
        <CardImageContainer>
          <CardImage src={`/img/${distance.comparison.image}${distance.comparison.color}.png`} />
        </CardImageContainer>

        <CardContent>
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
        </CardContent>
      </CardBody>
    </Card>
  );
};

export default AsteroidCard;