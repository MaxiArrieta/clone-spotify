import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <h2>Footer</h2>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  grid-area: footer;
  border: 1px solid red;
  color: white;
`
