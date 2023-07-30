import React from 'react';
import MyObj from './MyObj';
import Card from './Card';

const Hotstar = () => {
    return(
        <Card
            key={MyObj[5].id}
            imgSrc={MyObj[2].imgSrc}
            name={MyObj[2].name}
            title={MyObj[2].title}
            link={MyObj[2].link}
          />
      )
}

export default Hotstar