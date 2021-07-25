/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

export const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext)

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Theme' />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 20,
            justifyContent: 'center',
            height: 50,
            width: 150
          }}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20
          }}
          >
            Ligth
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 20,
            justifyContent: 'center',
            height: 50,
            width: 150
          }}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20
          }}
          >
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
