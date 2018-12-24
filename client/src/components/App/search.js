import React, { Component, PropTypes, Fragment } from 'react'
import styled from 'styled-components'
import CustomizedInputBase from './customizedInput'

const Header = styled.div`
  background-color: ${p => p.theme.palette.blue};
`
class Search extends Component {
  render () {
    return (
      <Fragment>
        <Header>tets</Header>
        <CustomizedInputBase />
      </Fragment>
    )
  }
}

Search.propTypes = {}

export default Search
