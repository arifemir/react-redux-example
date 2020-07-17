import React, { Component } from 'react'
import {Container} from "reactstrap";
import DashBoard from "./DashBoard";
import Navi from "../navi/Navi";


class App extends Component {
  render() {
    return (
      <Container>
        <Navi/>
        <DashBoard/>
      </Container>
    )
  }
}

export default App
