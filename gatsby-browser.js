const React = require('react')
const { GlobalStyle } = require('./src/styles')
const { AppProvider } = require('./src/context')

exports.wrapRootElement = ({ element }) => (
  <AppProvider>
    <GlobalStyle />
    {element}
  </AppProvider>
)
