import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [navState, setNavState] = useState('home')

  function handleSelected (nav) {
    setNavState(nav)
  }

  return (
    <AppContext.Provider value={{
      navState,
      handleSelected
    }}
    >
      {children}
    </AppContext.Provider>
  )
}
