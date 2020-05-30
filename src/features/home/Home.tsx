import React, { ReactElement } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <h2>I'm Mahesh Kedari</h2>
      <p>
        User Interface Developer. specialized in Angular and React technologies.
      </p>
      <img src="/assets/character.png" />
      <br /><br />
      <p>
        <Button variant="primary">Hire Me</Button>{'  '}
        <Button variant="outline-success">Get CV</Button>
      </p>
    </Jumbotron>
  );
}
