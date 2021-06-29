import React, { useContext } from 'react'
import styled from 'styled-components'
import LogoSpotify from '../../assets/icons/LogoSpotify.svg'
import Home from '../../assets/icons/Home.svg'
import HomeFilled from '../../assets/icons/Home-filled.svg'
import LibraryBig from '../../assets/icons/Library-big.svg'
import SearchBig from '../../assets/icons/Search-Big.svg'
import Heart from '../../assets/icons/Heart.svg'
import AddPlus from '../../assets/icons/Add-plus.svg'
import { AppContext } from '../../context'

const SideBar = () => {
  const { navState, handleSelected } = useContext(AppContext)

  return (
    <Container>
      <Logo />
      {navState}
      <Nav navState={navState}>
        <ul>
          <Li active={navState === 'home'} onClick={() => handleSelected('home')}>
            {
              navState === 'home'
                ? <HomeFilled />
                : <Home />
            }
            <span>Inicio</span>
          </Li>
          <Li
            active={navState === 'search'}
            onClick={() => handleSelected('search')}
          >
            <LibraryBig />
            <span>Buscar</span>
          </Li>
          <Li active={navState === 'library'} onClick={() => handleSelected('library')}>
            <SearchBig />
            <span>Tu Biblioteca</span>
          </Li>
        </ul>
      </Nav>
      <ListContainer>
        <DivButtom active={navState === 'newPlaylist'} color='#ddd9d9' onClick={() => handleSelected('newPlaylist')}>
          <div>
            <AddPlus />
          </div>
          <button>Crear playlist</button>
        </DivButtom>
        <DivButtom
          active={navState === 'favorites'}
          color='linear-gradient(
          135deg
          ,#450af5,#c4efd9);'
          onClick={() => handleSelected('favorites')}
        >
          <div>
            <Heart />
          </div>
          <button>Tus me gusta</button>
        </DivButtom>
        <Divider>
          <hr />
        </Divider>
        <Playlist>Playlist</Playlist>
      </ListContainer>
    </Container>
  )
}

export default SideBar

export const Container = styled.div`
  grid-area: aside;
  background-color: #000;
  color: white;
  height: 90vh;
  width: 289px;
  max-width: 394px;
`

export const Logo = styled(LogoSpotify)`
  padding: 10px 10px 5px 20px;
  width: 180px;
  height: 120px;
`

export const Nav = styled.nav`
  ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    margin: 4px 12px;
    padding: 10px;
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
    padding-left: 12px;
    padding-right: 20px;
  }
  path{
    fill: #b3b3b3;
  }
  span{
    font-size: 14px;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 16px;
    text-transform: none;
  }

  li:hover path,
  li:hover span {
    color: white;
    fill: white;
  }
`

export const Li = styled.li`
  background-color: ${props => props.active ? 'hsla(0,0%,100%,.3)' : ''};
  border-radius: 4px;
  & path, & span {
    color: ${props => props.active ? 'white' : '#b3b3b3'};;
    fill: ${props => props.active ? 'white' : '#b3b3b3'};;
  }
`

export const ListContainer = styled.div`
  height: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`

export const DivButtom = styled.div`
  margin: 4px 12px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 20px;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${props => props.active ? '1' : '.7'};
  transition: opacity .2s linear;
  -webkit-transition: opacity .2s linear;

  button {
    padding: 10px 0;
    background-color: #000;
    color: white;
    text-decoration: none;
    cursor: pointer;
    border: none;
    outline: none;
    text-align: left;

  }
  div {
    width: 24px;
    height: 24px;
    border-radius: 1px;
    background: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    margin-right: 20px;
  }

  svg:first-child {
    width: 12px;
    height: 12px;
  }

  &:hover {
      color: white;
      opacity: 1;
    }
`
export const Divider = styled.div`
  display: flex;
  margin: 8px 20px;
  hr {
    width: 100%;
    height: 1px;
    border: none;
    margin-left: 12px;
    margin-right: 20px;
    background-color: #282828;
  }
`

export const Playlist = styled.div`
  display: flex;
  color: #b3b3b3;
  flex-direction: column;
  margin-top: 4px;
  margin-left: 20px;
  margin-right: 12px;
  padding: 10px 20px;
`
