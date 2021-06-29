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
  background: linear-gradient(0deg, rgba(22,22,22,1) 0%, rgba(25,25,25,1) 31%, rgba(33,33,33,0.9668242296918768) 100%);
  grid-area: main;
`
