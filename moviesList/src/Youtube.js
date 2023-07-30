import React from 'react';
import MyObj from './MyObj';
import Card from './Card';

const Youtube = () => {
    return(
        <Card
            key={MyObj[0].id}
            imgSrc={MyObj[0].imgSrc}
            name={MyObj[0].name}
            title={MyObj[0].title}
            link={MyObj[2].link}
          />
      )
}

export default Youtube