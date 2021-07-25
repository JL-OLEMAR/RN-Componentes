/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    ishappy: true
  })
  const { theme: { colors } } = useContext(ThemeContext)

  const { isActive, isHungry, ishappy } = state

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value
    })
  }

  return (
    <View style={styles.container}>
      <HeaderTitle title='Switches' />

      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>

      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
      </View>

      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>ishappy</Text>
        <CustomSwitch isOn={ishappy} onChange={(value) => onChange(value, 'ishappy')} />
      </View>

      <Text style={{ ...styles.switchText, color: colors.text }}>
        {JSON.stringify(state, null, 4)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  switchText: {
    fontSize: 25
  }
})
