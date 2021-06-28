import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [navState, setNavState] = useState('home')
  const [navigation, setNavigation] = useState('back')

  function handleSelected (nav) {
    setNavState(nav)
  }

  function goBack (back) {
    setNavigation(back)
  }

  return (
    <AppContext.Provider value={{
      navState,
      navigation,
      handleSelected,
      goBack
    }}
    >
      {children}
    </AppContext.Provider>
  )
}
