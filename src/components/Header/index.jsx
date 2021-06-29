import React, { useContext } from 'react'
import styled from 'styled-components'
import ChevronLeft from '../../assets/icons/Chevron-left.svg'
import ChevronRight from '../../assets/icons/Chevron-right.svg'
import User from '../../assets/icons/User.svg'
import Down from '../../assets/icons/Down.svg'
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
          <User />
          <span>
            Account
          </span>
          <Down />
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
  max-height: 40px;
  background: linear-gradient(0deg, rgba(32,32,32,1) 0%, rgba(38,38,38,0.97) 100%);
  padding: 10px;
  padding-bottom: 40px;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
  }

  button:first-child {
    padding: 8px 32px;
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
    margin-left: 16px;
    border: none;
    background-color: rgba(0,0,0,.7);
    border-radius: 23px;
    display: flex;
    width: 180px;
    height: 32px;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    cursor: pointer;
  }

  div > button > svg:first-child {
    padding: 4px;
    width: 20px;
    height: 20px;
    min-height: 16px;
    min-width: 20px;
    margin: 2px;
    border-radius: 30px;
    background-color: #333;

  }

  div > button > svg:last-child  {
    padding: 5px;
    width: 16px;
    height: 16px;
    min-height: 12px;
    min-width: 12px;
    margin-right: 6px;
    border-radius: 50%;
  }

  div > button > svg > path:last-child{
    fill: white;
  }

  span {
    margin: 0 8px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 28px;
  }

  button:first-child:hover {
    transform: scale(1.06);
    border: 1px solid white;
    background-color: #000;

  }

  button:last-child:hover {
    background-color: #282828;
  }
`
const Button = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#000' : '#0000009d'};

  path {
    fill: ${props => props.active ? 'white' : '#b3b3b3'};
  }

  svg {
    width: ${props => props.active ? '16px' : '14px'};
    height: ${props => props.active ? '18px' : '14px'};
  }
`
