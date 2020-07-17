import React, { Component } from 'react'
import {Col, Row} from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs='3'>
            <CategoryList currentCategory=''/>
          </Col>
          <Col xs='9'>
            <ProductList/>
          </Col>
        </Row>
      </div>
    )
  }
}
export default DashBoard
