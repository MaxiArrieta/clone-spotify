import React, { useContext } from 'react'
import styled from 'styled-components'
import ChevronLeft from '../../assets/icons/Chevron-left.svg'
import ChevronRight from '../../assets/icons/Chevron-right.svg'
import { AppContext } from '../../context'

const Header = () => {
  const { navigation, goBack } = useContext(AppContext)
  return (
    <Container>
      <div>
        <Button active={navigation === 'back'} onClick={() => goBack('back')}>
          <ChevronLeft />
        </Button>
        <Button active={navigation === 'delante'} onClick={() => goBack('delante')}>
          <ChevronRight />
        </Button>
      </div>
      <div>
        <button>
          Premium
        </button>
        <button>
          Account
        </button>
      </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  align-items: center;
  grid-area: header;
  border: 1px solid red;
  max-height: 60px;
  background-color: hsl(0deg 0% 13%);
  padding: 10px;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
  }

  button:first-child {
    padding: 8px 34px;
    margin-right: 20px;
    border: 1px solid hsla(0,0%,100%,.7);
    background-color: #000;
    color: white;
    border-radius: 20px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1.76px;
    line-height: 18px;
  }
  button:last-child {
    border: 1px solid hsla(0,0%,100%,.7);
    background-color: rgba(0,0,0,.7);
    border-radius: 23px;
    padding: 4px 56px;
    color: #fff;
    cursor: pointer;
  }
`
const Button = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#000' : '#0000009d'};

  path {
    fill: ${props => props.active ? 'white' : '#b3b3b3'};
  }

  svg {
    width: ${props => props.active ? '18px' : '14px'};
    height: ${props => props.active ? '18px' : '14px'};
  }
`
