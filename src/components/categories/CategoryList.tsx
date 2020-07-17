import React, {Component} from 'react'
import {connect} from 'react-redux';


type Props = {
  currentCategory:any
}

class CategoryList extends Component <Props> {

  render() {
    return <div>
      <h3>Categories</h3>
      <h5>Secili kategori : {this.props.currentCategory.categoryName}</h5>
    </div>
  }
}

function mapStateToProps(state:any) : any {
  return {
    currentCategory:state.changeCategoryReducer
  }
}

export default connect(mapStateToProps)(CategoryList)
