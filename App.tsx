/* eslint-disable @typescript-eslint/explicit-function-return-type */
import 'react-native-gesture-handler'
import * as React from 'react'
import { Navigator } from './src/navigator/Navigator'
import { ThemeProvider } from './src/context/themeContext/ThemeContext'

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors
//     // primary: 'string',
//     // background: 'black'
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//     // notification: 'string'
//   }
// }

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App
