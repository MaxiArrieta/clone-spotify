import * as React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

const IndexPage = () => {
  return (
    <App>
      <Seo />
      <SideBar />
      <Header />
      <Main />
      <Footer />
    </App>
  )
}

export default IndexPage

const App = styled.main`
  display: grid;
  grid-template-areas:
    "aside header header"
    "aside main main"
    "aside main main"
    "footer footer footer";
    grid-template-columns: 1fr 8fr 3fr;
    grid-template-rows: 1fr 8fr 3fr;

`
