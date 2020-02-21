import React from 'react';

import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const List = (props) => {
    console.log('PROPS ',props)

    if (props !== null | undefined) {
  return (
    <div>
      <Card className='Card'>
        <CardBody className='Card-Body'>
          <CardTitle className='Card-Title'>{props.data.name}</CardTitle>
          <CardSubtitle className='Card-Subtitle'>Born: {props.data.birth_year}</CardSubtitle>
          <CardText className='Card-Text'>
            Gender: {props.data.gender} <br/>
            Hair color: {props.data.hair_color} <br/>
            Eye Color: {props.data.eye_color} <br/>
            Appears in {props.data.films.length} Films <br/>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
else {
    return (null)
}
}
export default List;