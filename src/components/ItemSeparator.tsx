import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ItemSeparator = () => { // eslint-disable-line
  const { theme: { dividerColor } } = useContext(ThemeContext)

  return (
    <View style={{
      borderBottomWidth: 1,
      marginVertical: 8,
      borderBottomColor: dividerColor
    }}
    />
  )
}
