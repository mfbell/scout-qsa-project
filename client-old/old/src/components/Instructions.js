import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Instructions(props) {
  let items = props.instructions.map((item, index) => {
    return (
      <ListGroupItem key={item}>
        {index + 1}. {item}
      </ListGroupItem>
    );
  });
  return (
    <>
      <h2>Instructions</h2>
      <ListGroup flush>
        {items}
      </ListGroup>
    </>
  );
}

export default Instructions;