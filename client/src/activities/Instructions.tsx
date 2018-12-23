import React, { FunctionComponent } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export interface IProps {
  instructions: string[];
}

const Instructions: FunctionComponent<IProps> = ({instructions}) => {
  const items = instructions.map((item, index) => {
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
};

export default Instructions;
