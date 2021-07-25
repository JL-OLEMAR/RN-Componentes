/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/consistent-type-assertions */
import React, { createContext, useEffect, useReducer } from 'react'
import { Appearance, AppState } from 'react-native'
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer'

interface ThemeContextProps {
  theme: ThemeState
  setDarkTheme: () => void
  setLightTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: any) => {
  const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme)

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === 'active') {
        (Appearance.getColorScheme() === 'light') ? setLightTheme() : setDarkTheme()
      }
    })
  }, [])

  // Solo en IOS por ahora
  // useEffect(() => {
  //   (colorScheme === 'light') ? setLightTheme() : setDarkTheme()
  // }, [colorScheme])

  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' })
    console.log('setDarkTheme')
  }

  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' })
    console.log('setLightTheme')
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
