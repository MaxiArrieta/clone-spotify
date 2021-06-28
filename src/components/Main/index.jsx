import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <Container>
      <h2>Main</h2>
    </Container>
  )
}

export default Main

const Container = styled.div`
  grid-area: main;
  border: 1px solid red;
`
