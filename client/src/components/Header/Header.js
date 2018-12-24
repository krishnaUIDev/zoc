import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 2rem;
  background-color: ${p => p.theme.palette.ash};
  padding: 10px;
`

class Header extends Component {
  render () {
    return <Title>Find a Doctor & more</Title>
  }
}

export default Header
